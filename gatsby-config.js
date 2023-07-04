/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/emmaRichie",
  siteMetadata: {
    title: `Emma & Richard 2024`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-google-gtag", "gatsby-plugin-sitemap", {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `monserrat`,
        `source sans pro\:300,400,400i,500` // you can also specify font weights and styles
      ],
      display: 'swap'
    },
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }],
  plugins: ["gatsby-plugin-netlify"]
};