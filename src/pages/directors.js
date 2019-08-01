import React from "react";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layouts/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import SEO from "../components/seo";
import directorsStyles from '../mainStyles/directors.module.less';

const Directors = ({ intl }) => (
  <Layout>
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
				<Col lg={2}>
					<p>
						<FormattedMessage id="directors.welcomeDirectors" />
					</p>
				</Col>
				<Col lg={2}>
					<p>
						<FormattedMessage id="directors.welcomeDirectors" />
					</p>
				</Col>
				<Col lg={2}>
					<p>
						<FormattedMessage id="directors.welcomeDirectors" />
					</p>
				</Col>
				<Col lg={2}>
					<p>
						<FormattedMessage id="directors.welcomeDirectors" />
					</p>
				</Col>
				<Col lg={2}>
					<p>
						<FormattedMessage id="directors.welcomeDirectors" />
					</p>
				</Col>
				<Col lg={2}>
					<p>
						<FormattedMessage id="directors.welcomeDirectors" />
					</p>
				</Col>
			</Row>
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

export default injectIntl(Directors);