const express = require('express');
const app = express();
const path=require('path');
const port = 3000;

if (process.env.NODE_ENV !== 'production') {
	const webpack = require('webpack');
	const webpackDevMiddleware = require('webpack-dev-middleware');
	const webpackHotMiddleware = require('webpack-hot-middleware');
	const webpackServerMiddleware = require('webpack-server-middleware');
	const webpackDevconfig = require('./webpack.dev.js');
	const compiler = webpack(webpackDevconfig);
	
    app.get('/',function(req,res){  
        res.sendFile(path.join(__dirname, './src/index.html'));  
    });
	app.use(webpackDevMiddleware(compiler));

} else {
  const publicPath = path.join(__dirname, '../dist');
  app.use(express.static(publicPath));
}

app.listen(port, function (error) {
	if(error) {
		console.log(error);
	} else {
		console.log('App listening on port: ' + port + '\n');
	}
});
