
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/emmakellett/Documents/my-gatsby-site/.cache/dev-404-page.js")),
  "component---src-pages-contact-js": preferDefault(require("/Users/emmakellett/Documents/my-gatsby-site/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/emmakellett/Documents/my-gatsby-site/src/pages/index.js"))
}

