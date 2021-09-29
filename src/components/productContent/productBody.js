import * as React from "react";
import { Typography } from "@mui/material";
import ProductContainer from "./productContatiner";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Box from "@mui/material/Box";

const ProductBody = ({ isMatch, data }) => {
  const displayProductImages = (product) => {
    const image = getImage(product.productImg);
    return image;
  };

  return (
    <section style={{ marginTop: "40px" }}>
      <ProductContainer>
        {data.map((product) => (
          <Box
            key={product.productImg.id}
            sx={{
              width: "385px",
              mr: !isMatch ? "26px" : 0,
              height: "240px",
              bgcolor: "productBox.main",
              mt: !isMatch ? "72px" : "30px",
              position: "relative",
            }}
          >
            <div
              style={{
                marginLeft: "32px",
                marginTop: !isMatch ? "112px" : "90px",
              }}
            >
              <Typography variant={"subtitle1"} sx={{ color: "black" }}>
                {product.product1}
              </Typography>
              <Typography variant={"body2"} sx={{ color: "black", mt: "16px" }}>
                {product.product1description}
              </Typography>
              <Typography
                variant={"h6"}
                sx={{
                  mt: "24px",
                  "&:hover": {
                    cursor: "pointer",
                    color: "red",
                  },
                }}
              >
                {product.product1link}
              </Typography>
            </div>
            <Box
              sx={{
                width: !isMatch ? "178px" : "160px",
                height: !isMatch ? "220px" : "190px",
                position: "absolute",
                right: !isMatch ? "-20px" : "-35px",
                bottom: !isMatch ? "90px" : "150px",
              }}
            >
              <GatsbyImage
                image={displayProductImages(product)}
                alt={product.productImg.title}
                style={{
                  objectFit: "cover",
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              />
            </Box>
          </Box>
        ))}
      </ProductContainer>
    </section>
  );
};

export default ProductBody;
