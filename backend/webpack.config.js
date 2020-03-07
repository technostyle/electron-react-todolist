module.exports = {
    context: __dirname,
    entry: "./index.js",
    output: {
      path: __dirname + "/dist/",
      filename: "build.js",
      library: 'my-backend',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      // TODO: checkout 
      // https://medium.com/@vmarchesin/how-to-publish-a-npm-package-in-four-steps-4344ab88e852
      // libraryTarget: 'commonjs2',
    },
    devtool: "#sourcemap",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /(node_modules)/,
        }
      ]
    },
    target: 'node',
    resolve: {
      modules: ["app", "node_modules"],
      extensions: [".js"]
    }
  };
  