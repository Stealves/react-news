import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container);

const colors = {
  primary: "#4D4741",
  secondary: "#D6CCC2",
  customLight: '#EDEDE9',
  customMain: '#F5EBE0',
};

const inputGlobalStyles = <GlobalStyles styles={{ body: { backgroundColor: colors.secondary } }} />;

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    custom: {
      light: colors.customLight,
      main: colors.customMain,
    }
  },
  components: {
    MuiCard: {
      variants: [
        {
          props: { variant: 'featured' },
          style: {
            display: 'flex',
            alignItems:'stretch',
            border: `3px solid ${colors.primary}`,
            borderRadius: '25px',
            backgroundColor: 'white',
          },
        },
        {
          props: { variant: 'article' },
          style: {
            display: 'grid',
            gridTemplateRows: 'max-content auto',
            height: '100%',
            border: `3px solid ${colors.primary}`,
            borderRadius: '25px',
            backgroundColor: 'white',
          },
        },
        {
          props: { variant: 'detail' },
          style: {
            border: `3px solid ${colors.primary}`,
            borderRadius: '25px',
            backgroundColor: 'white',
          },
        },
      ],
    },
    MuiDivider: {
      variants: [
        {
          props: { variant: 'nav', orientation:"vertical" },
          style: {
            border: `1.5px solid ${colors.primary}`,
            borderRadius: '99px',
          },
        },
      ],
    },
    MuiTypography: {
      defaultProps: {
        sx: ({
          color: 'primary.main'
        }),
      }
    },
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {inputGlobalStyles}
          <App />
        </ThemeProvider>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
