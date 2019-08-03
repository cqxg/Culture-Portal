import React from "react";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layouts/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import SEO from "../components/seo";
import directorsStyles from '../mainStyles/directors.module.less';
import directorsInfo from '../queries/allDirectorsJson';
import SearchBar from '../components/Search/search.jsx';

const Directors = ({ intl }) => {
  const directorsInfoJson = directorsInfo();
  const directorsInfoJSX = directorsInfoJson.allDirectorsJson.edges.map((node, index) => {
    return (
      <Row
        key={index+1}>
				<Col lg={12} className={directorsStyles.mainTitle}>
                    <Link
                        to='/director-page'
                        state={{ directorData: node.node }}
                    >
                        {`${node.node[intl.locale].name}, ${node.node[intl.locale].location}`}
                    </Link>
				</Col>
			</Row>
    )
  });

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
      { directorsInfoJSX }
			<Row>
				<Col lg={12}>
					<Link to="/">
						<FormattedMessage id="backHomePage" />
					</Link>
					<p>
					<Link to="/director-page">
						<FormattedMessage id="toDirector" />
					</Link>
					</p>
				</Col>
			</Row>
		</Container>
  </Layout>
  )
}

export default injectIntl(Directors);
