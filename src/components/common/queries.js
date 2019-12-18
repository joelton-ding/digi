import { useStaticQuery, graphql } from "gatsby"

export const Query = () => {
  return useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "homepage-banner.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      backgrounds: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }

      allFile(
        sort: { fields: name, order: DESC }
        filter: { relativeDirectory: { eq: "banners" } }
      ) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(maxWidth: 4000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
}
