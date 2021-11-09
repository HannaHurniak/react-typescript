const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./../webpack.config');

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);

const app = require('./app');

const PORT =  3000;

app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
      });

const runServer = async () => {
  await server.start();
};

runServer();