import React from "react";
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Carousel from '../components/Carousel/Carousel';

import SEO from "../components/seo";
import Layout from "../components/Layouts/Layout";

import aboutusStyles from '../mainStyles/aboutus.module.less';
import Developer from "../components/Developers/Developer";

const AboutUs = ({ intl }) => (
  <Layout>
		<SEO
			lang={intl.locale}
			title={intl.formatMessage({ id: "header.siteTitle" })}
		/>
		<Container className={aboutusStyles.aboutus_container}>
			<Row>
				<Col lg={12} md={12} xs={12}>
					<h2>
						<FormattedMessage id="index.titleDevelopers"/>
					</h2>
					<Developer />
				</Col>
			</Row>
		</Container>
  </Layout>
)

export default injectIntl(AboutUs);
