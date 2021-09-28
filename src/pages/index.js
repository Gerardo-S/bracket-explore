import * as React from "react";
import Layout from "../components/layout";
import { useTheme } from "@mui/material";
import { graphql } from "gatsby";
import Box from "@mui/material/Box";
import HeroImg from "../components/heroImg";
const IndexPage = ({ data }) => {
  const heroImg = data.allContentfulHero.nodes[0].backgroundImg;
  const theme = useTheme();
  const primaryTextColor = theme.palette.primary.main;
  const fluidImg = heroImg.fluid;
  return (
    <Layout>
      <main
        style={{
          color: primaryTextColor,
          background:
            "linear-gradient(360deg, rgba(0,0,0) 14%, rgba(255,0,0,0) 108%)",
          height: "95vh",
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
          <h2>Take control of your weekends</h2>
          <h3>Find adventure anywhere</h3>
          <Box></Box>
        </Box>
      </main>
      <HeroImg fluid={fluidImg} />
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
