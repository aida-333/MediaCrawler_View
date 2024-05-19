module.exports = {
  // chainWebpack: config => {
  //   config.module
  //     .rule('json')
  //     .test(/\.json$/)
  //     .use('file-loader')
  //     .loader('file-loader')
  //     .end()
  // },
  // devServer: {
  //   port: 7000 // 你想要使用的端口号
  // },
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
