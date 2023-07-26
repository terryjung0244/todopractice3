import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const useMediaQueryFuncForDownSm = (
  size: number | Breakpoint = 'sm',
) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(size)); // below at 600px
};

export const useMediaQueryForUpMd = (size: number | Breakpoint = 'md') => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(size));
};
