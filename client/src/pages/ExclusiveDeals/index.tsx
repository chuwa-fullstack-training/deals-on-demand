import React from 'react';
import { styled, Typography } from '@mui/material';
import WalmartProduct from '@/components/WalmartProduct';
import { WalmartProduct as WalmartType } from '@/types/walmart';

const ExclusiveHorizontalSection = styled('div', {
  name: 'ExclusiveHorizontalSection',
  slot: 'root'
})(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'start',
  height: '310px',
  margin: '10px 0',
  gap: '20px'
}));
const ExclusiveVerticalSection = styled('div', {
  name: 'product',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start'
}));
const ExclusiveDeals = ({ productList }: { productList: WalmartType[] }) => {
  return (
    <React.Fragment>
      <ExclusiveVerticalSection>
        <Typography variant="h6" fontWeight={600} sx={{ marginBottom: '10px' }}>
          Exclusive Deals On Furnitures
        </Typography>
        <ExclusiveHorizontalSection>
          {productList.map((item, index) => (
            <div key={index}>
              <WalmartProduct item={item} />
            </div>
          ))}
        </ExclusiveHorizontalSection>
      </ExclusiveVerticalSection>
    </React.Fragment>
  );
};
export default ExclusiveDeals;
