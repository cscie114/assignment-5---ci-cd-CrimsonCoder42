module.exports = {
    root: true,
    parser: "@babel/eslint-parser",
    plugins: [
        "react",
        "jsx-a11y",
        "import",
        "react-hooks",
        "gatsby",
    ],
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
};




