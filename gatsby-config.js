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
      }
    },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Mirza Faizan`,
          short_name: `mirzafaizan`,
          start_url: `/`,
          background_color: `#0000ff`,
          theme_color: `#0000ff`,
          display: `standalone`,
          icon: `content/images/logo.svg`, // This path is relative to the root of the site.
        },
      },
      {
        resolve: `gatsby-plugin-offline`,
        options: {
          precachePages: [`/`]
        },
      },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // replace "UA-XXXXXXXXX-X" with your own Tracking ID
          trackingId: "UA-167100745-1",
        },
      },
  ],
}
