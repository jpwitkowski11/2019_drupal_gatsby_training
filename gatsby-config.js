module.exports = {
  siteMetadata: {
    title: `Gatsby + Drupal 8`,
    slogan: `A Match Made in Heaven`,
<<<<<<< HEAD
    description: `A demo site made in our Gatsby + Drupal training session at Drupal Camp Chatanooga 2019!`,
    author: `nerdstein`,
=======
    description: `A demo site made in our Gatsby + Drupal 8 training session at Badcamp 2019`,
    author: `@jpwitkowski11`,
>>>>>>> 00-initial
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
<<<<<<< HEAD
        baseUrl: `https://d0s4q.ply.st`, // use your simplytest url here
=======
        baseUrl: `https://stm5d95917bef2e4-l6po7xb9wogqpizeor0rmtsio9o6wfcc.tugboat.qa/`, // optional: use your simplytest url here
>>>>>>> 00-initial
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
