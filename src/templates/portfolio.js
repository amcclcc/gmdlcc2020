/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { jsx, Grid, Box } from "theme-ui"
import Obfuscate from "react-obfuscate"

export const query = graphql`
  query PortfolioQuery($id: String!) {
    student: wpPost(id: { eq: $id }) {
      id
      title
      portfolio {
        biography
        displayName
        email
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
`

const portfolio = ({ data }) => {
  const student = data.student
  console.log(student)
  return (
    <>
      <h1>{student.portfolio.displayName}</h1>
      <Grid>
        <Box>{student.portfolio.biography}</Box>
        <Box sx={{ py: 4 }}>
          <Obfuscate email={student.portfolio.email} />
        </Box>
      </Grid>
      <Box>
        {student.portfolio.featuredImage?.localFile?.childImageSharp?.fluid && (
          <Img
            fluid={{
              ...student.portfolio.featuredImage.localFile.childImageSharp
                .fluid,
              // ...{ aspectRatio: 4 / 2.8 },
            }}
          />
        )}
      </Box>
    </>
  )
}

export default portfolio
