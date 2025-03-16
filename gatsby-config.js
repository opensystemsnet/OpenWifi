module.exports = {
  siteMetadata: {
    title: `OpenWifi`,
    description: `Enterprise-Grade OpenWifi Solutions`,
    author: `@openwifi`,
    siteUrl: `https://opensystemsnet.github.io/OpenWifi`,
  },
  pathPrefix: "/OpenWifi",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `openwifi`,
        short_name: `openwifi`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0052CC`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
} 