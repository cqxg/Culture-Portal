import React from "react"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/Layouts/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Main from "../components/Main/Main"

import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "reactstrap"

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "header.siteTitle" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <Main />
    </Layout>
  )
}

export default injectIntl(IndexPage)
