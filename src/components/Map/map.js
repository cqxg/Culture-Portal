import React from 'react';
import Language from '../Language/Language';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import mapStyles from './map.module.less';

const Map = () => (
	<Container className={mapStyles.container}>
		<Row>
			<Col lg={12}>
				<h1>
					<Link className={headerStyles.title} to='/'>
						<FormattedMessage id='header.siteTitle' />
					</Link>
				</h1>
			</Col>
		</Row>
	</Container>
)

export default Map;