/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
require('dotenv').config();
const gql = require('graphql-tag');

const getMovieInformation = async (movieId) => {
  const omdbApiKey = process.env.OMDB_API_KEY;

  try {

  const response = await fetch(`https://omdbapi.com/?i=${movieId}&apiKey=${omdbApiKey}`);

  return await response.json();



  } catch (error) {
    console.log('woops no data')
    console.error(error);
  }
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const movieIds = [
    "tt2911666", // John Wick (2014)
    "tt4425200", // John Wick: Chapter 2 (2017)
    "tt6146586", // John Wick: Chapter 3 - Parabellum (2019)
    "tt10366206", // John Wick: Chapter 4 (2021)
  ];
  const getMoviesDetails = await Promise.all(movieIds.map(async movieId => {
    const movie = await getMovieInformation(movieId);
    console.log(movie)
    const imageUrl = movie.Poster;
    return {
      ...movie,
      imageUrl,
    };
  }));
  getMoviesDetails.forEach(movie => {
    createPage({
      path: "/movies/" + movie.imdbID,
      component: require.resolve("./src/templates/movies.js"),
      context: { movie },
    })
  });

}
