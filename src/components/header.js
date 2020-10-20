import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
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
            fontFamily: 'Indie Flower',
            fontSize: '30px',
            fontWeight: "lighter"
          }}
        >
          The Classroom Backseat Podcast
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
