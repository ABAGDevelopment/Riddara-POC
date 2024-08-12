// styles/theme.ts
import { createTheme } from '@nextui-org/react';

export const customTheme = createTheme({
  type: 'light', // or 'dark'
  theme: {
    colors: {
      primary: '#0070f3', // Custom primary color
      // Add more custom colors
    },
    // Add more customizations here
  },
});
