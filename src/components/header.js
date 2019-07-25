import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

import headerStyles from '../styles/header.module.less';

const Header = ({ siteTitle }) => (
  <header>
		<Container className={headerStyles.header_container}>
			<Row>
				<Col col='3'>
					<h1>
						<Link className={headerStyles.title} to='/'>
							{siteTitle}
						</Link>
					</h1>
				</Col>
				<Col col='7' className={headerStyles.nav_menu}>
					<ul className={headerStyles.nav_list}>
						<li>
							<Link className={headerStyles.nav_Item} activeClassName={headerStyles.active_nav_Item} to='/'>Main</Link>
						</li>
						<li>
							<Link className={headerStyles.nav_Item} activeClassName={headerStyles.active_nav_Item} to='/producers/'>Producers</Link>
						</li>
						<li>
							<Link className={headerStyles.nav_Item} activeClassName={headerStyles.active_nav_Item} to='/about-us/'>About us</Link>
						</li>
					</ul>
				</Col>
				<Col col='2'>
					<div class='dropdown show'>
						<a class='btn btn-secondary dropdown-toggle' href='#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
							LANGUAGE
						</a>
						<div class='dropdown-menu' aria-labelledby='dropdownMenuLink'>
							<a class='dropdown-item' href='#'>EN</a>
							<a class='dropdown-item' href='#'>RU</a>
							<a class='dropdown-item' href='#'>BY</a>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
