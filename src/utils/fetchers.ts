import {getEmbeddedInformation, sendRequestToKintone} from "./chrome.ts";
import {Locale} from "./locale.ts";
import {Timezone} from "./timezone.ts";

export const getRequestToken = async (tabId: number): Promise<string> => {
  return await getEmbeddedInformation(tabId, "requestToken");
}

export const getLocaleOffline = async (tabId: number): Promise<Locale> => {
  return await getEmbeddedInformation(tabId, "locale") as Locale
}

export const getTimezoneOffline = async (tabId: number): Promise<Timezone> => {
  return await getEmbeddedInformation(tabId, "timezone") as Timezone
}

export const updateLocale = async (params: { tabId: number, requestToken: string, locale: Locale }) => {
  await sendRequestToKintone({
    tabId: params.tabId,
    path: "/api/settings/profile.json",
    requestToken: params.requestToken,
    method: "POST",
    data: {locale: params.locale}
  })
}

export const updateTimezone = async (params: { tabId: number, requestToken: string, timezone: Timezone }) => {
  await sendRequestToKintone({
    tabId: params.tabId,
    path: "/api/settings/profile.json",
    requestToken: params.requestToken,
    method: "POST",
    data: {timezone: params.timezone}
  })
}
