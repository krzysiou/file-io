type Colors = {
  main: string;
  light: string;
  action: string;
  accentLight: string;
  accentLighter: string;
  accentDark: string;
  error: string;
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

const styleVariables: StyleVariables = {
  fontFamily:
    'Brandon Text, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
  mediaBreakpoint: '641px',
  colors: {
    main: '#4f5d75',
    light: '#ffffff',
    action: '#ef8354',
    accentLight: '#bfc0c0',
    accentLighter: '#e8e8e8',
    accentDark: '#2d3142',
    error: '#d11f1f',
  },
  paddings: {
    mobile: '80px 0 0',
    web: '120px 0 0',
  },
};

export { styleVariables };
