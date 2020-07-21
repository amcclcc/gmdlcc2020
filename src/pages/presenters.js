/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { jsx, Grid, Box } from "theme-ui"

export const query = graphql`
  query Students {
    students: allWpPost {
      edges {
        node {
          # title
          slug
          id
          uri
          portfolio {
            displayName
            featuredImage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const index = ({ data }) => {
  const { students } = data

  console.log(students.edges)
  return (
    <Grid columns={[2, 3]} gap={2}>
      {students.edges.map(({ node }, index) => (
        <Box key={index}>
          <Link to={`/presenters/${node.slug}`}>
            {node.portfolio.featuredImage?.localFile?.childImageSharp?.fluid ? (
              <Img
                fluid={{
                  ...node.portfolio.featuredImage.localFile.childImageSharp
                    .fluid,
                  ...{ aspectRatio: 4 / 2.8 },
                }}
              />
            ) : (
              <Box>{node.portfolio.displayName}</Box>
            )}
          </Link>
        </Box>
      ))}
    </Grid>
  )
}

export default index
