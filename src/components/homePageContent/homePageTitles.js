import * as React from "react";
import { Typography } from "@mui/material";
const HomePageTitles = ({ pageTitles }) => {
  console.log(pageTitles);
  return (
    <>
      <Typography sx={{ mb: "16px" }} variant="subtitle1">
        {pageTitles.subTitleH5}
      </Typography>

      <Typography sx={{ maxWidth: "470px" }} variant="subtitle2">
        {pageTitles.titleH1}
      </Typography>
      <Typography variant="body1" sx={{ mt: "24px", mb: "28px" }}>
        {pageTitles.bodyText}
      </Typography>
    </>
  );
};

export default HomePageTitles;
