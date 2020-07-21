/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useLayoutEffect, useRef, useState, useContext } from "react" // eslint-disable-line no-unused-vars
import { useStaticQuery, graphql } from "gatsby"
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui"
import Transition from "./navigation/transition"
// import { Global } from "@emotion/core"

import Header from "./navigation/header"
// import Footer from "./navigation/footer"
// import PageFooter from "./navigation/PageFooter"
import smoothscroll from "smoothscroll-polyfill"
// import { ServiceWorkerRefresh } from "./pagelayout/ServiceWorkerRefresh"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // const { theme } = useThemeUI()

  return (
    <>
      <Container
      // sx={{
      //   maxWidth: 1400,
      //   mx: "auto",
      // }}
      >
        <Header />
        <main sx={{ p: 2 }}>{props.children}</main>
        {/* <PageFooter
          sx={{
            mb: theme.layout.footer.height,
          }}
        /> */}
        {/* <ServiceWorkerRefresh /> */}
      </Container>
    </>
  )
}

export default Layout
