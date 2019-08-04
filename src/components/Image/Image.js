import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function renderImage(file) {
    return <Img fluid={file.node.childImageSharp.fluid} alt={file.node.name} />;
}

const Image = function(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                name
                extension
                relativePath
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}

      render={data => (
        renderImage(data.images.edges.find(image => {
          return image.node.relativePath === props.src;
        }))
      )}
    />
  )
}

export default Image;