module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/recommended',
        'airbnb-base',
    ],
    globals: {
        Vue: 'readonly',
        $: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        'no-debugger': 'off',
        'no-console': 'off',
        'no-underscore-dangle': 'off',
        'import/no-unresolved': 'off',
        'array-callback-return': [
            'warn',
        ],
        'prefer-const': [
            'warn',
        ],
        'prefer-destructuring': [
            'warn',
        ],
        'no-multi-str': ['warn',
        ],
        'no-param-reassign': [
            'warn',
        ],
        'no-plusplus': [
            'warn',
        ],
        'no-else-return': [
            'warn',
        ],
        'prefer-spread': [
            'warn',
        ],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'no-confusing-arrow': 'off',
        'implicit-arrow-linebreak': 'off',
        'class-methods-use-this': [
            'warn',
        ],
        'prefer-object-spread': 'off',
        'import/extensions': 'off',
        'object-shorthand': 'off',
        'max-lines-per-function': [
            'error',
            300,
        ],
        'padded-blocks': [
            'error',
            'never',
        ],
        'max-params': [
            'error',
            5,
        ],
        'wrap-iife': [
            'error',
            'inside',
        ],
        curly: [
            'error',
            'all',
        ],
        'nonblock-statement-body-position': 'off',
        'eol-last': [
            'error',
        ],
        'line-comment-position': [
            'error',
            {
                position: 'above',
            },
        ],
        'linebreak-style': 'off',
        'lines-around-comment': [
            'error',
            {
                beforeBlockComment: true,
                afterBlockComment: false,
                beforeLineComment: true,
                afterLineComment: false,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowClassStart: true,
                allowClassEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true,
            },
        ],
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        'no-trailing-spaces': [
            'error',
            {
                skipBlankLines: true,
                ignoreComments: true,
            },
        ],
        'id-length': [
            'off',
            {
                min: 2,
            },
        ],
        'multiline-comment-style': [
            'error',
            'starred-block',
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        'max-len': [
            'error',
            {
                code: 150,
            },
        ],
        'vue/html-indent': [
            'error',
            4,
        ],
        'operator-linebreak': [
            "error",
            "after",
            { "overrides": { "?": "before", ":": "before" } }
        ]
    },
};

