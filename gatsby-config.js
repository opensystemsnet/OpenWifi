module.exports = {
  siteMetadata: {
    title: `OpenWifi.com`,
    description: `Enterprise-Grade OpenWifi Solutions`,
    author: `OpenWifi.com Team`,
    siteUrl: `https://openwifi.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        name: `OpenWifi.com`,
        short_name: `OpenWifi`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0066cc`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
} 