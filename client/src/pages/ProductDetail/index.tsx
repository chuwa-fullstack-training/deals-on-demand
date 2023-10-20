import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Ads from '@/components/Ads';
import {
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { RootState } from '@/app/store.ts';

import { WalmartProduct as WalmartType } from '@/types/walmart';
import { AmazonProduct as AmazonType } from '@/types/amazon';

type ProductType = AmazonType | WalmartType | undefined;

// {
//   title: '0',
//       id: '0',
//     desc: '0',
//     originalPrice: '0',
//     currentPrice: '0',
//     image1: '0',
//     image2: '0',
//     image3: '0',
//     image4: '0',
//     image5: '0',
//     image6: '0',
//     clickURL: '0'
// }

// {
//     "wpId": 15321,
//     "Id": "product_9767_774976869",
//     "CatalogId": "9767",
//     "CampaignId": "9383",
//     "CampaignName": "Walmart Affiliate Program",
//     "CatalogItemId": "774976869",
//     "Name": "Mellow MAVN Upholstered Platform Bed  Modern Tufted Headboard  Real Wooden Slats and Legs  Dark Grey  King",
//     "Description": "Mellow s Mavn upholstered platform bed features a modern tufted design and headboard with elegant curves and modern edges. The dark grey fabric headboard is detailed with curves complemented with clean  edged corners and layered with foam for comfort as you lean back and relax. The authentic solid wooden slats provide sturdy  durable support without the need for a separate box spring. The legs are also made with solid wood for stability and a refined modern look. Enjoy quick and easy assembly with a free ratchet and everything you need included in the package  no other tools required. The Mavn platform bed is available in Full  Queen and King sizes and comes with a 5-year manufacturer s warranty.",
//     "Manufacturer": "Mellow",
//     "Url": "https://goto.walmart.com/c/3917115/1285386/9383?prodsku=774976869&u=https%3A%2F%2Fwww.walmart.com%2Fip%2FMellow-MAVN-Upholstered-Platform-Bed-Modern-Tufted-Headboard-Real-Wooden-Slats-and-Legs-Dark-Grey-King%2F774976869&intsrc=APIG_9767",
//     "ImageUrl": "https://i5.walmartimages.com/asr/102b75c2-3163-4499-b9fe-3085b9bb63a2_1.d0cdb4c43f5ac838b6f190f865398bd7.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff",
//     "Currency": "USD",
//     "StockAvailability": "InStock",
//     "Gtin": "00842165126559",
//     "Category": "Home>Furniture>Bedroom Furniture>Beds>Shop all Beds",
//     "SubCategory": "Home Page/Home/Furniture/Bedroom Furniture/Beds/Shop all Beds",
//     "IsParent": "false",
//     "Text2": "Walmart.com",
//     "Uri": "/Mediapartners/IRA4K3ySvbUh3917115tdrHHtKz6Y6tff1/Catalogs/9767/Items/product_9767_774976869",
//     "CurrentPrice": "321.12",
//     "OriginalPrice": "350.00",
//     "DiscountPercentage": "8"
// },
const ProductDetail = () => {
  const location = useLocation();
  const platform = location.pathname.split('/').slice(-2)[0];
  const productId = location.pathname.split('/').slice(-1)[0];
  const amazonState = useSelector((state: RootState) => state.amazonReducer);
  const walmartState = useSelector((state: RootState) => state.walmartReducer);

  const product: ProductType = useMemo(() => {
    if (platform === 'amazon') {
      for (const values of Object.values(amazonState)) {
        const element = values.find(item => item.id === productId);
        if (element !== undefined) return element;
      }
      return undefined;
    } else if (platform === 'walmart') {
      // for (const values1 of Object.values(walmartState)) {
      //   const element1 = values1.find(item => item.Id === productId);
      //   if (element1 !== undefined) return element1;
      // }
      return undefined;
    } else {
      return undefined;
    }
  }, [amazonState, walmartState, productId, platform]);
  useEffect(() => {
    console.log(product);
  }, []);
  const [currentImg, setCurrentImg] = useState(product?.image1);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        width: '100%'
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: '100%', md: 800, lg: 900 },
          height: '100%',
          padding: { xs: '20px 10px', md: '30px' },
          marginTop: '3%',
          marginLeft: '5%'
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: { xs: '100%' },
            height: '100%',
            display: 'flex',
            gap: '20px',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'start' }
          }}
        >
          <Box
            sx={{
              padding: '20px',
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <ImageList cols={1} gap={40} sx={{ height: '100%' }}>
              {[
                product?.image1,
                product?.image2,
                product?.image3,
                product?.image4,
                product?.image5,
                product?.image6
              ].map((item, index) => (
                <ImageListItem key={index}>
                  <img
                    src={item}
                    alt=""
                    loading="lazy"
                    onMouseEnter={() => {
                      if (item !== undefined) setCurrentImg(item);
                    }}
                    style={{
                      width: '90px',
                      height: '40px',
                      objectFit: 'contain'
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          <Box
            component="img"
            sx={{
              marginTop: '50px',
              width: { xs: 200, sm: 200, md: 300 },
              height: { xs: 200, sm: 200, md: 300 }
            }}
            src={currentImg}
          />
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              width: { xs: '100%', md: 400 }
            }}
          >
            <Typography variant={'h6'} sx={{ fontWeight: 600 }}>
              {product?.title}
            </Typography>
            <Typography variant={'subtitle2'}>Amazon</Typography>
            <Divider />
            <Typography variant={'h6'} sx={{ fontWeight: 600 }}>
              ${product?.currentPrice} USD
            </Typography>
            <Divider />
            <Typography variant={'subtitle2'} sx={{ fontWeight: 600 }}>
              About this item
            </Typography>
            <Box
              sx={{
                maxHeight: { xs: '100%', md: '400px' },
                overflow: 'hidden',
                overflowY: 'scroll'
              }}
            >
              <Typography variant={'subtitle2'} sx={{ lineHeight: '2em' }}>
                {product?.desc}
              </Typography>
            </Box>

            <Button variant="contained" sx={{ marginTop: '20px' }}>
              <Typography variant={'subtitle2'}>Buy Now</Typography>
            </Button>
          </Box>
        </Stack>
      </Paper>
      <Ads />
    </Box>
  );
};

export default ProductDetail;
