const getLoginUser = async () => {
  if (typeof window.kintone === "object") {
    return window.kintone.getLoginUser();
  }
  if (typeof window.garoon === "object") {
    return window.garoon.base.user.getLoginUser();
  }
  throw new Error("Failed to initialize getLoginUser function");
};

const getRequestToken = async () => {
  if (typeof window.kintone === "object") {
    return window.kintone.getRequestToken();
  }
  if (typeof window.garoon === "object") {
    return window.garoon.connect.kintone.getRequestToken();
  }
  throw new Error("Failed to initialize getRequestToken function");
};

(async () => {
  const loginUser = await getLoginUser();
  if (loginUser !== undefined) {
    document.body.dataset.userId = loginUser.id;
    document.body.dataset.locale = loginUser.language;
    document.body.dataset.timezone = loginUser.timezone;
    document.body.dataset.requestToken = await getRequestToken();

    document.body.dispatchEvent(new CustomEvent("locale-leaper-initialized"));
  }
})();
