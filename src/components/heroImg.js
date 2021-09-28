import * as React from "react";
import BackgroundImage from "gatsby-background-image";
const HeroImg = ({ fluid }) => {
  return (
    <BackgroundImage
      fadeIn
      fluid={fluid}
      style={{
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "absolute",
        top: "-66px",
        zIndex: "-1",
      }}
    ></BackgroundImage>
  );
};

export default HeroImg;
