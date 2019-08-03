import React, { useState } from "react";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layouts/Layout";
import DirectorListItem from "../components/DirectorListItem/DirectorListItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import SEO from "../components/seo";
import directorsStyles from '../mainStyles/directors.module.less';
import directorsInfo from '../queries/allDirectorsJson';
import SearchBar from '../components/Search/search.jsx';

const Directors = ({ intl }) => {
    const directorsInfoJson = directorsInfo().allDirectorsJson.edges.map(node => node.node);
    const [directorsAfterSearch, setDirectorsAfterSearch] = useState(directorsInfoJson);
    const searchFunc = () => {
        const searchBoth = (target) => (
            target.name.toLowerCase().includes(lookFor.toLowerCase())
            || target.location.toLowerCase().includes(lookFor.toLowerCase()));
        const result = directorsInfoJson.filter(dir => searchBoth(dir));
        setDirectorsAfterSearch(result);
    }

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
                <SearchBar />
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
