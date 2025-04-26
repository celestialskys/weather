import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function ErrorBox(props) {
  return (
    <Box
      display={props.display || 'flex'}
      justifyContent={props.justifyContent || 'center'}
      alignItems={props.alignItems || 'center'}
      margin={props.margin || '1rem auto'}
      gap={props.gap || '8px'}
      flex={props.flex || 'auto'}
      width={props.width || 'auto'}
    >
    <i class="bi bi-exclamation-circle"></i>

      <Typography
        variant="h2"
        component="h2"
      >
        {props.errorMessage || 'Internal error'}
      </Typography>
    </Box>
  );
}