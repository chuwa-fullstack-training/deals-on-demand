// import React from 'react';

import { Box, Button, Paper, styled, Typography } from '@mui/material';

type Props = {
  name: string;
  desp: string;
  price: number;
};

const CustomHorizontalBox = styled('div', {
  name: 'CustomHorizontalBox',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start'
}));
const CustomVerticalBox = styled('div', {
  name: 'product',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start'
}));
const Product = (props: Props) => {
  return (
    <Paper sx={{ padding: '15px' }} elevation={3}>
      <CustomVerticalBox sx={{ width: 330 }}>
        <Box>
          <img
            style={{ height: '230px' }}
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt=""
          />
        </Box>
        <CustomHorizontalBox>
          <Typography variant="subtitle2">amazon</Typography>
        </CustomHorizontalBox>
        <CustomHorizontalBox>
          <Typography variant="h6">{props.name}</Typography>
        </CustomHorizontalBox>

        <CustomHorizontalBox
          style={{
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="h6">${props.price}</Typography>
          <Button>View Deals</Button>
        </CustomHorizontalBox>
      </CustomVerticalBox>
    </Paper>
  );
};
export default Product;
