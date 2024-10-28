/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `マブ論 アーカイブ`,
    description: `TBSラジオ「アフター6ジャンクション2」の最新アイドルソング的時評コーナー『マブ論』で紹介された楽曲のアーカイブを目的としたファンサイトです。`,
    author: `Aokirishima`,
    siteUrl: `https://eclectic-peony-68ec4c.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `songs`,
        path: `${__dirname}/src/maburon-data/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `maburon-achive`,
        short_name: `maburon`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/maburon-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-remark-responsive-iframe`,
    },
  ],
}
