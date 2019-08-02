import React from "react";
import { Link, injectIntl, IntlContextConsumer, FormattedMessage } from "gatsby-plugin-intl";
import { StaticQuery, graphql } from 'gatsby';
import "../components/DirectorPersonalData";
import Layout from "../components/Layouts/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import SEO from "../components/seo";
import directorsStyles from '../mainStyles/directors.module.less';

const Directors = ({ intl }) => {
  const directorsArray = [];
  const getData = (data, lang) => {
    const namesArray = [];
    data.allDirectorsJson.edges.forEach((element, index) => {
      directorsArray.push(element.node);
      namesArray.push(
        <Col
          lg={2}
          key={index + 1}
        >
          <Link
            to='/director-page/'
            state={{ directorData: element.node }}
          >
            {element.node[lang].name}
          </Link>
        </Col>
      )
    });
    return namesArray;
  };

  return (
    <Layout>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => {
          const lang = currentLocale;
          return <StaticQuery
            query={graphql`
        query NamesQuery {
          allDirectorsJson {
            edges {
              node {
                be {
                  ...DirectorPersonalDataBe
                }
                en {
                  ...DirectorPersonalDataEn
                }
                ru {
                  ...DirectorPersonalDataRu
                }
                id
              }
            }
          }
        }
        `}
            render={data => (
              <Container className={directorsStyles.directors_container}>
                <SEO
                  lang={intl.locale}
                  title={intl.formatMessage({ id: "directors.titleDirector" })}
                />
                <Row>
                  <Col lg={12} className={directorsStyles.mainTitle}>
                    <h1>
                      <FormattedMessage id="directors.helloDirectors" />
                    </h1>
                  </Col>
                </Row>
                <Row>
                  {getData(data, lang)}
                </Row>            
              </Container>
            )}
          >
          </StaticQuery>

        }}
      </IntlContextConsumer>
    </Layout>
  )
}
export default injectIntl(Directors);