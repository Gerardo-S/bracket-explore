import * as React from "react";
import Box from "@mui/material/Box";

const ProductContainer = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 312,
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Box>
  );
};

export default ProductContainer;
