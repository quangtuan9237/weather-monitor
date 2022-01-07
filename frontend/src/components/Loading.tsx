import { CircularProgress, styled } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      alignItems: 'center',
      '& > * + *': {
        margin: 'auto',
      },
    },
    center: {
      display: 'flex',
      height: '60px',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      '& > * + *': {
        margin: 'auto',
      },
    },
    here: {
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      '& > * + *': {
        margin: 'auto',
      },
    },
  })
);

type LoadingProps = {
  type: 'root' | 'center' | 'here';
  color?: string;
};

export function Loading({ type, color }: LoadingProps) {
  const classes = useStyles();

  return (
    <div className={classes[type]}>
      <CircularProgress sx={{ color: color || 'primary' }} />
    </div>
  );
}
