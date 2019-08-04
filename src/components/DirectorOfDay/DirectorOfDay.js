import React from 'react';
import { FormattedMessage, Link, injectIntl } from 'gatsby-plugin-intl';
import Image from '../Image/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button } from 'reactstrap';
import directorOfDayStyles from './directorOfDay.module.less';

const DirectorOfDay = ({ intl, director }) => {
    return (
        <Col lg={6} className={directorOfDayStyles.directorOfDay_container}>
            <Row className={directorOfDayStyles.directorOfDay_title_container}>
                <h2>
                    <FormattedMessage id='index.dirOfTheDay' />
                </h2>
            </Row>

            <Row className={directorOfDayStyles.directorOfDay_content_container}>
                <Col className={directorOfDayStyles.nameBlock} lg={7} md={7} xs={{ size: 12, order: 1 }} >
                    <div>
                        <h2>{director[intl.locale].name}</h2>
                        <p>{director[intl.locale].yearsOfLife}</p>
                        <h4>{director[intl.locale].bio}</h4>
                    </div>
                    <div className={directorOfDayStyles.descriptionBlockDekstop}>
                      <Link  className={directorOfDayStyles.contentButton} to={`/${director.id}`} state={{ directorData: director }}>
                        <FormattedMessage id='index.more' />
                      </Link>
                    </div>
                </Col>

                <Col className={directorOfDayStyles.descriptionBlockMobile} md={6} xs={{ size: 12, order: 3 }}>
                    <h4>{director[intl.locale].bio}</h4>
                    <div className={directorOfDayStyles.descriptionBlockMobileButtonContainer}>
                      <Link  className={directorOfDayStyles.contentButton} to={`/${director.id}`} state={{ directorData: director }}>
                          <FormattedMessage id='index.more' />
                      </Link>
                    </div>
                </Col>

                <Col lg={5} md={5} xs={{ size: 12, order: 2 }}>
                    <div
                        className={directorOfDayStyles.directorOfDay_container_content_img_resize}
                    >
                        <Image src={director.image}></Image>
                    </div>
                </Col>
            </Row>
        </Col>
    )
};

export default DirectorOfDay;
