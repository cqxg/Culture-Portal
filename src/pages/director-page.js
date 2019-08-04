import React from 'react';
import { FormattedMessage, injectIntl, IntlContextConsumer } from "gatsby-plugin-intl";
import "../queries/DirectorPersonalData";
import Layout from '../components/Layouts/Layout';
import Image from '../components/Image/Image';
import SEO from '../components/seo';
import Time from '../components/Timeline/Timeline';
import Video from '../components/Video/Video';
import DirectorMap from '../components/DirectorMap/DirectorMap';
import Carousel from '../components/Carousel/Carousel';



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
                    {({ language: currentLocale }) => {
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
                                        {/* {directorData.image && <Image src={directorData.image.substr(1)}></Image>} */}
                                        <p>
                                            {directorData[lang] && directorData[lang].yearsOfLife}
                                        </p>
                                        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size={12}>
                                        {directorData[intl.locale] && <Time timelineArray={directorData[intl.locale].timeline} />}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size={12}>
                                        {directorData[intl.locale] && <Video url={directorData[intl.locale].video} />}
                                    </Col>
                                </Row>
                                {/* <Row>
                                    <Col size={12}>
                                        {directorData[intl.locale] && <DirectorMap></DirectorMap>}
                                    </Col>
                                </Row> */}
                                <Row className="mt-5">
                                    <Col size={12}>
                                        {directorData.galleryImages && directorData.galleryImages.length && <Carousel images={directorData.galleryImages} />}
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
