type Colors = {
  main: string;
  light: string;
  action: string;
  accentLight: string;
  accentDark: string;
};

type Paddings = {
  mobile: string;
  web: string;
};

type StyleVariables = {
  fontFamily: string;
  mediaBreakpoint: string;
  colors: Colors;
  paddings: Paddings;
};

export { type StyleVariables };
