import eslintPluginAstro from "eslint-plugin-astro";

export default [
    // Base configuration
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            // Custom rules
            "astro/no-set-html-directive": "error",
        },
    },
];
