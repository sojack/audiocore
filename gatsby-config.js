module.exports = {
  siteMetadata: {
    title: "AudioCore",
    siteUrl:'https://audiocore.ca'
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "98Z5Gtqzz6f4P6gUlqICCdVKwBpJc3WzEfQqoo2j_gg",
        spaceId: "p6dhuzd470og",
      },
    },
    {
      resolve:"gatsby-plugin-styled-components",
      options:{
        displayName:true,
      }
  },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "p6dhuzd470og",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
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
