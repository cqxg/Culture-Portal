import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layouts/Layout";
import SEO from "../components/seo";

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={`404: ${intl.formatMessage({ id: "notFound.title" })}`}
    />
    <h1>
      <FormattedMessage id="notFound.title" />
    </h1>
    <p>
      <FormattedMessage id="notFound.description" />
    </p>
  </Layout>
)

export default injectIntl(NotFoundPage);
