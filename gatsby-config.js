/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Skyland Woll",
    author: "Skyland Woll",
    titleTemplate: "%s · Frontend Web Developer",
    description:
      "Let's use the web for good. I'm a frontend web developer ready to design and build your next world-changing website.",
    url: "https://skyland.dev", // No trailing slash allowed!
    image: "/skyland-dev-social.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@therealskyland",
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("bourbon").includePaths],
      },
    },
  ],
}
