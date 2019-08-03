import React from 'react';
import Language from '../Language/Language';
import { FormattedMessage, Link } from 'gatsby-plugin-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import headerStyles from './header.module.less';

const Header = () => (
	<header>
		<Container className={headerStyles.header_container}>
			<Row>
				<Col lg={9} md={9} sm={9} className={headerStyles.col_title}>
					<h1>
						<Link className={headerStyles.title} to='/'>
							<FormattedMessage id='header.siteTitle' />
						</Link>
					</h1>
				</Col>
				<Col lg={3} md={3} sm={3} className={headerStyles.languages}>
					<Language />
				</Col>
			</Row>
			<Row className={headerStyles.nav_menu_row}>
				<Col lg={6} md={6} xs={12} className={headerStyles.nav_menu}>
					<ul className={headerStyles.nav_list}>
						<li>
							<Link className={headerStyles.nav_Item} activeClassName={headerStyles.active_nav_Item} to='/'>
								<FormattedMessage id='header.main' />
							</Link>
						</li>
						<li>
							<Link className={headerStyles.nav_Item} activeClassName={headerStyles.active_nav_Item} to='/directors/'>
								<FormattedMessage id='header.directors' />
							</Link>
						</li>
						<li>
							<Link className={headerStyles.nav_Item} activeClassName={headerStyles.active_nav_Item} to='/about-us/'>
								<FormattedMessage id='header.aboutUs' />
							</Link>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	</header>
)

export default Header;
