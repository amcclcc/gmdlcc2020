/** @jsx jsx */
import React from "react" // eslint-disable-line no-unused-vars
import { Link } from "gatsby"
import { jsx, Flex, Box } from "theme-ui"

function header() {
  return (
    <header
      sx={{
        display: "flex",
        alignItems: "center",
        variant: "styles.header",
      }}
    >
      <Link
        to="/"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        BA Graphic and Media Design
        <br />
        Degree Show 2020
      </Link>
      <div sx={{ mx: "auto" }} />
      <Link
        to="/presenters"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        Presenters
      </Link>
      <Link
        to="/behind-the-screen"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        Behind the screen
      </Link>
      <Link
        to="/about"
        sx={{
          variant: "styles.navlink",
          p: 2,
        }}
      >
        ?
      </Link>
    </header>
  )
}

export default header
