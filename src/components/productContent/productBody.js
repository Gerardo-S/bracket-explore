import * as React from "react";
import { Typography } from "@mui/material";
import ProductContainer from "./productContatiner";
import Box from "@mui/material/Box";

const ProductBody = ({ isMatch }) => {
  return (
    <section style={{ marginTop: "40px" }}>
      <ProductContainer>
        <Box
          sx={{
            width: "370px",
            mr: !isMatch ? "26px" : 0,
            height: "240px",
            bgcolor: "productBox.main",
            mt: !isMatch ? "72px" : "30px",
          }}
        >
          <div
            style={{
              marginLeft: "32px",
              marginTop: !isMatch ? "112px" : "90px",
            }}
          >
            <Typography variant={"subtitle1"} sx={{ color: "black" }}>
              Augmented Reality
            </Typography>
            <Typography variant={"body2"} sx={{ color: "black", mt: "16px" }}>
              An interactive experience like no other.
            </Typography>
            <Typography variant={"h6"} sx={{ mt: "24px" }}>
              Learn more
            </Typography>
          </div>
        </Box>
        <Box
          sx={{
            width: "396px",
            mr: "26px",
            height: "240px",
            bgcolor: "productBox.main",
            mt: "72px",
          }}
        >
          Hello World
        </Box>
        <Box
          sx={{
            width: "370px",
            mr: "26px",
            height: "240px",
            bgcolor: "productBox.main",
            mt: "72px",
          }}
        >
          Hello World
        </Box>
      </ProductContainer>
    </section>
  );
};

export default ProductBody;
