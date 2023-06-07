/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('postcss-load-config').Config} */

const postcssEach = require('postcss-each');
const postcssImport = require('postcss-import');

const config = {
    extract: true,
    minimize: true,
    modules: true,
    plugins: [postcssImport(), postcssEach()],
    sourceMap: true,
};

module.exports = config;
