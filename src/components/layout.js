import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import NavBar from "./navBar";
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulHeader {
        nodes {
          logo {
            file {
              fileName
              url
            }
          }
          header
          navItem2
          navItem3
          navButton
        }
      }
    }
  `);
  // object containing contentful media
  // console.log(data.allContentfulHeader.nodes[0]);
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
