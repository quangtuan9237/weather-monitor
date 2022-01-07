// ----------------------------------------------------------------------

declare module '@mui/material/styles' {
  interface Theme {
    shape: {
      borderRadiusSm: number;
      borderRadiusMd: number;
    };
  }
}

const shape = {
  borderRadius: 8,
  borderRadiusSm: 12,
  borderRadiusMd: 16,
};

export default shape;
