import * as React from "react";
import Layout from "../components/layout";
import { useMediaQuery, useTheme } from "@mui/material";
import { graphql } from "gatsby";
import Box from "@mui/material/Box";
import HeroImg from "../components/heroImg";
import PageButton from "../components/pageButton";
const IndexPage = ({ data }) => {
  const heroImg = data.allContentfulHero.nodes[0].backgroundImg;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const primaryTextColor = theme.palette.primary.main;
  const fluidImg = heroImg.fluid;
  return (
    <Layout>
      <title>Brackets</title>
      <main
        style={{
          color: primaryTextColor,
          background:
            "linear-gradient(360deg, rgba(0,0,0) 14%, rgba(255,0,0,0) 108%)",
          height: "95vh",
          width: "100%",
        }}
      >
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
          <Box>
            <PageButton btnText={"Get Started >"} />
            <PageButton
              btnText={"Request a demo >"}
              btnWidth={"174px"}
              btnColor={"#767D84"}
              btnBgColor={"#b0bec5"}
              marginTop={isMatch ? 2 : undefined}
            />
          </Box>
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
