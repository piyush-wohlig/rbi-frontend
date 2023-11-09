const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.js",
      title: "Global Benefit Solutions",
    },
  },
  css: {
    sourceMap: true,
    extract: false, // Disable CSS extraction
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    // Add file-loader for Excel files
    config.module
      .rule("excel", "pdf")
      .test(/\.(xls|xlsx|pdf)$/i)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/files/[name].[ext]",
      })
      .end();
  },
});
