import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";
import { version } from "./package.json";

const [major, minor, patch, label = "0"] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, "")
  // split into version parts
  .split(/[.-]/);

const manifest = (mode: string) =>
  defineManifest({
    manifest_version: 3,
    name:
      mode === "development"
        ? "[INTERNAL] LocaleLeaper for kintone"
        : "LocaleLeaper for kintone",
    short_name: "LocaleLeaper",
    version: `${major}.${minor}.${patch}.${label}`,
    version_name: version,
    description: "The browser extension to switch locale on kintone",
    homepage_url: "https://github.com/tasshi-me/locale-leaper#readme",
    // https://developer.chrome.com/docs/extensions/reference/manifest/icons
    icons: {
      "16": "icons/locale-leaper-logo_16.png",
      "48": "icons/locale-leaper-logo_48.png",
      "128": "icons/locale-leaper-logo_128.png",
    },
    action: {
      default_title: "LocaleLeaper - Click to change the locale",
      default_popup: "index.html",
    },
    permissions: ["activeTab", "scripting"],
    content_scripts: [
      {
        js: ["src/content/content.ts"],
        matches: [
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
      },
    ],
    web_accessible_resources: [
      {
        resources: ["js/initialization.js"],
        matches: [
          "https://*.cybozu.com/*",
          "https://*.cybozu-dev.com/*",
          "https://*.kintone.com/*",
          "https://*.kintone-dev.com/*",
          "https://*.cybozu.cn/*",
          "https://*.cybozu-dev.cn/*",
        ],
      },
    ],
  });

export default defineConfig(({ mode }) => ({
  plugins: [react(), crx({ manifest: manifest(mode) })],
  // https://github.com/crxjs/chrome-extension-tools/issues/746#issuecomment-1647484887
  server: {
    port: 5174,
    strictPort: true,
    hmr: {
      port: 5174,
    },
  },
}));
