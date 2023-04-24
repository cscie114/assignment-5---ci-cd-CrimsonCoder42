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
            <h1>
                { movie.Title }
            </h1>
            <p>Year: { movie.Year }</p>
            <p>Rated: { movie.Rated }</p>
            <p>{ movie.Plot }</p>
            <img src={movie.Poster} alt={movie.Title} />
            </div>
        </Layout>
    )
}



export const Head = () => <Footer title="Using DSG" />

export default Movies
