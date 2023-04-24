import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Footer from "../components/Footer"
import '../styles/page.css';

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



export const Head = () => <Footer title="Using DSG" />

export default Movies
