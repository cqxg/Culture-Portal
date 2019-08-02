import { useStaticQuery, graphql } from 'gatsby';

const allDirectorsJson = () => {
  const directorsInfo = useStaticQuery(
    graphql`
      query NamesQuery {
        allDirectorsJson {
          edges {
            node {
              id
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