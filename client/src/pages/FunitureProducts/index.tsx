import React from 'react';
import { styled, Typography } from '@mui/material';
import WalmartProduct from '@/components/WalmartProduct';
// import { getDiscountProductsBycatalog } from '@/services/Walmart';
// import { loadFurnitureProducts } from '@/app/reducers/walmartSlice.ts';
import { RootState } from '@/app/store.ts';
import { useSelector } from 'react-redux';
// type walmartType = {
//   wpId: number;
//   Id: string;
//   CatalogId: string;
//   CampaignId: string;
//   CampaignName: string;
//   CatalogItemId: string;
//   Name: string;
//   Description: string;
//   Manufacturer: string;
//   Url: string;
//   ImageUrl: string;
//   Currency: string;
//   StockAvailability: string;
//   Gtin: string;
//   Category: string;
//   SubCategory: string;
//   IsParent: string;
//   Text2: string;
//   Uri: string;
//   CurrentPrice: string;
//   OriginalPrice: string;
//   DiscountPercentage: string;
// };
const CustomHorizontalSection = styled('div', {
  name: 'CustomHorizontalSection',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
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

const FurnitureProducts = () => {
  const furnitureList = useSelector(
    (state: RootState) => state.walmartReducer.furnitureProducts
  );

  return (
    <React.Fragment>
      <CustomVerticalSection>
        <Typography variant="h6" fontWeight={600} sx={{ marginBottom: '10px' }}>
          Best Deals On Electronics
        </Typography>
        <CustomHorizontalSection>
          {furnitureList.map((item, index) => (
            <div key={index}>
              <WalmartProduct item={item} />
            </div>
          ))}
        </CustomHorizontalSection>
      </CustomVerticalSection>
    </React.Fragment>
  );
};
export default FurnitureProducts;
