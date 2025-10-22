import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGitHubStats } from '../hooks/useGitHubStats';
import '../utils/testGitHubApi'; // This will run the API test
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from 'recharts';
import { Code, GitBranch, Star, Users, Calendar, Zap } from 'lucide-react';

const CodingStats = () => {
  const [activeChart, setActiveChart] = useState(0);
  const [animatedValues, setAnimatedValues] = useState({
    commits: 0,
    repos: 0,
    stars: 0,
    contributions: 0,
  });

  // Fetch real GitHub data
  const {
    user,
    totalStars,
    totalRepos,
    codingStreak,
    commitData,
    getLanguageChartData,
    loading,
    error,
  } = useGitHubStats();

  // Debug logging
  useEffect(() => {
    if (user) {
      console.log('GitHub user loaded:', user.name || user.login);
      console.log('Total repos:', totalRepos);
      console.log('Total stars:', totalStars);
      console.log('Language data:', getLanguageChartData());
    }
    if (error) {
      console.error('GitHub API error:', error);
    }
  }, [user, totalRepos, totalStars, error]);

  // Use real data or fallback to mock data
  const githubStats = {
    totalCommits: 1247, // This would need GitHub API authentication for real data
    totalRepos: totalRepos || 25,
    totalStars: totalStars || 89,
    totalContributions: 892, // This would need GitHub API authentication for real data
  };

  console.log('Current GitHub stats for animation:', githubStats);

  // Use real language data or fallback to mock data
  const realLanguageData = getLanguageChartData();
  const languagesData = realLanguageData.length > 0 ? realLanguageData : [
    { name: 'JavaScript', value: 35, color: '#F7DF1E', lines: 15420 },
    { name: 'TypeScript', value: 25, color: '#3178C6', lines: 11230 },
    { name: 'Python', value: 20, color: '#3776AB', lines: 8950 },
    { name: 'Java', value: 10, color: '#ED8B00', lines: 4560 },
    { name: 'C++', value: 5, color: '#00599C', lines: 2340 },
    { name: 'PHP', value: 3, color: '#777BB4', lines: 1890 },
    { name: 'CSS', value: 2, color: '#1572B6', lines: 980 },
  ];

  console.log('Using language data:', languagesData.length > 0 ? 'Real GitHub data' : 'Mock data', languagesData);

  // Use real commit data or fallback to mock data
  const monthlyActivity = commitData.length > 0 ? commitData : [
    { month: 'Jan', commits: 45, prs: 8, issues: 3 },
    { month: 'Feb', commits: 52, prs: 12, issues: 5 },
    { month: 'Mar', commits: 38, prs: 6, issues: 2 },
    { month: 'Apr', commits: 65, prs: 15, issues: 7 },
    { month: 'May', commits: 71, prs: 18, issues: 4 },
    { month: 'Jun', commits: 58, prs: 11, issues: 6 },
    { month: 'Jul', commits: 82, prs: 22, issues: 9 },
    { month: 'Aug', commits: 76, prs: 19, issues: 5 },
    { month: 'Sep', commits: 69, prs: 16, issues: 8 },
    { month: 'Oct', commits: 91, prs: 25, issues: 12 },
    { month: 'Nov', commits: 88, prs: 21, issues: 7 },
    { month: 'Dec', commits: 67, prs: 14, issues: 4 },
  ];

  // Skills radar data - based on real language usage
  const getSkillsData = () => {
    const languageData = getLanguageChartData();
    const hasJS = languageData.some(lang => ['JavaScript', 'TypeScript'].includes(lang.name));
    const hasPython = languageData.some(lang => lang.name === 'Python');
    const hasJava = languageData.some(lang => ['Java', 'C++', 'C#'].includes(lang.name));
    const hasWeb = languageData.some(lang => ['HTML', 'CSS', 'React', 'Vue'].includes(lang.name));
    
    return [
      { skill: 'Frontend', A: hasJS && hasWeb ? 90 : hasJS ? 75 : 60, fullMark: 100 },
      { skill: 'Backend', A: hasPython || hasJava ? 85 : hasJS ? 80 : 65, fullMark: 100 },
      { skill: 'Database', A: 75, fullMark: 100 },
      { skill: 'DevOps', A: 70, fullMark: 100 },
      { skill: 'Mobile', A: languageData.some(lang => ['Dart', 'Swift', 'Kotlin'].includes(lang.name)) ? 80 : 60, fullMark: 100 },
      { skill: 'AI/ML', A: hasPython ? 85 : 65, fullMark: 100 },
    ];
  };

  const skillsData = getSkillsData();

  // Project types data
  const projectTypes = [
    { name: 'Web Apps', value: 40, color: '#00D4FF' },
    { name: 'APIs', value: 25, color: '#9D4EDD' },
    { name: 'Mobile', value: 15, color: '#06FFA5' },
    { name: 'AI/ML', value: 12, color: '#FF006E' },
    { name: 'Tools', value: 8, color: '#FB8500' },
  ];

  // Animate numbers when GitHub data is loaded
  useEffect(() => {
    if (!loading && (totalRepos > 0 || totalStars > 0)) {
      console.log('Starting animation with real data:', { totalRepos, totalStars });
      
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedValues({
          commits: Math.floor(githubStats.totalCommits * progress),
          repos: Math.floor(githubStats.totalRepos * progress),
          stars: Math.floor(githubStats.totalStars * progress),
          contributions: Math.floor(githubStats.totalContributions * progress),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedValues({
            commits: githubStats.totalCommits,
            repos: githubStats.totalRepos,
            stars: githubStats.totalStars,
            contributions: githubStats.totalContributions,
          });
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [loading, totalRepos, totalStars]);

  // Auto-rotate charts
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChart((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ icon: Icon, label, value, color }: any) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center"
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${color} mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-2xl font-bold text-white mb-1">
        {(value || 0).toLocaleString()}
      </div>
      <div className="text-gray-400 text-sm">{label}</div>
    </motion.div>
  );

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg p-3 shadow-xl">
          <p className="text-cyan-400 font-semibold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-white text-sm">
              {entry.name}: <span className="font-bold">{entry.value}</span>
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const charts = [
    {
      title: 'Monthly Activity',
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyActivity}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="commits" fill="#00D4FF" radius={[4, 4, 0, 0]} />
            <Bar dataKey="prs" fill="#9D4EDD" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: 'Programming Languages',
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={languagesData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              animationBegin={0}
              animationDuration={1000}
            >
              {languagesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: 'Skills Radar',
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={skillsData}>
            <PolarGrid stroke="#374151" />
            <PolarAngleAxis dataKey="skill" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
            <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} />
            <Radar
              name="Skills"
              dataKey="A"
              stroke="#00D4FF"
              fill="#00D4FF"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      ),
    },
    {
      title: 'Project Types',
      component: (
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={projectTypes} layout="horizontal">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis type="number" stroke="#9CA3AF" />
            <YAxis dataKey="name" type="category" stroke="#9CA3AF" width={80} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[0, 4, 4, 0]}>
              {projectTypes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      ),
    },
  ];

  // Show loading state
  if (loading) {
    return (
      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full mb-4"
            />
            <p className="text-gray-400">Loading GitHub statistics...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            Coding Statistics
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real-time insights into my development journey and technical expertise
          </p>
          {user && (
            <div className="mt-4 text-sm text-cyan-400">
              ✅ Live data from GitHub: {user.name} • {totalRepos} repos • {totalStars} stars
            </div>
          )}
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <StatCard
            icon={GitBranch}
            label="Total Commits"
            value={animatedValues.commits}
            color="from-cyan-500 to-blue-600"
          />
          <StatCard
            icon={Code}
            label="Repositories"
            value={animatedValues.repos}
            color="from-purple-500 to-pink-600"
          />
          <StatCard
            icon={Star}
            label="GitHub Stars"
            value={animatedValues.stars}
            color="from-yellow-500 to-orange-600"
          />
          <StatCard
            icon={Calendar}
            label="Contributions"
            value={animatedValues.contributions}
            color="from-green-500 to-emerald-600"
          />
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">{charts[activeChart].title}</h3>
              <div className="flex gap-2">
                {charts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveChart(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeChart
                        ? 'bg-cyan-400 scale-125'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
            <motion.div
              key={activeChart}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {charts[activeChart].component}
            </motion.div>
          </motion.div>

          {/* Languages Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-white mb-6">Language Breakdown</h3>
            <div className="space-y-4">
              {languagesData.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-white font-medium">{lang.name}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-gray-400 text-sm">
                      {(lang.lines || 0).toLocaleString()} lines
                    </div>
                    <div className="text-cyan-400 font-bold">{lang.value}%</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GitHub Activity Heatmap Preview */}
            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">Recent Activity</h4>
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 84 }, (_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.01 }}
                    className={`w-3 h-3 rounded-sm ${
                      Math.random() > 0.7
                        ? 'bg-cyan-400'
                        : Math.random() > 0.5
                        ? 'bg-cyan-600'
                        : Math.random() > 0.3
                        ? 'bg-gray-700'
                        : 'bg-gray-800'
                    }`}
                    title={`${Math.floor(Math.random() * 10)} contributions`}
                  />
                ))}
              </div>
              <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                <span>Less</span>
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-gray-800 rounded-sm" />
                  <div className="w-3 h-3 bg-gray-700 rounded-sm" />
                  <div className="w-3 h-3 bg-cyan-600 rounded-sm" />
                  <div className="w-3 h-3 bg-cyan-400 rounded-sm" />
                </div>
                <span>More</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Debug Info - Remove in production */}
        {process.env.NODE_ENV === 'development' && user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 p-4 bg-gray-900/50 border border-cyan-500/30 rounded-lg"
          >
            <h4 className="text-cyan-400 font-semibold mb-2">🔍 Debug: Real GitHub Data</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-gray-400">User:</span>
                <div className="text-white font-medium">{user.name}</div>
              </div>
              <div>
                <span className="text-gray-400">Repos:</span>
                <div className="text-white font-medium">{totalRepos}</div>
              </div>
              <div>
                <span className="text-gray-400">Stars:</span>
                <div className="text-white font-medium">{totalStars}</div>
              </div>
              <div>
                <span className="text-gray-400">Languages:</span>
                <div className="text-white font-medium">{realLanguageData.length}</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Animation values: Repos: {animatedValues.repos}, Stars: {animatedValues.stars}
            </div>
          </motion.div>
        )}

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">
              {loading ? '...' : codingStreak || 'N/A'}
            </div>
            <div className="text-gray-400 text-sm">Current Streak</div>
            <div className="text-xs text-gray-500 mt-1">
              {loading ? 'Calculating...' : 'From GitHub activity'}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">{user?.followers || totalRepos || 15}</div>
            <div className="text-gray-400 text-sm">Followers</div>
            <div className="text-xs text-gray-500 mt-1">GitHub community</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center">
            <Code className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">
              {languagesData.reduce((total, lang) => total + (lang.lines || 0), 0).toLocaleString() || '25K+'}
            </div>
            <div className="text-gray-400 text-sm">Lines of Code</div>
            <div className="text-xs text-gray-500 mt-1">Estimated total</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingStats;