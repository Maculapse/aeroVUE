module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000'
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/colors.scss";`
      }
    }
  }
}