import React, { useRef } from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import WalmartFurnitureProduct from '@/components/WalmartFurnitureProduct';
import { WalmartProduct as WalmartType } from '@/types/walmart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { scrollTo } from '@/utils';
// import AmazonProduct from "@/components/AmazonProduct";
import useMediaQuery from '@mui/material/useMediaQuery';
const FurnitureProducts = ({ productList }: { productList: WalmartType[] }) => {
  const scrollRef1 = useRef<HTMLElement | null>(null);
  const { breakpoints } = useTheme();
  const mediumSizeMatches = useMediaQuery(breakpoints.up('md'));

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

        <Box
          sx={{
            display: 'flex',
            width: '100%'
          }}
        >
          <Button
            sx={{
              borderRadius: '5px',
              display: { xs: 'none', sm: 'block' }
            }}
            onClick={() =>
              scrollTo(scrollRef1, mediumSizeMatches ? -600 : -300)
            }
          >
            <ArrowBackIosIcon
              sx={{
                color: 'black'
              }}
            />
          </Button>
          <Box
            ref={scrollRef1}
            sx={{
              display: 'flex',
              // flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: { xs: 'start', sm: 'start' },
              width: '100%',
              height: { xs: 220, sm: 220, md: 310 },
              margin: '10px 0',
              overflow: { sm: 'hidden' },
              overflowX: 'scroll',
              scrollBehavior: 'smooth'
            }}
          >
            {productList.map((item, index) => (
              <Box key={index}>
                <WalmartFurnitureProduct item={item} />
              </Box>
            ))}
          </Box>
          <Button
            sx={{ borderRadius: '5px', display: { xs: 'none', sm: 'block' } }}
            onClick={() => scrollTo(scrollRef1, mediumSizeMatches ? 600 : 300)}
          >
            <ArrowForwardIosIcon sx={{ color: 'black' }} />
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default FurnitureProducts;
