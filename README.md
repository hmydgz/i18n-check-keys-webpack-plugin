# i18n-check-keys-webpack-plugin

English | [简体中文](./README.zh_CN.md)

![npm](https://img.shields.io/npm/v/i18n-check-keys-webpack-plugin.svg) ![build status](https://github.com/heimeiyaodagongzai/i18n-check-keys-webpack-plugin/actions/workflows/build.action.yml/badge.svg?branch=main)

![](http://qiniuyun.hmydgz.top/doc/img/i18n-check-keys-webpack-plugin-img2.png)

# Install
```bash
npm i i18n-check-keys-webpack-plugin -D
# or
yarn add i18n-check-keys-webpack-plugin -D
# or
pnpm add i18n-check-keys-webpack-plugin -D
```

# Usage
```js
const I18nCheckKeysWebpackPlugin = require('i18n-check-keys-webpack-plugin')

// webpack config
module.exports = {
  plugins: [
    new I18nCheckKeysWebpackPlugin({
      localePath: /locale/,
      benchmarkLang: 'zh_CN',
      needStopRun: process.env.NODE_ENV === 'production', // Stop the process if something is missing during packaging
    }),
  ],
}
```

# Options
[Document](https://github.com/heimeiyaodagongzai/i18n-check-keys#options)