import React from "react";
import { FormattedMessage, Link, injectIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layouts/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import SEO from "../components/seo";
import aboutusStyles from '../mainStyles/aboutus.module.less';
import DirectorMap from '../components/Map/map';

const AboutUs = ({ intl }) => (
  <Layout>
		<SEO
			lang={intl.locale}
			title={intl.formatMessage({ id: "header.siteTitle" })}
		/>
		<Container className={aboutusStyles.aboutus_container}>
			<Row>
				<Col lg={2}>
					<h1>
						<FormattedMessage id="aboutUs.aboutUs" />
					</h1>
					<p>
						<FormattedMessage id="aboutUs.welcomeDevelopers" />
					</p>
					<Link to="/">
						<FormattedMessage id="backHomePage" />
					</Link>
				</Col>
				<Col lg={2}>
					<h1>
						<FormattedMessage id="aboutUs.aboutUs" />
					</h1>
					<p>
						<FormattedMessage id="aboutUs.welcomeDevelopers" />
					</p>
					<Link to="/">
						<FormattedMessage id="backHomePage" />
					</Link>
				</Col>
				<Col lg={2}>
					<h1>
						<FormattedMessage id="aboutUs.aboutUs" />
					</h1>
					<p>
						<FormattedMessage id="aboutUs.welcomeDevelopers" />
					</p>
					<Link to="/">
						<FormattedMessage id="backHomePage" />
					</Link>
				</Col>
				<Col lg={2}>
					<h1>
						<FormattedMessage id="aboutUs.aboutUs" />
					</h1>
					<p>
						<FormattedMessage id="aboutUs.welcomeDevelopers" />
					</p>
					<Link to="/">
						<FormattedMessage id="backHomePage" />
					</Link>
				</Col>
				<Col lg={2}>
					<h1>
						<FormattedMessage id="aboutUs.aboutUs" />
					</h1>
					<p>
						<FormattedMessage id="aboutUs.welcomeDevelopers" />
					</p>
					<Link to="/">
						<FormattedMessage id="backHomePage" />
					</Link>
				</Col>
				<Col lg={2}>
					<h1>
						<FormattedMessage id="aboutUs.aboutUs" />
					</h1>
					<p>
						<FormattedMessage id="aboutUs.welcomeDevelopers" />
					</p>
					<Link to="/">
						<FormattedMessage id="backHomePage" />
					</Link>
				</Col>
			</Row>
			<Row>
				<Col>
					<DirectorMap />
				</Col>
			</Row>
		</Container>
  </Layout>
)

export default injectIntl(AboutUs);