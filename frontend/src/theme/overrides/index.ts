import { Theme } from '@mui/material';
import { merge } from 'lodash-es';

import Autocomplete from './Autocomplete';
import Backdrop from './Backdrop';
import Button from './Button';
import Card from './Card';
import IconButton from './IconButton';
import Input from './Input';
import Lists from './Lists';
import Paper from './Paper';
import Tooltip from './Tooltip';
import Typography from './Typography';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    theme.components,
    Card(theme),
    Lists(theme),
    Paper(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme)
  );
}
