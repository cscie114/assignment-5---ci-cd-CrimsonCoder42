import * as React from "react"
import Layout from '../components/Layout';
import '../styles/page.css';

const AboutPage = () => {
    return (
        <Layout>
            <div className="container">
                <h1>About Us</h1>
                <p>We are a team of developers who are passionate about creating great websites and web applications.</p>
                <p>Our mission is to help businesses and organizations succeed online by providing them with the tools and expertise they need to build a strong online presence.</p>
            </div>
        </Layout>
    )
}

export default AboutPage

export const Head = () => <title>About Page</title>