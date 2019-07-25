import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUs = () => (
  <Layout>
    <SEO title="RSSchool" />
    <h1>About us</h1>
    <p>Welcome to developers page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutUs