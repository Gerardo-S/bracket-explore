import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import NavBar from "./navBar/navBar";
import { Helmet } from "react-helmet";
import OgImg from "../images/thumbnail.png";

const Layout = ({ children }) => {
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

  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(0,0,1) 20%, rgba(0,0,0,0) 100%)",
      }}
    >
      <Helmet>
        <title>Brackets</title>
        <meta
          property="og:url"
          content="https://bracketexploremain.gatsbyjs.io/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Brackets" />
        <meta
          property="og:description"
          content="Gatsby + Contentful website. All content on this website is imported using GraphQL from Contenful headless cms."
        />
        <meta property="og:image" content={OgImg} />
      </Helmet>

      <NavBar data={data} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
