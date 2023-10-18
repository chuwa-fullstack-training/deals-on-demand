import React from 'react';
import { styled, Typography } from '@mui/material';
import AmazonProduct from '@/components/AmazonProduct';
import { AmazonProduct as ProductType } from '@/types/amazon';

type ProductListType = {
  list1: ProductType[];
  list2: ProductType[];
};

const CustomHorizontalSection = styled('div', {
  name: 'CustomHorizontalSection',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  width: '100%',
  height: '310px',
  margin: '10px 0',
  overflow: 'hidden',
  overflowX: 'scroll'
}));
const CustomVerticalSection = styled('div', {
  name: 'product',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start'
}));
const BestProducts = ({ productList }: { productList: ProductListType }) => {
  // const BestProducts = useSelector((state: RootState) => state.amazonReducer);
  return (
    <React.Fragment>
      <CustomVerticalSection>
        <Typography variant="h6" fontWeight={600} sx={{ marginBottom: '10px' }}>
          Best Deals On Electronics
        </Typography>
        <CustomHorizontalSection>
          {productList.list1.map((item, index) => (
            <div key={index}>
              <AmazonProduct item={item} />
            </div>
          ))}
        </CustomHorizontalSection>
        <CustomHorizontalSection>
          {productList.list2.map((item, index) => (
            <div key={index}>
              <AmazonProduct item={item} />
            </div>
          ))}
        </CustomHorizontalSection>
      </CustomVerticalSection>
    </React.Fragment>
  );
};
export default BestProducts;
