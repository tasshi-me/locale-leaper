export const getTabId = async () => {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true,
    url: [
      "https://*.cybozu.com/k/*",
      "https://*.cybozu.com/g/*",
      "https://*.cybozu-dev.com/k/*",
      "https://*.cybozu-dev.com/g/*",
      "https://*.kintone.com/k/*",
      "https://*.kintone.com/g/*",
      "https://*.kintone-dev.com/k/*",
      "https://*.kintone-dev.com/g/*",
      "https://*.cybozu.cn/k/*",
      "https://*.cybozu.cn/g/*",
      "https://*.cybozu-dev.cn/k/*",
      "https://*.cybozu-dev.cn/g/*",
    ],
  });
  const tabId = tabs.at(0)?.id;
  if (tabId === undefined) {
    throw new Error("Failed to initialize: Unsupported page");
  }
  return tabId;
};

type EmbeddedInformationKey = "userId" | "locale" | "timezone" | "requestToken";

export const getEmbeddedInformation = async (
  tabId: number,
  key: EmbeddedInformationKey,
): Promise<string> => {
  const results = await chrome.scripting.executeScript({
    target: { tabId },
    func: (_key) => {
      return document.body.dataset[_key];
    },
    args: [key],
  });
  const data = results[0].result;
  if (data === undefined) {
    throw new Error(`Failed to retrieve embedded data by key: ${key}`);
  }
  return data;
};

export const sendRequestToKintone = async <Data>(params: {
  tabId: number;
  path: string;
  requestToken: string;
  method: "GET" | "POST";
  data: object;
}): Promise<Data> => {
  const results = await chrome.scripting.executeScript({
    target: { tabId: params.tabId },
    func: async (_params): Promise<{ data: Data } | { error: string }> => {
      try {
        const resp = await fetch(_params.path, {
          method: _params.method,
          headers: {
            "Content-Type": "application/json",
          },
          body:
            _params.method === "GET"
              ? undefined
              : JSON.stringify({
                  __REQUEST_TOKEN__: _params.requestToken,
                  ..._params.data,
                }),
        });
        if (!resp.ok) {
          console.error(`${resp.status}: ${resp.statusText}`);
          return { error: `${resp.status}: ${resp.statusText}` };
        }
        const body = await resp.json();
        return { data: body };
      } catch (e) {
        console.error(e);
        return { error: e as string };
      }
    },
    args: [params],
  });
  const result = results[0].result;
  if ("error" in result) {
    throw new Error(`Failed to request to kintone: ${result.error}`);
  }
  return result.data;
};
