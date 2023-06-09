import * as React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Layout from "../components/Layout";
import Footer from "../components/Footer";

const UsingSSR = ({ serverData }) => {
    return (
        <Layout>
            <h1>
                This page is <b>rendered server-side</b>
            </h1>
            <p>
                This page is rendered server side every time the page is requested.
                Reload it to see a(nother) random photo from{" "}
                <code>dog.ceo/api/breed/shiba/images/random</code>:
            </p>
            <img
                style={{ width: "320px", borderRadius: "var(--border-radius)" }}
                alt="A random dog"
                src={serverData.message}
            />
            <p></p>
            <Link to="/">Go back to the homepage</Link>
        </Layout>
    );
};

UsingSSR.propTypes = {
    serverData: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }).isRequired,
};

export const Head = () => <Footer title="Using SSR" />;

export default UsingSSR;

export async function getServerData() {
    try {
        const res = await fetch(`https://dog.ceo/api/breed/shiba/images/random`);
        if (!res.ok) {
            throw new Error(`Response failed`);
        }
        return {
            props: await res.json(),
        };
    } catch (error) {
        return {
            status: 500,
            headers: {},
            props: {},
        };
    }
}

