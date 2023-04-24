import * as React from "react";
import Layout from '../components/Layout';
import '../styles/page.css';

const ContactPage = () => {
    return (
        <Layout>
            <div className="container">
                <div>
                    <h3>Join our Fandom</h3>
                    <p>Register below to join the best John Wick Fan club.</p>
                    <form method="post"
                          name="Data Collection Form"
                          data-netlify="true">
                        <input type="hidden" name="form-name" value="Data Collection Form"/>
                        <label>
                            Name
                            <input type="text" name="name" id="name" />
                        </label><br/>
                        <label>
                            Email
                            <input type="email" name="email" id="email" />
                        </label><br/>
                        <button type="submit">Send</button>
                        <input type="reset" value="Clear" />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage;

export const Head = () => <title>Contact Page</title>