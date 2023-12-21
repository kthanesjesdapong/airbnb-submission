import { fontFace } from 'polished';

export const fonts = {
  ...fontFace({
    fontFamily: 'Better Vinegar Demo',
    fontFilePath: 'assets/fonts/BetterVinegar-Regular.otfBetterVinegar-Regular.otf',
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
  })
};