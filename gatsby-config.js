module.exports = {
  plugins: [
    // TypeScript transpilation
    `gatsby-plugin-typescript`,

    // Throws TypeScript-errors
    `gatsby-plugin-typescript-checker`,

    // Linter - Expects a tslint.json configuration in root
    `gatsby-plugin-tslint`,

    // Generate types from your GraphQL queries
    {
      resolve: "gatsby-plugin-codegen",
      options: {}
    },

    // Transform images (crop, rotate),
    // see https://github.com/lovell/sharp and https://www.npmjs.com/package/gatsby-plugin-sharp
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // add gatsby-links behavior to all local links
    `gatsby-plugin-catch-links`,

    `gatsby-plugin-react-helmet`
  ]
};
