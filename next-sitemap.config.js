/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ngelingoma.vercel.app/', // replace with actual domain
    generateRobotsTxt: true,
    sitemapSize: 10000, // Increases the max entries per sitemap to 10,000
    changefreq: 'weekly',
    priority: 0.7,
  };
  