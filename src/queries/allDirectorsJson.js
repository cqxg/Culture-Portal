import { useStaticQuery, graphql } from 'gatsby';

const allDirectorsJson = () => {
    const directorsInfo = useStaticQuery(
        graphql`
      query NamesQuery {
        allDirectorsJson {
          edges {
            node {
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
                video
                timeline {
                description
                time
                }
                films {
                    filmYear
                    filmName
                    }
              }
              be {
                name
                location
                yearsOfLife
                bio
                video
                timeline {
                description
                time
                }
                films {
                    filmYear
                    filmName
                    }
              }
              ru {
                name
                location
                yearsOfLife
                bio
                video
                timeline {
                description
                time
                }
                films {
                    filmYear
                    filmName
                    }
              }
            }
          }
        }
      }
    `,
    );

    return directorsInfo;
};

export default allDirectorsJson;
