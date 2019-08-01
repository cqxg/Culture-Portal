import React from 'react';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layouts/Layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Developer from '../components/Developers/Developer';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import mainStyles from '../mainStyles/main.module.less';

const IndexPage = ({ intl }) => {

  return (
    <Layout>
			<Container className={mainStyles.main_container}>
				<Row>
					<Col lg={6} md={6} xs={12} className={mainStyles.main_description}>
						<p>
						<FormattedMessage id="index.description" />
						</p>
					</Col>
					<Col lg={6} md={6} xs={12}>
						<SEO
							lang={intl.locale}
							title={intl.formatMessage({ id: "header.siteTitle" })}
							keywords={[`gatsby`, `application`, `react`]}
						/>
						<h1>
							<FormattedMessage id="index.hello" />
						</h1>
						<p>
							<FormattedMessage id="index.welcome" />
						</p>
						<p>
							<FormattedMessage id="index.build" />
						</p>
						<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
							<Image />
						</div>
					</Col>
				</Row>
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
}


export default injectIntl(IndexPage);
