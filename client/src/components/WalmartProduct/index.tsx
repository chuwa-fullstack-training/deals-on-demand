// import React from 'react';

import { Box, Button, Paper, styled, Typography } from '@mui/material';

type Props = {
  item: {
    wpId: number;
    Id: string;
    CatalogId: string;
    CampaignId: string;
    CampaignName: string;
    CatalogItemId: string;
    Name: string;
    Description: string;
    Manufacturer: string;
    Url: string;
    ImageUrl: string;
    Currency: string;
    StockAvailability: string;
    Gtin: string;
    Category: string;
    SubCategory: string;
    IsParent: string;
    Text2: string;
    Uri: string;
    CurrentPrice: string;
    OriginalPrice: string;
    DiscountPercentage: string;
  };
};
// type Props = FunitureType;

const CustomHorizontalBox = styled('div', {
  name: 'CustomHorizontalBox',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  margin: '5px 0'
}));
const CustomVerticalBox = styled('div', {
  name: 'product',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start'
}));
const WalmartProduct = (props: Props) => {
  return (
    <Paper sx={{ padding: '15px', margin: '0 10px' }} elevation={3}>
      <CustomVerticalBox sx={{ width: 250 }}>
        <CustomHorizontalBox sx={{ justifyContent: 'center' }}>
          <img style={{ height: 150 }} src={props.item.ImageUrl} alt="" />
        </CustomHorizontalBox>
        <CustomHorizontalBox>
          <Typography sx={{ fontSize: '10px' }}>Walmart</Typography>
        </CustomHorizontalBox>
        <CustomHorizontalBox>
          <Box
            component="div"
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              height: '33px',
              lineHeight: '15px'
            }}
          >
            <Typography sx={{ fontSize: '11px', fontWeight: 600 }}>
              {props.item.Name}
            </Typography>
          </Box>
        </CustomHorizontalBox>

        <CustomHorizontalBox
          style={{
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ display: 'flex', gap: '5px' }}>
            {props.item.OriginalPrice !== props.item.CurrentPrice ? (
              <Typography sx={{ fontSize: '13px', color: 'green' }}>
                ${props.item.CurrentPrice}
              </Typography>
            ) : (
              <></>
            )}
            {props.item.OriginalPrice === '' ? (
              <></>
            ) : (
              <Typography
                sx={{
                  fontSize: '13px',
                  textDecoration: 'line-through'
                }}
              >
                ${props.item.OriginalPrice}
              </Typography>
            )}
          </Box>
          {/*onClick={()=>toProductDetail()}*/}
          <Button sx={{ fontSize: '10px' }}>View Deals</Button>
        </CustomHorizontalBox>
      </CustomVerticalBox>
    </Paper>
  );
};
export default WalmartProduct;
