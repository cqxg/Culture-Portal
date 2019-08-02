import React from 'react';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';
import Layout from '../components/Layouts/Layout';
import DirectorOfDay from '../components/DirectorOfDay/DirectorOfDay';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import mainStyles from '../mainStyles/main.module.less';

const director = {
  name: "Evklid Seventeen",
  birth: "30 january",
  death: "23 june",
  img: "ddas",
  description:
    "loves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and musicloves write, drink, and music",
  link: "thisway",
  videoId: 'u1QF-LWNUdY'
}

const IndexPage = ({ intl }) => {

  return (
    <Layout>
			<Container className={mainStyles.main_container}>
				<Row>
					<Col lg={5} md={12} xs={12} className={mainStyles.main_description}>
						<p>
						<FormattedMessage id="index.description" />
						</p>
					</Col>
					<DirectorOfDay director={ director }/>
				</Row>
			</Container>
		</Layout>
	)
}


export default injectIntl(IndexPage);