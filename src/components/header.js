import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          23'd group
        </Link>
      </h1>
			<Link to='/'
				style={{
					color: `white`,
					textDecoration: `none`,
				}}
			>Main</Link>
			<Link to='/producers/'
				style={{
					color: `white`,
					textDecoration: `none`,
				}}
			>Producers</Link>
			<Link to='/about-us/'
				style={{
					color: `white`,
					textDecoration: `none`,
				}}
			>About us</Link>
    </div>
  </header>
)

export default Header
