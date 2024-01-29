import { Locale } from "./locale.ts";
import useSWR from "swr";
import {
  getUserCode,
  getRequestToken,
  updateLocale,
  updateTimezone,
  getUser,
} from "./fetchers.ts";
import { getTabId } from "./chrome.ts";
import { Timezone } from "./timezone.ts";

type Hook<S, Label extends string> = () => { [key in Label]: S };
type HookWithMutate<S, Label extends string> = () => {
  [key in Label]: S;
} & { [key2 in `mutate${Capitalize<Label>}`]: (value: S) => Promise<S> };

export const reloadTab = async () => {
  await chrome.tabs.reload();
};

export const useTabId: Hook<number, "tabId"> = () => {
  const { data: tabId } = useSWR("tabId", getTabId, { suspense: true });
  return { tabId: tabId };
};

export const useUserCode: Hook<string, "userCode"> = () => {
  const { tabId } = useTabId();
  const { data: userCode } = useSWR("userCode", () => getUserCode(tabId), {
    suspense: true,
  });
  return { userCode: userCode };
};

export const useRequestToken: Hook<string, "requestToken"> = () => {
  const { tabId } = useTabId();
  const { data: requestToken } = useSWR(
    "requestToken",
    () => getRequestToken(tabId),
    { suspense: true },
  );
  return { requestToken: requestToken };
};

export const useLocale: HookWithMutate<Locale, "locale"> = () => {
  const { tabId } = useTabId();
  const { requestToken } = useRequestToken();
  const { userCode } = useUserCode();
  const { data, mutate } = useSWR(
    "user",
    () => getUser({ tabId, requestToken, userCode }),
    { suspense: true },
  );
  const mutateLocale = async (newLocale: Locale) => {
    await updateLocale({ tabId, requestToken, locale: newLocale });
    await mutate({ ...data, locale: newLocale }, false);
    return newLocale;
  };
  return { locale: data.locale, mutateLocale };
};

export const useTimezone: HookWithMutate<Timezone, "timezone"> = () => {
  const { tabId } = useTabId();
  const { requestToken } = useRequestToken();
  const { userCode } = useUserCode();
  const { data, mutate } = useSWR(
    "user",
    () => getUser({ tabId, requestToken, userCode }),
    { suspense: true },
  );
  const mutateTimezone = async (newTimezone: Timezone) => {
    await updateTimezone({ tabId, requestToken, timezone: newTimezone });
    await mutate({ ...data, timezone: newTimezone }, false);
    return newTimezone;
  };
  return { timezone: data.timezone, mutateTimezone };
};
