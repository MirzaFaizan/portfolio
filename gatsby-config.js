module.exports = {
  siteMetadata: {
    description: "My history as a professional",
    locale: "en",
    title: "Mirza Faizan Ejaz",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: false,
        theme: "dark-blue",
      },
    },
  ],
}
