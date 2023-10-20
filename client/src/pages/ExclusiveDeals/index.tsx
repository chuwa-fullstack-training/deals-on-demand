import React from 'react';
import { Box, Typography } from '@mui/material';
import WalmartProduct from '@/components/WalmartProduct';
import { WalmartProduct as WalmartType } from '@/types/walmart';

const ExclusiveDeals = ({ productList }: { productList: WalmartType[] }) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'start',
          alignItem: { xs: 'center', sm: 'center' },
          marginLeft: { xs: '0', sm: '20px' }
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            marginBottom: '10px',
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'start' }
          }}
        >
          Exclusive Deals
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: { xs: 'center', sm: 'start' },
            height: '310px',
            margin: { xs: '0 0 0 0', md: '10px 0 0 40px' },
            gap: '20px'
          }}
        >
          {productList.map((item, index) => (
            <div key={index}>
              <WalmartProduct item={item} />
            </div>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default ExclusiveDeals;
