import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormattedMessage from  "gatsby-plugin-intl";

import mainStyles from './main.module.less';
import TopDirector from "./TopDirector/TopDirector"

const director = {
    name: "Evklid Seventeen",
    birth: "30 january",
    death: "23 june",
    img: "ddas",
    description: "loves write, drink, and music",
    link: "thisway"
}

const Main = () => ( 
    <main>
        <Container className={mainStyles.main_container}>
            <Row >
                <Col col={12}>
                    <h1>
                        Title
                        {/* <FormattedMessage className={mainStyles.title} id="main.siteTitle"/> */}
                    </h1>
                </Col>
            </Row>
            <Row >
                <Col col={12}>
                    <h3>
                        Description
                        {/* <FormattedMessage className={mainStyles.description} id="main.description"/> */}
                    </h3>
                </Col>
            </Row>
            <Row >
                <TopDirector director={director}/>
            </Row>
        </Container>
    </main>
)

export default Main;