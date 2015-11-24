var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  contentBase: "./dist"
});
server.listen(8080, function() {
  console.log('osm-comments-frontend listening on *:', 8080);
});
