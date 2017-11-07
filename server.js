const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

//fix mongoose promise depracation warning
mongoose.Promise = global.Promise;

//differentiate between testing & development environment
if (process.env.NODE_ENV !== 'test') {
  mongoose.connect('mongodb://localhost/TMCx', {
    useMongoClient:true
  });
}

app.use(bodyParser.json()); //API json parser middleware
routes(app); //import routes

if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');
  app.use(webpackMiddleware(webpack(webpackConfig)));
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

app.listen(process.env.PORT || 3050, () => console.log("Listening"));
