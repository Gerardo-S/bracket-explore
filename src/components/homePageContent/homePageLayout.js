import * as React from "react";
import HeroImg from "../heroImg";
import Box from "@mui/material/Box";
const HomePageLayout = ({ children, fluid, primaryTextColor }) => {
  return (
    <>
      <title>Brackets</title>
      <main
        style={{
          color: primaryTextColor,
          background:
            "linear-gradient(360deg, rgba(0,0,0) 40%, rgba(255,0,0,0) 108%)",
          height: "1625px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            mx: "auto",
            width: "73%",
            mt: "26px",
          }}
        >
          {children}
        </Box>
      </main>
      <HeroImg fluid={fluid} />
    </>
  );
};

export default HomePageLayout;
