'use strict';

const commonjs = require('rollup-plugin-commonjs');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');

module.exports = {
  entry: 'src/index.js',
  format: 'iife',
  moduleName: 'CarbonAddonsBluemix',
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**',
      sourceMap: true,
    }),
    babel({
      exclude: ['node_modules/**'], // only transpile our source code
    }),
  ],
  dest: 'scripts/carbon-addons-bluemix.js',
};
