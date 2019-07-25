import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Producers = () => (
  <Layout>
    <SEO title="Belarusian producer" />
    <h1>Belarusian producers</h1>
    <p>Welcome to Belarusian producers page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Producers