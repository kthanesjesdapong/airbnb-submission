module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2022,
        sourceType: 'module',
    },
    settings: {
        react: {
            version: 'detect',
        },
        "import/resolver": {
            "typescript": {}
        },
    },
    rules: {
        "import/no-named-as-default": 0,
        "import/resolver": 0,
        'no-unused-vars': 1,
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-var-requires': 'off',
        'react/prop-types': 'off',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        "@typescript-eslint/no-empty-interface": [
            "error",
            {
                "allowSingleExtends": true
            }
        ],
        indent: [0, 'space'],
        semi: [0],
    },
    env: {
        browser: true, es2020: true, "node": true
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/typescript',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
            },
        },
    ],
};
