import React from "react";
import { Link, injectIntl, IntlContextConsumer } from "gatsby-plugin-intl";
import { StaticQuery, graphql } from 'gatsby';
import "../components/DirectorPersonalData";
import Layout from "../components/Layouts/Layout";
import SEO from "../components/seo";
import '../mainStyles/directors.less';

const Directors = ({ intl }) => {
  const directorsArray = [];
  const getData = (data, lang) => {
    const namesArray = [];
    data.allDirectorsJson.edges.forEach((element, index) => {
      directorsArray.push(element.node);
      namesArray.push(
        <Link
          key={index + 1}
          to='/director-page/'
          state={{ directorData: element.node }}
        >
          {element.node[lang].name}
        </Link>)
    });
    return namesArray;
  };
  
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "directors.titleDirector" })}
      />
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
              <>
                <div className="directors">
                  {getData(data, lang)}
                </div>
              </>
            )}
          >

          </StaticQuery>
        }
        }
      </IntlContextConsumer>
    </Layout>
  )
}

export default injectIntl(Directors);