/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://artdecorboston.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/404"],
  additionalPaths: async () => [
    "/",
    "/about",
    "/services",
    "/gallery",
    "/contact",
  ],
};
