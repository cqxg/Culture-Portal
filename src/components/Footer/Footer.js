import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import footerStyles from '../Footer/footer.module.less';
import "../Layouts/layout.css";

const Footer = () => (
	<footer>
		<Container className={footerStyles.footer_container}>
			<Row>
				<Col lg={1}>
				</Col>
				<Col lg={10} className={footerStyles.gatsby}>
					<div>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>
					</div>
				</Col>
				<Col lg={1}>
				</Col>
			</Row>
		</Container>
	</footer>
)

export default Footer