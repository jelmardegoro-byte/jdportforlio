const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  productionSourceMap: false, 

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new WebpackObfuscator(
          {
            compact: true,
            stringArray: true,
            stringArrayThreshold: 1,
            stringArrayEncoding: ['base64'],
            rotateStringArray: true,

            // Keep performance-friendly settings
            controlFlowFlattening: false,
            deadCodeInjection: false,
            selfDefending: false,
            debugProtection: false
          },
          // ⛔️ Exclude vendor, runtime, assets, etc.
          [
            '**/chunk-vendors*.js',
            '**/vue.runtime.*.js',
            '**/*.css',
            '**/*.svg',
            '**/*.html',
            '**/*.json',
            '**/node_modules/**',
            '**/public/**'
          ]
        )
      );
    }
  }
};
