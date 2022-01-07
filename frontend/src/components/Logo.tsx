import { Box, BoxProps } from '@mui/material';

export default function Logo({ sx }: BoxProps) {
  return <Box component="img" src="/logo512.png" sx={{ width: 40, height: 40, ...sx }} />;
}
