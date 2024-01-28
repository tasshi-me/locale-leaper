// https://jp.cybozu.help/general/en/id/020155.html#list_format_user_101080

export const locales =
  [
    {label: "Auto", key: "auto"},
    {label: "日本語", key: "ja"},
    {label: "English", key: "en"},
    {label: "中文（简体）", key: "zh"},
    {label: "中文（繁體）", key: "zh-TW"},
    {label: "Español", key: "es"},
  ] as const satisfies {label: string, key: string}[];

export type Locale = typeof locales[number]['key']
