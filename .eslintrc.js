module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    ignorePatterns: [".eslintrc.js", "*.html"],
    extends: ["plugin:sonarjs/recommended", "metarhia"],
    plugins: ["sonarjs"],
    rules: {
        quotes: ["error", "double", { avoidEscape: true }],
        "sonarjs/cognitive-complexity": ["error", 15],
    },
};
