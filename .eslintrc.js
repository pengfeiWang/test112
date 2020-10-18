/*
 * @Author: w.pengfei
 * @Date: 2020-07-16 19:18:19
 * @LastEditTime: 2020-10-18 23:46:06
 * @Description: ''
 * @LastEditors: w.pengfei
 */
module.exports = {
  root: true,

  env: {
    node: true,
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },

  rules: {
    "semi": ['error', "always"],
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'vue/no-confusing-v-for-v-if': 'warning',
    // 'vue/no-v-html': 'warning',
    // 'max-len': ['error', 130],
    // 'eqeqeq': 'error',
    // 'spaced-comment': ['error', 'always'],
    'prettier/prettier': 'error',
  },

  

  // overrides: [
  //   {
  //     files: [
  //       '**/__tests__/*.{j,t}s?(x)',
  //       '**/tests/unit/**/*.spec.{j,t}s?(x)',
  //     ],
  //     env: {
  //       jest: true,
  //     },
  //   },
  // ],
  // extends: [
  //   // 'airbnb',
  //   'prettier',
  // ],
  plugins: ['prettier'],

  // 'extends': [
  //   'plugin:vue/essential',
  //   '@vue/prettier',
  //   // '@vue/typescript'
  // ],
  // parserOptions: {
  //   // parser: 'babel-eslint'
  //   // parser: "@typescript-eslint/parser"
  // }
};
