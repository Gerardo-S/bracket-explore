import * as React from "react";
import Layout from "../components/layout";
import { useTheme } from "@mui/material";
import { graphql } from "gatsby";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
const IndexPage = ({ data }) => {
  const heroImg = data.allContentfulHero.nodes[0].backgroundImg;

  // WIP:queries below to be used
  // const pageTitles = data.allContentfulPageTitles.edges[0].node;
  // const products = data.allContentfulProduct.nodes;
  // const pagebuttons = data.allContentfulButton.nodes;

  const theme = useTheme();
  const primaryTextColor = theme.palette.primary.main;
  return (
    <Layout backgroundImg={heroImg}>
      <main
        style={{
          color: primaryTextColor,
          backgroundColor:
            "linear-gradient(360deg, rgba(0,0,0) 14%, rgba(255,0,0,0) 108%)",
          height: "100%",
          width: "100%",
        }}
      >
        <title>Brackets</title>
        <Box
          sx={{
            mx: "auto",
            width: "73%",
          }}
        >
          <h1>
            America's #1 Rated Adventure Platform
            <br />
          </h1>
        </Box>
      </main>
    </Layout>
  );
};
// backgroundColor:
//   "linear-gradient(360deg, rgba(0,0,0) 14%, rgba(255,0,0,0) 108%)",
// height: "90vh",
// width: "100%",

export const query = graphql`
  query {
    allContentfulHero {
      nodes {
        backgroundImg {
          description
          file {
            contentType
            details {
              image {
                height
                width
              }
            }
            fileName
            url
          }
          gatsbyImageData
          fluid(maxWidth: 1700, maxHeight: 1000) {
            tracedSVG
            srcSetWebp
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
    allContentfulPageTitles {
      edges {
        node {
          subTitleH5
          titleH1
          bodyText
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
        }
      }
    }
    allContentfulButton {
      nodes {
        title
      }
    }
    allContentfulProduct {
      nodes {
        product1
        product1description
        product1link
        productImg {
          title
          file {
            contentType
            fileName
            details {
              image {
                height
                width
              }
            }
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;
