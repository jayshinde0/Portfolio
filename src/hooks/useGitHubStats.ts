import { useState, useEffect } from 'react';
import {
  fetchGitHubUser,
  fetchGitHubRepos,
  calculateLanguageStats,
  getTotalStars,
  getTotalForks,
  getMockCommitData,
  getLanguageColor,
  getCodingStreak,
  fetchDetailedRepoStats,
  calculateLanguagePercentages,
  fetchCommitActivity,
  type GitHubUser,
  type GitHubRepo,
  type LanguageStats,
} from '../utils/githubApi';

interface GitHubStatsData {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  languageStats: LanguageStats;
  languagePercentages: any[];
  totalStars: number;
  totalForks: number;
  totalRepos: number;
  commitData: any[];
  codingStreak: number;
  detailedStats: any;
  loading: boolean;
  error: string | null;
}

export const useGitHubStats = () => {
  const [data, setData] = useState<GitHubStatsData>({
    user: null,
    repos: [],
    languageStats: {},
    languagePercentages: [],
    totalStars: 0,
    totalForks: 0,
    totalRepos: 0,
    commitData: [],
    codingStreak: 0,
    detailedStats: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setData(prev => ({ ...prev, loading: true, error: null }));

        // Fetch user and repos data
        const [user, repos] = await Promise.all([
          fetchGitHubUser(),
          fetchGitHubRepos(),
        ]);

        if (!user) {
          throw new Error('Failed to fetch user data');
        }

        console.log('Fetched user:', user.name || user.login);
        console.log('Fetched repos count:', repos.length);

        // Calculate basic statistics
        const languageStats = calculateLanguageStats(repos);
        const totalStars = getTotalStars(repos);
        const totalForks = getTotalForks(repos);
        const codingStreak = await getCodingStreak();

        // Fetch detailed statistics (this may take longer)
        const [detailedStats, commitData] = await Promise.all([
          fetchDetailedRepoStats(repos),
          fetchCommitActivity(),
        ]);

        // Calculate language percentages from detailed stats
        const languagePercentages = Object.keys(detailedStats.languageBytes).length > 0
          ? calculateLanguagePercentages(detailedStats.languageBytes)
          : [];

        console.log('Language percentages:', languagePercentages);
        console.log('Detailed stats:', detailedStats);

        setData({
          user,
          repos,
          languageStats,
          languagePercentages,
          totalStars,
          totalForks,
          totalRepos: repos.length,
          commitData,
          codingStreak,
          detailedStats,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setData(prev => ({
          ...prev,
          loading: false,
          error: error instanceof Error ? error.message : 'Failed to fetch GitHub data',
        }));
      }
    };

    fetchData();
  }, []);

  // Convert language stats to chart format
  const getLanguageChartData = () => {
    // Use detailed language percentages if available, otherwise fall back to basic stats
    if (data.languagePercentages.length > 0) {
      return data.languagePercentages;
    }

    // Fallback to basic language stats with estimated lines
    const entries = Object.entries(data.languageStats);
    const total = entries.reduce((sum, [, count]) => sum + count, 0);
    
    if (total === 0) return [];
    
    return entries
      .map(([language, count]) => ({
        name: language,
        value: Math.round((count / total) * 100),
        count,
        color: getLanguageColor(language),
        lines: Math.floor(count * 2500 + Math.random() * 1000), // Estimate based on repo count
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 7); // Top 7 languages
  };

  // Get recent repositories
  const getRecentRepos = (limit = 6) => {
    return data.repos
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, limit);
  };

  // Get repository stats by language
  const getReposByLanguage = () => {
    const languageRepos: { [key: string]: GitHubRepo[] } = {};
    
    data.repos.forEach(repo => {
      if (repo.language) {
        if (!languageRepos[repo.language]) {
          languageRepos[repo.language] = [];
        }
        languageRepos[repo.language].push(repo);
      }
    });

    return Object.entries(languageRepos)
      .map(([language, repos]) => ({
        language,
        count: repos.length,
        totalStars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
        color: getLanguageColor(language),
      }))
      .sort((a, b) => b.count - a.count);
  };

  return {
    ...data,
    getLanguageChartData,
    getRecentRepos,
    getReposByLanguage,
  };
};