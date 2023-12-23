import { fontFace } from 'polished';

export const fonts = {
  ...fontFace({
    fontFamily: 'Better Vinegar Demo',
    // 'assets/fonts/BetterVinegar-Regular.otfBetterVinegar-Regular.otf',
    fontFilePath: 'assets/fonts/BetterVinegar-Regular',
    fontWeight: 'regular',
    fontDisplay: 'fallback',
    fileFormats: ['otf']
  }),
  ...fontFace({
    fontFamily: 'Open-Sans',
    fontFilePath: 'assets/fonts/OpenSans-Regular',
    fontWeight: 'regular',
    fontDisplay: 'fallback',
    fileFormats: ['ttf']
  }),
  ...fontFace({
    fontFamily: 'Helvetica Neue',
    fontFilePath: 'assets/fonts/Light',
    fontWeight: 'light',
    fontDisplay: 'fallback',
    fileFormats: ['ttf']
  }),
};


