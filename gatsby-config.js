/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: ["@chakra-ui/gatsby-plugin"],
  pathPrefix: "github-files-zip",
  siteMetadata: {
    title: `Github File Download`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  //html: { useGatsbyImage: false }
}
