import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import NavBar from "./navBar";
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
    <div>
      <NavBar data={data} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
