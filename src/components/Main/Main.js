import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import FormattedMessage from  "gatsby-plugin-intl";

import mainStyles from './main.module.less';
import TopDirector from "./TopDirector/TopDirector"

const director = {
    name: "Evklid Seventeen",
    birth: "30 january",
    death: "23 june",
    img: "ddas",
    description: "loves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and music",
    link: "thisway"
}

const Main = () => ( 
    <main>
        <Container className={mainStyles.main_container}>
            <Row >
                <Col col={12}>
                    <h1 className={mainStyles.title}>
                        Title
                        {/* <FormattedMessage  id="main.siteTitle"/> */}
                    </h1>
                </Col>
            </Row>
            <Row >
                <Col col={12}>
                    <h3 className={mainStyles.description}>
                        Description
                        {/* <FormattedMessage  id="main.description"/> */}
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