import React from 'react';
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import { Container, Row, Col } from 'react-bootstrap';

import topDirectorStyles from './topDirector.module.less';

const TopDirector = ({ director }) => (
    <Col className={topDirectorStyles.topDirector_container}>
        <Row className={topDirectorStyles.topDirector_title_container}>
            <h2>Top Director</h2>
        </Row>
        <Row className={topDirectorStyles.topDirector_content_container}>
            <Col col={9} >
                <h3>{director.name}</h3>
                <p>{`${director.birth} - ${director.death ? director.death : "Alive"}`}</p>
                <h4>{director.description}</h4>
                <Link to="/"><button variant="primary">Go</button></Link>
            </Col>
            <Col col={3}>
                <div>
                    <img src={director.img} alt="director_avatar"/>
                </div>   
            </Col>
        </Row>
    </Col>
)
 


export default TopDirector;