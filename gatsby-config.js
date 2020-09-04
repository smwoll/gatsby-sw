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
    titleTemplate: "%s · Skyland Woll · Front End Web Developer",
    description:
      "Hi, I'm Skyland Woll. I'm a front end web developer ready to design and build your next world-changing website.",
    url: "https://skyland.dev", // No trailing slash allowed!
    SiteUrl: "https://skyland.dev",
    image: "/skyland-dev-social.jpeg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@therealskyland",
  },
  plugins: [
    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("bourbon").includePaths],
      },
    },
  ],
}
