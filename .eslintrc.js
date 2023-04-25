module.exports = {
    root: true,
    parser: "babel-eslint",
    plugins: ["react", "jsx-a11y", "import", "react-hooks", "gatsby"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:react-hooks/recommended",
        "plugin:gatsby/recommended",
    ],
    rules: {
        // Add your custom rules here
    },
    settings: {
        react: {
            version: "detect",
        },
    },
    parserOptions: {
        requireConfigFile: false,
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true
    },
};





