import { defineConfig } from 'vite';
import { stylifyVite } from '@stylify/unplugin';

// https://stylifycss.com/docs/unplugin
const stylifyPlugin = stylifyVite({
  bundles: [
    {
      files: ['./*'],
      outputFile: './sdtylify.css',
      rewriteSelectorsInFiles: false,
    },
  ],
  // Optional - https://stylifycss.com/docs/unplugin
  compiler: {
    // https://stylifycss.com/docs/stylify/compiler#variables
    variables: {},
    // https://stylifycss.com/docs/stylify/compiler#macros
    macros: {},
    // https://stylifycss.com/docs/stylify/compiler#components
    components: {},
  },
});

export default defineConfig(({ mode }) => ({
  plugins: [stylifyPlugin],
}));
