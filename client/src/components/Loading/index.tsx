import { Box, CircularProgress } from '@mui/material';

const Loading = () => {
  return (
    <Box
      style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        zIndex: '10',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
