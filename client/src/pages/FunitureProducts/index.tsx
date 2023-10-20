import React, { useRef } from 'react';
import { Box, Button, Typography } from '@mui/material';
import WalmartProduct from '@/components/WalmartProduct';
import { WalmartProduct as WalmartType } from '@/types/walmart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

const FurnitureProducts = ({ productList }: { productList: WalmartType[] }) => {
  const scrollRef1 = useRef(null);
  // const scroll = (
  //   scrollRef: React.MutableRefObject<null>,
  //   scrollOffset: number
  // ) => {
  // if (scrollRef.current !== null) {
  //   scrollRef.current.scrollLeft += scrollOffset;
  // }
  // };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: { xs: 'center', sm: 'start' }
        }}
      >
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ marginBottom: '10px', marginLeft: '20px' }}
        >
          Exclusive Deals On Funitures
        </Typography>
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Button
            sx={{ borderRadius: '5px' }}
            // onClick={() => scroll(scrollRef1, -600)}
          >
            <ArrowBackIosIcon />
          </Button>
          <Box
            ref={scrollRef1}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'start',
              height: '310px',
              margin: '10px 0',
              overflow: 'hidden',
              overflowX: 'scroll',
              scrollBehavior: 'smooth'
            }}
          >
            {productList.map((item, index) => (
              <div key={index}>
                <WalmartProduct item={item} />
              </div>
            ))}
          </Box>
          <Button
            sx={{ borderRadius: '5px' }}
            // onClick={() => scroll(scrollRef1, 600)}
          >
            <ArrowForwardIosIcon />
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default FurnitureProducts;
