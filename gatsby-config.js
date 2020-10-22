module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "backyard-biodiversity.com",
      },
    },
  ],
}
