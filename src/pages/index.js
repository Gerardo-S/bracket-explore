import * as React from "react";
import Layout from "../components/layout";
import { useMediaQuery, useTheme } from "@mui/material";
import { graphql } from "gatsby";
import Box from "@mui/material/Box";
import PageButton from "../components/pageButton";
import HomePageLayout from "../components/homePageContent/homePageLayout";
import HomePageTitles from "../components/homePageContent/homePageTitles";
import ProductBody from "../components/productContent/productBody";

const IndexPage = ({ data }) => {
  const heroImg = data.allContentfulHero.nodes[0].backgroundImg;
  const pageTitles = data.allContentfulPageTitles.edges[0].node;
  const btnText1 = data.allContentfulButton.nodes[1].title;
  const btnText2 = data.allContentfulButton.nodes[0].title;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const primaryTextColor = theme.palette.primary.main;
  const fluidImg = heroImg.fluid;

  return (
    <Layout>
      <HomePageLayout fluid={fluidImg} primaryTextColor={primaryTextColor}>
        <HomePageTitles pageTitles={pageTitles} />
        <Box sx={{ mb: "40px" }}>
          <PageButton btnText={btnText1} />
          <PageButton
            btnText={btnText2}
            btnWidth={"174px"}
            btnColor={"#767D84"}
            btnBgColor={"#b0bec5"}
            marginTop={isMatch ? 2 : undefined}
          />
        </Box>
        <ProductBody isMatch={isMatch} />
      </HomePageLayout>
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
          fluid(maxWidth: 3400, maxHeight: 1812) {
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
