import React from "react"
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layouts/Layout"
import SEO from "../components/seo"

const AboutUs = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "header.siteTitle" })}
    />
    <h1>
      <FormattedMessage id="aboutUs.aboutUs" />
    </h1>
    <p>
      <FormattedMessage id="aboutUs.welcomeDevelopers" />
    </p>
    <Link to="/">
      <FormattedMessage id="backHomePage" />
    </Link>
  </Layout>
)

export default injectIntl(AboutUs)