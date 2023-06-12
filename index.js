const { checkI18nKeys } = require('i18n-check-keys')

class I18nCheckKeysPlugin {
  /**
   * @param {import('i18n-check-keys').I18nCheckKeysOptions} options 
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