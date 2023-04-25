import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/layout.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <main className="main-content">{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;