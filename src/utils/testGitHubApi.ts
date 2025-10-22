// Test GitHub API functionality
import { fetchGitHubUser, fetchGitHubRepos } from './githubApi';

export const testGitHubAPI = async () => {
  console.log('🔍 Testing GitHub API for jayshinde0...');
  
  try {
    // Test user fetch
    const user = await fetchGitHubUser();
    if (user) {
      console.log('✅ User data fetched successfully:');
      console.log(`   Name: ${user.name || 'Not set'}`);
      console.log(`   Username: ${user.login}`);
      console.log(`   Public Repos: ${user.public_repos}`);
      console.log(`   Followers: ${user.followers}`);
      console.log(`   Bio: ${user.bio || 'Not set'}`);
    } else {
      console.log('❌ Failed to fetch user data');
    }

    // Test repos fetch
    const repos = await fetchGitHubRepos();
    if (repos.length > 0) {
      console.log(`✅ Repositories fetched successfully: ${repos.length} repos`);
      console.log('   Recent repositories:');
      repos.slice(0, 5).forEach(repo => {
        console.log(`   - ${repo.name} (${repo.language || 'No language'}) ⭐${repo.stargazers_count}`);
      });
      
      // Language distribution
      const languages = repos.reduce((acc: any, repo) => {
        if (repo.language) {
          acc[repo.language] = (acc[repo.language] || 0) + 1;
        }
        return acc;
      }, {});
      
      console.log('   Language distribution:', languages);
      
      // Total stars
      const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
      console.log(`   Total stars across all repos: ${totalStars}`);
      
    } else {
      console.log('❌ No repositories found or failed to fetch');
    }

  } catch (error) {
    console.error('❌ GitHub API test failed:', error);
  }
};

// Auto-run test in development
if (import.meta.env.DEV) {
  // Run test after a short delay to avoid blocking initial load
  setTimeout(testGitHubAPI, 2000);
}