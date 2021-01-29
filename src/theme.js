import { Platform } from 'react-native';

const theme = {
  colors: {
    mainBackground: '#e1e4e8',
    appBar: '#24292e',
    appBarText: 'white',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    error: '#d73a4a',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
    appBarTab: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),

  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },

};

export default theme;