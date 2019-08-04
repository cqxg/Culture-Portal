import React, { useState } from "react";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layouts/Layout";
import DirectorListItem from "../components/DirectorListItem/DirectorListItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import SEO from "../components/seo";
import directorsStyles from '../mainStyles/directors.module.less';
import directorsInfo from '../queries/allDirectorsJson';
import SearchBar from '../components/Search/SearchBar';

const Directors = ({ intl }) => {
  const directorsInfoJson = directorsInfo().allDirectorsJson.edges.map(node => node.node);
  const handleSort = (a, b) => {
    const compare1 = a[intl.locale].name.toLowerCase();
    const compare2 = b[intl.locale].name.toLowerCase();

    if (compare1 < compare2) { return -1; }
    if (compare1 > compare2) { return 1; }
    return 0
  };
  const sortedDirectors = directorsInfoJson.sort(handleSort);
  const [directorsAfterSearch, setDirectorsAfterSearch] = useState(sortedDirectors);
  const searchFunc = (lookFor) => {
    if (lookFor.value) {
      const searchBoth = (target) => {
        return (
          target[intl.locale].name.toLowerCase().includes(lookFor.value.toLowerCase())
          || target[intl.locale].location.toLowerCase().includes(lookFor.value.toLowerCase()))
      };
      const result = directorsInfoJson.filter(dir => searchBoth(dir));
      const sortedResult = result.sort(handleSort);
      setDirectorsAfterSearch(sortedResult);
    } else {
      setDirectorsAfterSearch(directorsInfoJson);
    }
  };

  return (<Layout>
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
        <SearchBar sortFunc={searchFunc} />
      </Row>
      {directorsAfterSearch.map((director, index) => <DirectorListItem
        directorData={director}
        locale={intl.locale}
        key={index}
      ></DirectorListItem>)}
    </Container>
  </Layout>
  )
}

export default injectIntl(Directors);
