import React from "react";
import { graphql } from "gatsby"
import Layout from "../components/Layouts/Layout";
import { injectIntl } from "gatsby-plugin-intl";

const DirectorTemplate = ({ data, intl }) => {
    console.log(intl.locale);
    const director = data.directorsJson;
    return (
    <Layout>
      <div>Hello director</div>
      <div>
        <h1>{director[intl.locale].name}</h1>
        <p>{director[intl.locale].bio}</p>
        <p>{director[intl.locale].location}</p>
        <p>{director[intl.locale].yearsOfLife}</p>
        <p>{director[intl.locale].video}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    directorsJson(fields: { slug: { eq: $slug } }) {
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
