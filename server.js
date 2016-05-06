var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');
var express = require('express');
var nconf = require('nconf');

nconf.argv().env();

nconf.defaults({
    port: 3000
});

var app = new express();
var port = nconf.get('port');

var compiler = webpack(config);
app.use('/node_modules', express.static('node_modules'));
app.use('/assets', express.static('assets'));
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
    }
});