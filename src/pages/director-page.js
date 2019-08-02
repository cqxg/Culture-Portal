import React from 'react';
import { FormattedMessage, injectIntl, IntlContextConsumer } from "gatsby-plugin-intl";
import "../components/DirectorPersonalData";
import Layout from '../components/Layouts/Layout';
import Image from '../components/image';
import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

let directorData = {};

const Director = ({ intl, location }) => {
  if (location.state && location.state.directorData) {
    directorData = location.state.directorData;
  };
  return (
    <Layout>
      <Container>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) => {
            const lang = currentLocale;
            return <>
              <div>
                <Row>
                  <Col lg={6} md={6} xs={12}>
                    <p>
                      {directorData[lang] && directorData[lang].bio}
                    </p>
                  </Col>
                  <Col lg={6} md={6} xs={12}>
                    <SEO
                      lang={intl.locale}
                      title={intl.formatMessage({ id: "directors.titleDirector" })}
                    />
                    <h1>
                      {directorData[lang] && directorData[lang].name}
                    </h1>
                    <p>
                      {directorData[lang] && directorData[lang].yearsOfLife}
                    </p>
                    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                      <Image />
                    </div>
                  </Col>
                </Row>
              </div>
            </>
          }
          }
        </IntlContextConsumer>
      </Container>
    </Layout>
  )
};

export default injectIntl(Director);
