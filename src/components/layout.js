import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
      <header> Hello World</header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
