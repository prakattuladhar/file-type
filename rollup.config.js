import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [nodeResolve()]
};