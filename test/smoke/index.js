const path = require('path');
const webpack = require('webpack');
const Mocha = require('mocha');
const rimraf = require('rimraf');

const mocha = new Mocha({
  timeout: '10000ms'
});

process.chdir(path.join(__dirname, 'template'), );

rimraf('./dist', () => {
  const prodConfig = require('../../lib/webpack.prod.js');

  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.log(err);
      process.exit(2);
    }

    console.log(stats.toString({
      colors: true,
      modules: false,
      children: false
    }));

    console.log('Webpack build success, begin to run test cases');
    mocha.addFile(path.join(__dirname, 'html-test.js'));
    mocha.addFile(path.join(__dirname, 'css-js.js'));
    console.log('Successfully finished runnning test cases');
  })

})


