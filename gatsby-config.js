require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "BracketExplore",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
      // {
      //   accessToken: "wMmWf0_njM6DNlVgWAcPJ_T0ITH98lAZ6-9sO6bGM0g",
      //   spaceId: "5ht3rhkq1k41",
      // },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
