import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

export type AppSnackbarsOptions = {
  message: string;
} & AlertProps;

type AppSnackbarsProps = {
  isOpen?: boolean;
} & AppSnackbarsOptions;

export function AppSnackbars(props: AppSnackbarsProps) {
  const { message, isOpen = false, severity, ...rest } = props;
  const [open, setOpen] = React.useState(isOpen);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        TransitionComponent={TransitionDown}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }} {...rest}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
