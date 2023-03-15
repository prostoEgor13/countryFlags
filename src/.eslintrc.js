module.exports = {
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', 'src'],
            },
        },
    },
    env: {
        browser: true,
        es6: true,
    },
    extends: ['react-app', 'react-app/jest', 'airbnb', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: [],
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'arrow-body-style': 'off',
        'react/function-component-definition': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/mouse-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'no-unused-expressions': 'off',
        'no-restricted-syntax': 'off',
        'react/forbid-prop-types': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-named-as-default': 'warn',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/button-has-type': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y / click-events-have-key-events': 'off',
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
        'react/no-array-index-key': 'off',
        'import/order': 'off',
        'react/self-closing-comp': 'off',
    },
    ignorePatterns: ['src/assets/*'],
};