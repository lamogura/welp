var webpackConfig = require('./webpack.config')
var argv = require('yargs').argv

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'tests.webpack.js'
    ],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ],

    singleRun: !argv.watch,
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    concurrency: Infinity
  })
}
