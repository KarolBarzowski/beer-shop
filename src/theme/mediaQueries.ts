export const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | string) =>
    `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
};
