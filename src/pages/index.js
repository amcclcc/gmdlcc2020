/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { jsx, Grid, Box } from "theme-ui"
import HomeInteraction from "../components/HomeInteraction"

const index = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -10,
      }}
    >
      <HomeInteraction />
    </Box>
  )
}

export default index
