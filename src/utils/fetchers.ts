import { getEmbeddedInformation, sendRequestToKintone } from "./chrome.ts";
import { Locale } from "./locale.ts";
import { Timezone } from "./timezone.ts";

export const getUserCode = async (tabId: number): Promise<string> => {
  return getEmbeddedInformation(tabId, "userCode");
};

export const getRequestToken = async (tabId: number): Promise<string> => {
  return getEmbeddedInformation(tabId, "requestToken");
};

export const getLocaleOffline = async (tabId: number): Promise<Locale> => {
  return (await getEmbeddedInformation(tabId, "locale")) as Locale;
};

export const getTimezoneOffline = async (tabId: number): Promise<Timezone> => {
  return (await getEmbeddedInformation(tabId, "timezone")) as Timezone;
};

type GetByCodeResponse = {
  success: boolean;
  result: {
    item: {
      code: string;
      locale: "" | "ja" | "en" | "zh" | "zh-TW" | "es";
      timezone: Timezone;
    };
  };
};

export const getUser = async (params: {
  tabId: number;
  requestToken: string;
  userCode: string;
}): Promise<{ code: string; locale: Locale; timezone: Timezone }> => {
  const data = await sendRequestToKintone<GetByCodeResponse>({
    tabId: params.tabId,
    path: "/k/api/people/user/getByCode.json",
    requestToken: params.requestToken,
    method: "POST",
    data: { code: params.userCode },
  });

  const locale = ((): Locale => {
    switch (data.result.item.locale) {
      case "":
        return "auto";
      case "ja":
        return "ja";
      case "en":
        return "en";
      case "zh":
        return "zh";
      case "zh-TW":
        return "zh-TW";
      case "es":
        return "es";
      default:
        throw new Error(`Invalid locale: ${data.result.item.locale}`);
    }
  })();
  return {
    code: data.result.item.code,
    locale: locale,
    timezone: data.result.item.timezone as Timezone,
  };
};

export const updateLocale = async (params: {
  tabId: number;
  requestToken: string;
  locale: Locale;
}) => {
  await sendRequestToKintone({
    tabId: params.tabId,
    path: "/api/settings/profile.json",
    requestToken: params.requestToken,
    method: "POST",
    data: { locale: params.locale },
  });
};

export const updateTimezone = async (params: {
  tabId: number;
  requestToken: string;
  timezone: Timezone;
}) => {
  await sendRequestToKintone({
    tabId: params.tabId,
    path: "/api/settings/profile.json",
    requestToken: params.requestToken,
    method: "POST",
    data: { timezone: params.timezone },
  });
};
