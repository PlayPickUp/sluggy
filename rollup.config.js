import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'Sluggy',
  },
  plugins: [
    resolve(),
    commonjs(),
    json(),
    url(),
    typescript({ tsconfig: './tsconfig.json', sourceMap: true }),
  ],
  external: ['react', 'react-dom', 'prop-types'],
};
