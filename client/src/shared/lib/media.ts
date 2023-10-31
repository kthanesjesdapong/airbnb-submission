const customMedia = (minWidth: number) => `@media (min-width: ${minWidth}px)`;

export const media = {
  custom: customMedia,
  uhd: customMedia(1980),
  widescreen: customMedia(1366),
  desktop: customMedia(1024),
  tablet: customMedia(768),

};

//Ex:
/*
${media.desktop`
  styling goes here
`}
*/

