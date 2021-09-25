import * as React from "react";
import Layout from "../components/layout";
import { useTheme } from "@mui/material";
import { graphql } from "gatsby";
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
      <main style={{ color: primaryTextColor }}>
        <title>Brackets</title>
        <h1>
          America's #1 Rated Adventure Platform
          <br />
        </h1>
      </main>
    </Layout>
  );
};

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
