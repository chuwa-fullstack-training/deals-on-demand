import { useLocation } from 'react-router-dom';
import Ads from '@/components/Ads';
import {
  Box,
  Button,
  Divider,
  ImageList,
  ImageListItem,
  Paper,
  Stack
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store.ts';
import { useEffect, useMemo, useState } from 'react';

//amazon
type amazonType = {
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
//walmart
type walmartType = {
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
//   wpId: 0,
//       Id: '0',
//     CatalogId: '0',
//     CampaignId: '0',
//     CampaignName: '0',
//     CatalogItemId: '0',
//     Name: '0',
//     Description: '0',
//     Manufacturer: '0',
//     Url: '0',
//     ImageUrl: '0',
//     Currency: '0',
//     StockAvailability: '0',
//     Gtin: '0',
//     Category: '0',
//     SubCategory: '0',
//     IsParent: '0',
//     Text2: '0',
//     Uri: '0',
//     CurrentPrice: '0',
//     OriginalPrice: '0',
//     DiscountPercentage: '0'
// }

type productType = amazonType | walmartType | undefined;
const ProductDetail = () => {
  const location = useLocation();
  const platform = location.pathname.split('/').slice(-2)[0];
  const productId = location.pathname.split('/').slice(-1)[0];
  const amazonState = useSelector((state: RootState) => state.amazonReducer);
  const walmartState = useSelector((state: RootState) => state.walmartReducer);

  const product: productType = useMemo(() => {
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
    <>
      <Box sx={{ display: 'flex', gap: 5, padding: '30px 5%' }}>
        <Paper elevation={3} sx={{ width: '100%', height: '700px' }}>
          <Stack
            direction="row"
            sx={{ width: '100%', height: '100%', display: 'flex', gap: '20px' }}
          >
            <Box
              style={{
                border: '1px solid red',
                padding: '20px'
              }}
            >
              <ImageList cols={1}>
                {[
                  product?.image1,
                  product?.image2,
                  product?.image3,
                  product?.image4,
                  product?.image5,
                  product?.image6
                ].map((item, index) => (
                  <ImageListItem key={index} style={{ width: '100px' }}>
                    <img
                      src={item}
                      alt=""
                      loading="lazy"
                      onMouseEnter={() => {
                        if (item !== undefined) setCurrentImg(item);
                      }}
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
            <Box
              style={{
                border: '1px solid red',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px'
              }}
            >
              <img src={currentImg} alt="" style={{ width: '300px' }} />
            </Box>
            <Box style={{ border: '1px solid red', height: '100%' }}>
              {product?.title}
              amazon <Divider />
              {product?.currentPrice} USD
              <Divider />
              About this item
              {product?.desc}
              <Divider />
              <Button>Buy Now</Button>
            </Box>
          </Stack>
        </Paper>
        <Ads />
      </Box>
    </>
  ); // title: 'Apple iPhone 13 (128GB, Blue) [Locked] + Carrier Subscription',
  //     id: '1',
  //     desc: '6.1-inch Super Retina XDR display, Cinematic mode adds shallow depth of field and shifts focus automatically in your videos,Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording,12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording,A15 Bionic chip for lightning-fast performance,Up to 19 hours of video playback,Durable design with Ceramic Shield,Industry-leading IP68 water resistance,5G capable,iOS 15 packs new features to do more with iPhone than ever before.',
  //     originalPrice: '',
  //     currentPrice: ' NA',
  //     image1: 'https://m.media-amazon.com/images/I/71xb2xkN5qL._FMwebp__.jpg',
  //     image2: 'https://m.media-amazon.com/images/I/61d8XHJuE2L._FMwebp__.jpg',
  //     image3: 'https://m.media-amazon.com/images/I/81junVbiuyL._FMwebp__.jpg',
  //     image4: 'https://m.media-amazon.com/images/I/817WqZsxjWL._FMwebp__.jpg',
  //     image5: 'https://m.media-amazon.com/images/I/8124IUirb7L._FMwebp__.jpg',
  //     image6: 'https://m.media-amazon.com/images/I/61wIVtrz54L._FMwebp__.jpg',
  //     clickURL:
  // 'https://www.amazon.com/Apple-iPhone-Locked-Carrier-Subscription/dp/B09G9F5RH5/ref=sr_1_1_sspa?crid=5UG1Z78RM1YX&amp;keywords=apple+iphone&amp;qid=1694364975&amp;sprefix=apple+ip%25252Caps%25252C147&amp;sr=8-1-spons&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;psc=1&amp;_encoding=UTF8&amp;tag=ryzlink02-20&amp;linkCode=ur2&amp;linkId=e088f94e170c5ea5580b55099b510d99&amp;camp=1789&amp;creative=9325&_encoding=UTF8&tag=ryzlink02-20&linkCode=ur2&linkId=2de98194db2f7c10009905cd9585643e&camp=1789&creative=9325'
};

export default ProductDetail;
