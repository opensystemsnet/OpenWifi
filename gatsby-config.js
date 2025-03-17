module.exports = {
  pathPrefix: '/OpenWifi',
  siteMetadata: {
    title: 'OpenWifi',
    description: 'Enterprise-Grade OpenWifi Solutions',
    author: '@opensystemsnet',
    siteUrl: 'https://openwifi.netlify.app',
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'OpenWifi',
        short_name: 'OpenWifi',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0052CC',
        display: 'minimal-ui',
        icon: 'src/images/icon.svg',
      },
    },
  ],
} 