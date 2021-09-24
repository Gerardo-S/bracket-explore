import * as React from "react";
import Layout from "../components/layout";
import { useTheme } from "@mui/material";

const IndexPage = () => {
  const theme = useTheme();
  const primaryTextColor = theme.palette.primary.main;
  return (
    <Layout>
      <main style={{ color: primaryTextColor }}>
        <title>Brackets</title>
        <h1>
          America's #1 Rated Adventure Platform
          <br />
        </h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
