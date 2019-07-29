import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormattedMessage from  "gatsby-plugin-intl";

import mainStyles from './main.module.less';


const Main = () => ( 
    <main>
        <Container>
            <Row >
                <Col col={12}>
                    <h1>
                        {/* <FormattedMessage className={mainStyles.title} id="main.siteTitle"/> */}
                    </h1>
                </Col>
            </Row>
            <Row >
                <Col col={12}>
                    <h3>
                        {/* <FormattedMessage className={mainStyles.description} id="main.description"/> */}
                    </h3>
                </Col>
            </Row>
            <Row >
                <Col col={12}>
                    
                </Col>
            </Row>
        </Container>
    </main>
)

export default Main;