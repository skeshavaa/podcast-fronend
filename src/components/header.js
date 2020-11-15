import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#7b4397',  /* fallback for old browsers */
background: '-webkit-linear-gradient(to right, #dc2430, #7b4397)', /* Chrome 10-25, Safari 5.1-6 */
background: 'linear-gradient(to right, #dc2430, #7b4397)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 20px`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontFamily: 'Questrial',
            fontSize: '30px',
            fontWeight: "lighter"
          }}
        >
          The Backseat Podcast
        </Link>
      </h1>
    </div>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;570;600;700&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Questrial&display=swap" rel="stylesheet"/>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
