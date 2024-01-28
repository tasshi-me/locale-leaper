const initializationScript = document.createElement("script");
initializationScript.src = chrome.runtime.getURL("js/initialization.js");
initializationScript.onload = function () {
  (this as HTMLScriptElement).remove();
};
(document.head || document.documentElement).appendChild(initializationScript);
