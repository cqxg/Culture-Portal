/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from 'bootstrap-4-react'

import Header from "./header"
import footerStyles from '../styles/layout.module.less'
import mainStyles from '../styles/main.module.less'
import "../styles/layout.less"
import "../styles/style.less"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

			<main className={mainStyles.main}>{children}</main>

			<footer>
			<Container className={footerStyles.footer_container}>
			<Row>
				<Col col='1'>
				</Col>
				<Col col='10' className={footerStyles.gatsby}>
					<div>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org">Gatsby</a>
					</div>
				</Col>
				<Col col='1'>
				</Col>
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
