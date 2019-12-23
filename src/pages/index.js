import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>Home</h1>
        <p>Hello r</p>
        <Link to="/about/">See more &rarr;</Link>
    </Layout>
);
