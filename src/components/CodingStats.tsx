import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGitHubStats } from '../hooks/useGitHubStats';
import { Code, GitBranch, Star, Users } from 'lucide-react';

const CodingStats = () => {
  const [animatedValues, setAnimatedValues] = useState({
    commits: 0,
    repos: 0,
    stars: 0,
    followers: 0,
  });

  const {
    user,
    totalStars,
    totalRepos,
    codingStreak,
    getLanguageChartData,
    loading,
  } = useGitHubStats();

  const githubStats = {
    totalCommits: 500,
    totalRepos: totalRepos || 30,
    totalStars: totalStars || 6,
    followers: user?.followers || 7,
  };

  const realLanguageData = getLanguageChartData();
  const languagesData = realLanguageData.length > 0 ? realLanguageData : [
    { name: 'JavaScript', value: 35, lines: 15420 },
    { name: 'TypeScript', value: 25, lines: 11230 },
    { name: 'Python', value: 20, lines: 8950 },
    { name: 'Java', value: 10, lines: 4560 },
    { name: 'C++', value: 5, lines: 2340 },
  ];

  useEffect(() => {
    if (!loading) {
      const duration = 1500;
      const steps = 50;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedValues({
          commits: Math.floor(githubStats.totalCommits * progress),
          repos: Math.floor(githubStats.totalRepos * progress),
          stars: Math.floor(githubStats.totalStars * progress),
          followers: Math.floor(githubStats.followers * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedValues({
            commits: githubStats.totalCommits,
            repos: githubStats.totalRepos,
            stars: githubStats.totalStars,
            followers: githubStats.followers,
          });
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [loading, totalRepos, totalStars]);

  if (loading) {
    return (
      <section className="py-24 px-4 bg-black min-h-screen flex items-center justify-center relative z-10">
        <div className="text-gray-400">Loading stats...</div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-black min-h-screen relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Coding</span>
            <span className="text-gray-500"> Stats</span>
          </h2>
          <p className="text-gray-400">
            Real-time insights from my GitHub profile
          </p>
          {user && (
            <p className="text-gray-500 text-sm mt-2">
              @{user.login} • {totalRepos} repos • {totalStars} stars
            </p>
          )}
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: GitBranch, label: 'Commits', value: animatedValues.commits },
            { icon: Code, label: 'Repositories', value: animatedValues.repos },
            { icon: Star, label: 'Stars', value: animatedValues.stars },
            { icon: Users, label: 'Followers', value: animatedValues.followers },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-xl p-6 bg-neutral-900 text-center"
            >
              <stat.icon className="w-6 h-6 text-gray-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-white/10 rounded-2xl p-8 bg-neutral-900"
        >
          <h3 className="text-xl font-medium text-white mb-8">Language Breakdown</h3>
          <div className="space-y-4">
            {languagesData.slice(0, 6).map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white">{lang.name}</span>
                  <span className="text-gray-500 text-sm">{lang.value}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          <div className="border border-white/10 rounded-xl p-6 bg-neutral-900 text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {loading ? '...' : codingStreak || 45}
            </div>
            <div className="text-gray-500 text-sm">Day Streak</div>
          </div>
          
          <div className="border border-white/10 rounded-xl p-6 bg-neutral-900 text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {user?.followers || 7}
            </div>
            <div className="text-gray-500 text-sm">Followers</div>
          </div>
          
          <div className="border border-white/10 rounded-xl p-6 bg-neutral-900 text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {languagesData.reduce((total, lang) => total + (lang.lines || 0), 0).toLocaleString()}
            </div>
            <div className="text-gray-500 text-sm">Lines of Code</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStats;
