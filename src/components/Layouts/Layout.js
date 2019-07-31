import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mainStyles from '../../mainStyles/main.module.less';
import "./layout.less";

const Layout = ({ children }) => {
  return (
    <div className={mainStyles.wrapper}>
			<div className={mainStyles.content}>
				<Header />
				<main className={mainStyles.main}>{children}</main>
			</div>
			<Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
