import React from 'react';
import Language from "../Language";
import { FormattedMessage, Link} from "gatsby-plugin-intl";
import { Container, Row, Col } from 'react-bootstrap';

import headerStyles from './header.module.less';

const Header = () => (
  <header>
		<Container className={headerStyles.header_container}>
			<Row>
				<Col col='3'>
					<h1>
						<Link className={headerStyles.title} to='/'>
							<FormattedMessage id="header.siteTitle" />
						</Link>
					</h1>
				</Col>
				<Col col='5' className={headerStyles.nav_menu}>
					<ul className={headerStyles.nav_list}>
						<li>
							<Link className={headerStyles.nav_Item} activeClassName={headerStyles.active_nav_Item} to='/'>
								<FormattedMessage id="header.main" />
							</Link>
						</li>
						<li>
							<Link className={headerStyles.nav_Item} activeClassName={headerStyles.active_nav_Item} to='/directors/'>
								<FormattedMessage id="header.directors" />
							</Link>
						</li>
						<li>
							<Link className={headerStyles.nav_Item} activeClassName={headerStyles.active_nav_Item} to='/about-us/'>
								<FormattedMessage id="header.aboutUs" />
							</Link>
						</li>
					</ul>
				</Col>
				<Col col='4'>
					<Language />
				</Col>
			</Row>
		</Container>
  </header>
)

export default Header;
