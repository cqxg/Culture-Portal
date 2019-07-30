import React from 'react';
import { FormattedMessage, Link } from "gatsby-plugin-intl";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'reactstrap';

import topDirectorStyles from './topDirector.module.less';

const TopDirector = ({ director }) => (
    <Col className={topDirectorStyles.topDirector_container}>
        <Row className={topDirectorStyles.topDirector_title_container}>
            <h2>Director of the day</h2>
        </Row>

        <Row className={topDirectorStyles.topDirector_content_container}>
            <Col md={7} xs={{size: 12, order: 1}} >
                <h3>{director.name}</h3>
                <p>{`${director.birth} - ${director.death ? director.death : "Alive"}`}</p>
            </Col>

            <Col md={7} xs={{size: 12, order: 3}}>
                <h4>{director.description}</h4>
                <Link to="/" className={topDirectorStyles.contentButton}><Button variant="primary">Go</Button></Link>
            </Col>

            <Col md={5} xs={{size: 12, order: 2}}>
                <div className={topDirectorStyles.topDirector_container_content_img_resize}>
                    <img src={director.img} alt="director_avatar"/>
                </div>   
            </Col>
        </Row>
    </Col>
)
 


export default TopDirector;