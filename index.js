const { checkI18nKeys } = require('i18n-check-keys')

class I18nCheckKeysPlugin {
  /**
   * @param {Parameters<typeof checkI18nKeys>[0]} options
   */
  constructor(options = {}) {
    this.options = options
  }

  apply(compiler) {
    const { run } = checkI18nKeys(this.options)

    const fn = (_compiler) => run(_compiler.context)

    compiler.hooks.run.tap('CheckLocalePlugin', fn)
    compiler.hooks.watchRun.tap('CheckLocalePlugin', fn)
    compiler.hooks.done.tap('CheckLocalePlugin', fn)
  }
}

module.exports = I18nCheckKeysPlugin