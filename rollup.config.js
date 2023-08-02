import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import postcssEach from 'postcss-each';
import postcssImport from 'postcss-import';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

// eslint-disable-next-line
const packageJson = require('./package.json');

export default [
    {
        external: ['react', 'react-dom', 'styled-components'],
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                interop: 'compat',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                interop: 'compat',
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({ tsconfig: './tsconfig.json' }),
            terser(),
            // TODO: import from config file
            postcss({
                extract: true,
                minimize: true,
                modules: true,
                plugins: [postcssImport(), postcssEach()],
                sourceMap: true,
            }),
        ],
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/types.d.ts', format: 'es' }],
        plugins: [dts.default()],
    },
];
