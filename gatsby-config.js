/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("bourbon").includePaths],
      },
    },
  ],
}
