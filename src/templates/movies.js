import * as React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import "../styles/page.css";

const Movies = ({ pageContext }) => {
    const { movie } = pageContext;

    return (
        <Layout>
            <div className="container">
                <h1>{movie.Title}</h1>
                <img src={movie.Poster} alt={movie.Title} />
                <p>Year: {movie.Year}</p>
                <p>Rated: {movie.Rated}</p>
                <p>Released: {movie.Released}</p>
                <p>Runtime: {movie.Runtime}</p>
                <p>Genre: {movie.Genre}</p>
                <p>Director: {movie.Director}</p>
                <p>Writer: {movie.Writer}</p>
                <p>Actors: {movie.Actors}</p>
                <p>Plot: {movie.Plot}</p>
                <p>Language: {movie.Language}</p>
                <p>Country: {movie.Country}</p>
                <p>Awards: {movie.Awards}</p>
                <p>IMDb Rating: {movie.imdbRating}</p>
                <p>IMDb Votes: {movie.imdbVotes}</p>
            </div>
        </Layout>
    )
}

Movies.propTypes = {
    pageContext: PropTypes.shape({
        movie: PropTypes.shape({
            Title: PropTypes.string,
            Poster: PropTypes.string,
            Year: PropTypes.string,
            Rated: PropTypes.string,
            Released: PropTypes.string,
            Runtime: PropTypes.string,
            Genre: PropTypes.string,
            Director: PropTypes.string,
            Writer: PropTypes.string,
            Actors: PropTypes.string,
            Plot: PropTypes.string,
            Language: PropTypes.string,
            Country: PropTypes.string,
            Awards: PropTypes.string,
            imdbRating: PropTypes.string,
            imdbVotes: PropTypes.string,
        }),
    }).isRequired,
};


export const Head = () => <Footer title="Using DSG" />

export default Movies
