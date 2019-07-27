import React from "react"
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"

const Directors = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "directors.titleDirector" })}
    />
    <h1>
      <FormattedMessage id="directors.helloDirectors" />
    </h1>
    <p>
      <FormattedMessage id="directors.welcomeDirectors" />
    </p>
    <Link to="/">
      <FormattedMessage id="backHomePage" />
    </Link>
  </Layout>
)

export default injectIntl(Directors)