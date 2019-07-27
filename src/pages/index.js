import React from 'react';
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import Layout from '../components/Layouts/Layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = ({ intl }) => {
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "header.siteTitle" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <h1>
        <FormattedMessage id="index.hello" />
      </h1>
      <p>
        <FormattedMessage id="index.welcome" />
      </p>
      <p>
        <FormattedMessage id="index.build" />
      </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}


export default injectIntl(IndexPage);
