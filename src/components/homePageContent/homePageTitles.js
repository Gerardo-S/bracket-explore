import * as React from "react";
import { Typography } from "@mui/material";
const HomePageTitles = () => {
  return (
    <>
      <Typography sx={{ mb: "16px" }} variant="subtitle1">
        America's #1 Rated Adventure Platform
      </Typography>

      <Typography sx={{ maxWidth: "470px" }} variant="subtitle2">
        Take control of your weekends
      </Typography>
      <Typography variant="body1" sx={{ mt: "24px", mb: "28px" }}>
        Find adventure anywhere
      </Typography>
    </>
  );
};

export default HomePageTitles;
