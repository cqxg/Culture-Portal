import React from "react";
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layouts/Layout";
import Image from "../components/Image/Image";
import SEO from '../components/seo';
import Timeline from "../components/Timeline/Timeline";
import Video from '../components/Video/Video';
import DirectorMap from '../components/DirectorMap/DirectorMap';
import Carousel from '../components/Carousel/Carousel';
import FilmographyTable from '../components/FilmographyTable/FilmographyTable';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';

import directorPageStyles from "./director-page.module.less";

const DirectorTemplate = ({ data, intl }) => {
  console.log(intl.locale);
  const director = data.directorsJson;
  return (
    <Layout>
      <Container>
        <Row>
          <Col lg={12} md={12} xs={12} className={directorPageStyles.directorInfo}>
            <SEO
              lang={intl.locale}
              title={intl.formatMessage({ id: "directors.titleDirector" })}
            />
            <h1>
              {director[intl.locale] && director[intl.locale].name}
            </h1>
            <p>
              {director[intl.locale] && director[intl.locale].bio}
            </p>
            <div className={directorPageStyles.imgResize}>
              {director.image && <Image src={director.image}></Image>}
            </div>
            <p>
              {director[intl.locale] && director[intl.locale].yearsOfLife}
            </p>
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            {director[intl.locale] && <Timeline timelineArray={director[intl.locale].timeline} />}
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            {director[intl.locale] && director[intl.locale].films.length && <FilmographyTable filmsIncome={director[intl.locale].films} />}
          </Col>
        </Row>
        <Row>
          <Col size={12}>
            {director[intl.locale] && <Video url={director[intl.locale].video} />}
          </Col>
        </Row>
        <Row>
          <Col size={12} className={directorPageStyles.mapComponentContainer}>
            {director[intl.locale] && <DirectorMap/>}
          </Col>
        </Row>
        <Row className="mt-5">
          <Col size={12}>
            {director.galleryImages && director.galleryImages.length && <Carousel images={director.galleryImages} />}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
        directorsJson(fields: {slug: {eq: $slug } }) {
        id
      image
      locationPin
      galleryImages {
        image
      }
      en {
        name
        location
      yearsOfLife
      bio
        timeline {
        time
          description
      }
        films {
        filmYear
          filmName
      }
      video
    }
      ru {
        name
        location
      yearsOfLife
      bio
        timeline {
        time
          description
      }
        films {
        filmYear
          filmName
      }
      video
    }
      be {
        name
        location
      yearsOfLife
      bio
        timeline {
        time
          description
      }
        films {
        filmYear
          filmName
      }
      video
    }
  }
}
`

export default injectIntl(DirectorTemplate);
