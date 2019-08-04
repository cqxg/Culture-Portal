import React from 'react';
import { FormattedMessage, Link, injectIntl } from 'gatsby-plugin-intl';
import Image from '../Image/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'reactstrap';
import directorOfDayStyles from './directorOfDay.module.less';

const DirectorOfDay = ({ intl, director, locale }) => {
    // console.log( director, locale);
    return (
        <Col className={directorOfDayStyles.directorOfDay_container}>
            <Row className={directorOfDayStyles.directorOfDay_title_container}>
                <h2>
                    <FormattedMessage id='index.dirOfTheDay' />
                </h2>
            </Row>

            <Row className={directorOfDayStyles.directorOfDay_content_container}>
                <Col md={6} xs={{ size: 12, order: 1 }}>
                    <h3>{director[intl.locale].name}</h3>
                    <p>{director[intl.locale].yearsOfLife}</p>
                </Col>

                <Col md={6} xs={{ size: 12, order: 3 }}>
                    <h4>{director[intl.locale].bio}</h4>
                    <Link to="/" className={directorOfDayStyles.contentButton}>
                        <Button variant='primary' size='lg' block>
                            <FormattedMessage id='index.more' />
                        </Button>
                    </Link>
                </Col>

                <Col md={5} xs={{ size: 12, order: 2 }}>
                    <div
                        className={directorOfDayStyles.directorOfDay_container_content_img_resize}
                    >
                        <Image src={director.image.substr(1)}></Image>
                        {/* <img src='../images/gatsby-astronaut.png'></img> */}
                    </div>
                </Col>
            </Row>
        </Col>
    )
};

export default DirectorOfDay;
