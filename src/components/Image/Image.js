import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = function(props) {
    
function renderImage(file) {
    return <Img fixed={file ? file.node.childImageSharp.fixed : false} alt={file ? file.node.name : ''} />;
}

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
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      `}      
      
      render={({ images }) =>
        renderImage(images.edges.find(image => {
            return image && image.node && image.node.relativePath === props.src;
        }))
      }
    />
  )
}

export default Image;
