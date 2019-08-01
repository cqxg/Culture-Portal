import React from "react";
import { Link, injectIntl, IntlContextConsumer } from "gatsby-plugin-intl";
import { StaticQuery, graphql } from 'gatsby';

import Layout from "../components/Layouts/Layout";
import SEO from "../components/seo";
import '../mainStyles/directors.less';


const Directors = ({ intl }) => {
  const getNames = (data, lang) => {
    const namesArray = [];
    data.allDirectorsJson.edges.forEach((element, index) => {
      console.log(element.node.id);
      namesArray.push(
      <Link 
      key={index+1} 
      to='/director-page/'
      state={{id: element.node.id}}
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
          console.log(lang);          
          return <StaticQuery
            query={graphql`
        query NamesQuery {
          allDirectorsJson {
            edges {
              node {
                be {
                  name
                }
                en {
                  name
                }
                ru {
                  name
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
                  {getNames(data, lang)}
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