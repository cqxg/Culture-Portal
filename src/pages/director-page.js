import React from 'react';
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import Layout from '../components/Layouts/Layout';
import Image from '../components/image';
import SEO from '../components/seo';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

const Director = ({ intl }) => (
  <Layout>
    <Container>
      <Row>
        <Col lg={6} md={6} xs={12}>
          <p>Информация о режиссере</p>
          <p>
            Nulla vitae massa ullamcorper, gravida nisl id, congue urna.
            Ut non commodo sem. Pellentesque finibus metus velit, sed semper justo vehicula nec.
            Etiam semper metus in lorem placerat, vitae lacinia sem tempus.
            Aenean pretium quis ipsum at tincidunt. Mauris ac ex mauris.
            Fusce sed urna eget odio finibus cursus ac in lectus. Quisque consectetur pharetra est ut mollis.
            Integer aliquet ornare accumsan. Morbi ante nunc, eleifend non finibus in, pellentesque vel nunc.
            Phasellus posuere felis urna, et dictum urna fermentum at.
						</p>
        </Col>
        <Col lg={6} md={6} xs={12}>
          <SEO
            lang={intl.locale}
            title={intl.formatMessage({ id: "directors.titleDirector" })}
          />
          <h1>
            <FormattedMessage id="directors.titleDirector" />
          </h1>
          <p>
            <FormattedMessage id="directors.titleDirector" />
          </p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default injectIntl(Director);