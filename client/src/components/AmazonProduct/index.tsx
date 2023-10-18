// import React from 'react';

import { Box, Button, Paper, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

type Props = {
  item: {
    title: string;
    id: string;
    desc: string;
    originalPrice: string;
    currentPrice: string;
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    image5: string;
    image6: string;
    clickURL: string;
  };
};

const AmazonHorizontalSection = styled('div', {
  name: 'AmazonHorizontalSection',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  margin: '5px 0'
}));
const AmazonVerticalSection = styled('div', {
  name: 'product',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start'
}));

const AmazonProduct = (props: Props) => {
  // useEffect(() => {}, []);
  const navigate = useNavigate();
  const toDetails = () => {
    navigate('/product/amazon/' + props.item.id);
  };
  return (
    <Paper sx={{ padding: '15px', margin: '0 10px' }} elevation={3}>
      <AmazonVerticalSection sx={{ width: 250 }}>
        <AmazonHorizontalSection sx={{ justifyContent: 'center' }}>
          <img
            style={{ height: 150 }}
            src={
              props.item.image1.startsWith('../')
                ? 'https://avatars.githubusercontent.com/u/583231?v=4'
                : props.item.image1
            }
            alt=""
          />
        </AmazonHorizontalSection>
        <AmazonHorizontalSection>
          <Typography sx={{ fontSize: '10px' }}>amazon</Typography>
        </AmazonHorizontalSection>
        <AmazonHorizontalSection>
          <Box
            component="div"
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: '100%',
              height: '33px',
              lineHeight: '15px'
            }}
          >
            <Typography sx={{ fontSize: '11px', fontWeight: 600 }}>
              {props.item.title}
            </Typography>
          </Box>
        </AmazonHorizontalSection>

        <AmazonHorizontalSection
          style={{
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ display: 'flex', gap: '5px' }}>
            {props.item.originalPrice !== props.item.currentPrice ? (
              <Typography sx={{ fontSize: '13px', color: 'green' }}>
                ${props.item.currentPrice}
              </Typography>
            ) : (
              <></>
            )}
            {props.item.originalPrice === '' ? (
              <></>
            ) : (
              <Typography
                sx={{
                  fontSize: '13px',
                  textDecoration: 'line-through'
                }}
              >
                ${props.item.originalPrice}
              </Typography>
            )}
          </Box>
          <Button onClick={toDetails} sx={{ fontSize: '10px' }}>
            View Deals
          </Button>
        </AmazonHorizontalSection>
      </AmazonVerticalSection>
    </Paper>
  );
};
export default AmazonProduct;
