import { createTheme, PaletteMode } from "@mui/material";

// Define custom color palettes for both modes
const lightPalette = {
  background: {
    default: '#ffffff', // White body background
    paper: '#f5f5f5',    // Light gray card/paper background
  },
  text: {
    primary: '#171717',
    secondary: '#4a4a4a',
  },
  primary: {
    main: '#1a73e8', // Your primary blue
  },
};

const darkPalette = {
  background: {
    default: '#0a0a0a', // Deep black body background
    paper: '#1a1a1a',    // Darker gray card/paper background (for elevation)
  },
  text: {
    primary: '#ededed', // Bright foreground text for high contrast
    secondary: '#cccccc',
  },
  primary: {
    main: '#4a90e2', // Your primary blue, adjusted for dark background
  },
};

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? lightPalette : darkPalette),
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
      h4: {
        fontWeight: 700,
        fontSize: '2rem',
        // Example fix for the partial headline visibility on mobile
        '@media (max-width: 600px)': {
          fontSize: '1.5rem',
        },
      },
      // Ensure all typography uses the theme's colors
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          // This ensures MUI respects the CSS variables for scroll behavior
          'html, body': {
            scrollBehavior: 'smooth',
          },
        },
      },
    },
  });
