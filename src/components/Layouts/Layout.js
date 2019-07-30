import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "../Header/Header"

import footerStyles from "./layout.module.less"

import "./layout.less"

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main>{children}</main>

      <footer>
        <Container className={footerStyles.footer_container}>
          <Row>
            <Col lg={1}></Col>
            <Col lg={10} className={footerStyles.gatsby}>
              <div>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
              </div>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
