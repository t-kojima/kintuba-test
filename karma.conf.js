// Karma configuration
// Generated on Tue May 22 2018 11:49:46 GMT+0900 (東京 (標準時))

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'kintuba'], // 'polyfill'],
    // polyfill: ['fetch'],
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
    // client: {
    //   mocha: {
    //     timeout: 10000,
    //   },
    // },
    exclude: [],
    // preprocessors: {
    //   'test/**/*.js': ['webpack'],
    // },
    // webpack: {
    //   mode: 'development',
    //   module: {
    //     rules: [
    //       {
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         use: [
    //           {
    //             loader: 'babel-loader',
    //             options: {
    //               presets: ['env'],
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['Chrome', 'Firefox', 'PhantomJS', 'Edge', 'IE'],
    browsers: ['Chrome', 'Firefox', 'Edge'],
    singleRun: true,
    concurrency: Infinity,
  })
}
