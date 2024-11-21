import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
    srcDir: "src",
    extensionApi: "chrome",
    modules: ["@wxt-dev/module-svelte"],
    manifestVersion: 3,
    manifest: {
        description: "Suggest usernames for LinkedIn connections",
        name: "LinkedIn Username Suggestion",
        version: "0.0.1",
    },
});
