import { checkI18nKeys } from 'i18n-check-keys'

declare class I18nCheckKeysPlugin {
  constructor(options: Parameters<typeof checkI18nKeys>[0])
}

export = I18nCheckKeysPlugin