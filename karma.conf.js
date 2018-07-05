// Karma configuration
// Generated on Tue May 22 2018 11:49:46 GMT+0900 (東京 (標準時))

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'kintuba'],
    files: [
      'src/**/*.js',
      'test/**/*.js',
      {
        pattern: '.kintuba/**/*.json',
        watched: false,
        included: false,
        served: true,
        nocache: false,
      },
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'Firefox', 'PhantomJS', 'Edge', 'IE'],
    singleRun: true,
    concurrency: Infinity,
  })
}
