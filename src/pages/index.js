import React from 'react';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layouts/Layout';
import DirectorOfDay from '../components/DirectorOfDay/DirectorOfDay';
import directorsInfo from '../queries/allDirectorsJson';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import mainStyles from '../mainStyles/main.module.less';

const IndexPage = ({ intl }) => {
    const directors = directorsInfo().allDirectorsJson.edges.map(node => node.node);
    const random = Math.floor((Math.random() * directors.length));
    const dirOfTheDay = directors[random];

  return (
    <Layout>
            <Container className={mainStyles.main_container}>
                <Row>
                    <Col lg={6} md={12} xs={12} className={mainStyles.main_description}>
                        <p>
                        <FormattedMessage id="index.description" />
                        </p>
                    </Col>
                    <DirectorOfDay director={ dirOfTheDay } intl={intl} />
                </Row>
            </Container>
        </Layout>
    )
}


export default injectIntl(IndexPage);
