import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import NavBar from "./navBar/navBar";
import theme from "../theme";
const Layout = ({ backgroundImg, children }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHeader {
        edges {
          node {
            logo {
              svg {
                content
                originalContent
                dataURI
                absolutePath
                relativePath
              }
              file {
                contentType
                url
                fileName
                details {
                  image {
                    height
                    width
                  }
                }
              }
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
              }
            }
            header
            navItem2
            navItem3
            navButton
          }
        }
      }
    }
  `);

  const fluidImg = backgroundImg.fluid;

  return (
    <>
      <BackgroundImage
        style={{
          height: "100vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        fadeIn
        fluid={fluidImg}
      >
        <div
          style={{
            backgroundColor: theme.palette.primary.mainGradient,
          }}
        >
          <NavBar data={data} />
          <main>{children}</main>
        </div>
      </BackgroundImage>
    </>
  );
};

export default Layout;
