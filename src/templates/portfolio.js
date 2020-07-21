/** @jsx jsx */
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { jsx, Grid, Box } from "theme-ui"
import Obfuscate from "react-obfuscate"
import ReactPlayer from "react-player/lazy"

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
              fluid(maxWidth: 1920) {
                # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        projects {
          fieldGroupName
          projectDescription
          projectTitle
          imagesVideo {
            projectImage {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1920) {
                    # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            vimeoLink
            youtubeLink
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
        <Box>
          <div
            dangerouslySetInnerHTML={{ __html: student.portfolio.biography }}
          />
        </Box>
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
      <Box>
        {student.portfolio?.projects?.length > 0 &&
          student.portfolio.projects.map((project, index) => {
            return (
              <Box
                key={`project-${index}`}
                sx={{
                  my: [2, 3],
                }}
              >
                <h2>{project.projectTitle}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: project.projectDescription,
                  }}
                />
                {project.imagesVideo?.map((item, index) => {
                  return (
                    <Box key={`projectitem-${index}`} sx={{ pb: [1, 2] }}>
                      {item.projectImage && (
                        <Img
                          fluid={{
                            ...item.projectImage.localFile?.childImageSharp
                              ?.fluid,
                          }}
                        />
                      )}
                      {item.vimeoLink && (
                        <Box
                          sx={{
                            position: "relative",
                            pt: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
                          }}
                        >
                          <ReactPlayer
                            url={item.vimeoLink}
                            config={{
                              vimeo: {
                                playerOptions: {
                                  byline: true,
                                  color: "#000099",
                                },
                              },
                            }}
                            controls={true}
                            playing={false}
                            width="100%"
                            height="100%"
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                            }}
                          />
                        </Box>
                      )}
                      {item.youtubeLink && (
                        <Box>
                          <ReactPlayer
                            url={item.youtubeLink}
                            config={{
                              youtube: {
                                playerVars: { showinfo: 1, controls: true },
                                embedOptions: {},
                              },
                            }}
                            playing={false}
                            width="100%"
                            height="100%"
                            sx={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                            }}
                          />
                        </Box>
                      )}
                    </Box>
                  )
                })}
              </Box>
            )
          })}
      </Box>
    </>
  )
}

export default portfolio
