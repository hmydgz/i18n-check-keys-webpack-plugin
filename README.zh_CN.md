# i18n-check-keys-webpack-plugin

用于国际化键检查的 Webpack 插件

[English](./README.md) | 简体中文

[![npm](https://img.shields.io/npm/v/i18n-check-keys-webpack-plugin.svg)](https://github.com/hmydgz/i18n-check-keys-webpack-plugin) [![build status](https://github.com/hmydgz/i18n-check-keys-webpack-plugin/actions/workflows/build.action.yml/badge.svg?branch=main)](https://github.com/hmydgz/i18n-check-keys-webpack-plugin/actions)

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
      benchmarkLang: 'zh_CN', // 基准语言
      needStopRun: process.env.NODE_ENV === 'production', // 在打包时检查到有缺失就停止进程
    }),
  ],
}
```

# Options
该插件为 `i18n-check-keys` 的封装，具体配置请查看原文档
[Document](https://github.com/hmydgz/i18n-check-keys#options)