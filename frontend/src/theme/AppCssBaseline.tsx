import CssBaseline from '@mui/material/CssBaseline';
import { withStyles } from '@mui/styles';

const styles = () => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '5px',
      height: '5px',
    },
    '*::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '*::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '40px',
    },
    '*::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
    '*:-webkit-any-link': {
      textDecoration: 'none',
    },
  },
});

// export const AppCssBaseline = CssBaseline;
export const AppCssBaseline = withStyles(styles, { name: 'app-custom-style' })(CssBaseline);
