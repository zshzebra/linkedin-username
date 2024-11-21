export default defineAppConfig({
    testUsername: import.meta.env.WXT_TEST_USERNAME,
});

declare module "wxt/sandbox" {
    export interface WxtAppConfig {
        testUsername: string;
    }
}
