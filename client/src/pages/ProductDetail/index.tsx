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
  Link,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import { RootState } from '@/app/store.ts';

import { isAmazon, isWalmart } from '@/utils/checkProductType.ts';
import { ProductType } from '@/types/product';
import { WalmartProduct as WalmartType } from '@/types/walmart';
import { AmazonProduct as AmazonType } from '@/types/amazon';
import {
  useGetWalmartDataByCatalogQuery,
  useGetWalmartDataQuery
} from '@/services/Walmart';
import Loading from '@/components/Loading';

const ProductDetail = () => {
  const location = useLocation();
  const platform = location.pathname.split('/').slice(-2)[0];
  const productId = location.pathname.split('/').slice(-1)[0];
  const amazonState = useSelector((state: RootState) => state.amazonReducer);
  // const walmartState = useSelector((state: RootState) => state.walmartReducer);

  const cIId = '9767';

  const { data, error, isLoading } = useGetWalmartDataQuery(null);
  const {
    data: dataByCatalog,
    error: error2,
    isLoading: isLoading2
  } = useGetWalmartDataByCatalogQuery(cIId);
  const searchedProducts = useSelector(
    (state: RootState) => state.walmartReducer.searchedProducts
  );
  const walmartState = useMemo(() => {
    return {
      furnitureProducts: data,
      exclusiveDeals: dataByCatalog,
      searchProducts: searchedProducts
    };
  }, [data, dataByCatalog, searchedProducts]);

  const product: ProductType = useMemo(() => {
    if (platform === 'amazon') {
      for (const values of Object.values(amazonState)) {
        const element = values.find(
          (item: AmazonType) => item.id === productId
        );
        if (element !== undefined) return element;
      }
      return null;
    } else if (platform === 'walmart') {
      for (const values of Object.values(walmartState)) {
        if (values === undefined) break;
        const element = values.find(
          (item: WalmartType) => item.Id === productId
        );
        if (element !== undefined) return element;
      }
      return {
        wpId: 15321,
        Id: 'product_9767_774976869',
        CatalogId: '9767',
        CampaignId: '9383',
        CampaignName: 'Walmart Affiliate Program',
        CatalogItemId: '774976869',
        Name: 'Need backend api search',
        Description: 'Need data',
        Manufacturer: 'Need data',
        Url: 'https://goto.walmart.com/c/3917115/1285386/9383?prodsku=774976869&u=https%3A%2F%2Fwww.walmart.com%2Fip%2FMellow-MAVN-Upholstered-Platform-Bed-Modern-Tufted-Headboard-Real-Wooden-Slats-and-Legs-Dark-Grey-King%2F774976869&intsrc=APIG_9767',
        ImageUrl:
          'https://i5.walmartimages.com/asr/102b75c2-3163-4499-b9fe-3085b9bb63a2_1.d0cdb4c43f5ac838b6f190f865398bd7.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff',
        Currency: 'USD',
        StockAvailability: 'InStock',
        Gtin: '00842165126559',
        Category: 'Home>Furniture>Bedroom Furniture>Beds>Shop all Beds',
        SubCategory:
          'Home Page/Home/Furniture/Bedroom Furniture/Beds/Shop all Beds',
        IsParent: 'false',
        Text2: 'Walmart.com',
        Uri: '/Mediapartners/IRA4K3ySvbUh3917115tdrHHtKz6Y6tff1/Catalogs/9767/Items/product_9767_774976869',
        CurrentPrice: 'Need data',
        OriginalPrice: 'Need data',
        DiscountPercentage: '8'
      };
    } else {
      return null;
    }
  }, [amazonState, walmartState, productId, platform]);

  useEffect(() => {
    // document.location = '#';
  }, []);

  const [currentImg, setCurrentImg] = useState(() => {
    if (isAmazon(product)) {
      return product.image1;
    } else if (isWalmart(product)) {
      return product.ImageUrl;
    } else {
      return '';
    }
  });

  const productImageList = useMemo(() => {
    if (isAmazon(product)) {
      return [
        product?.image1,
        product?.image2,
        product?.image3,
        product?.image4,
        product?.image5,
        product?.image6
      ];
    } else if (isWalmart(product)) {
      return [product?.ImageUrl];
    } else {
      return [];
    }
  }, [product]);

  const toOriginalWebsite = () => {
    if (isAmazon(product)) {
      return product.clickURL;
    } else if (isWalmart(product)) {
      return product.Url;
    } else {
      return '';
    }
  };

  if (isLoading || isLoading2) return <Loading />;
  if (error || error2) return <div>Something went wrong</div>;

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
        sx={{
          width: { xs: '100%', md: 800, lg: 900 },
          height: '100%',
          padding: { xs: '20px 10px', md: '30px' },
          marginTop: '3%',
          marginLeft: { md: '5%' },
          boxShadow: {
            xs: 'none',
            md: '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)'
          }
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: { xs: '100%' },
            height: '100%',
            display: 'flex',
            gap: '30px',
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
              {productImageList.map((item, index) => (
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
              {isAmazon(product)
                ? product?.title
                : isWalmart(product)
                ? product?.Name
                : ''}
            </Typography>
            <Typography variant={'subtitle2'}>Amazon</Typography>
            <Divider />
            <Typography variant={'h6'} sx={{ fontWeight: 600 }}>
              $
              {isAmazon(product)
                ? product?.currentPrice
                : isWalmart(product)
                ? product?.CurrentPrice
                : ''}
              {' USD'}
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
                {isAmazon(product)
                  ? product?.desc
                  : isWalmart(product)
                  ? product?.Description
                  : ''}
              </Typography>
            </Box>

            <Button
              LinkComponent={Link}
              href={toOriginalWebsite()}
              target="_blank"
              variant="contained"
              sx={{ marginTop: '20px' }}
            >
              Buy Now
            </Button>
          </Box>
        </Stack>
      </Paper>
      <Ads />
    </Box>
  );
};

export default ProductDetail;
