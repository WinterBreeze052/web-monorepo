import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetTheme from "unocss-preset-theme";
import { myTheme } from "./uno.theme";
import type { Theme } from "unocss/preset-uno";

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetAttributify({
      /* preset options */
    }),
    presetUno(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTheme<Theme>({
      theme: myTheme,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerAttributifyJsx(),
    transformerVariantGroup(),
  ],
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none',
    ],
  ],
  theme: {
    colors: {
      primary: 'rgba(142,27,0,1)',
      second: 'rgba(114,178,238,1)',
    },
    fontSize: {
      micro: ['0.625rem', '1rem'],
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.125rem'],
      base: ['1rem', '1.5rem'],
      md: ['1.125rem', '1.5rem'],
      lg: ['1.25rem', '1.5rem'],
      xl: ['1.375rem', '2rem'],
    },
  },
})
