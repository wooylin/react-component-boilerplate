process.env.NODE_ENV = 'development';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const open = require('open');
const config = require('./webpack.config');

const app = express();

const compiler = webpack(config);

app.use(express.static(path.join(__dirname, '/')));

app.use(
  require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.use(require('webpack-hot-middleware')(compiler));

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  const uri = `http://localhost:${8000}`;
  console.log(`Listening at ${uri}\n`);
  open(uri);
});
