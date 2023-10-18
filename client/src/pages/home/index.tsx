import { Box, Stack } from '@mui/material';
import BestProducts from '@/pages/BestProducts';
import FurnitureProducts from '@/pages/FunitureProducts';
import ExclusiveDeals from '@/pages/ExclusiveDeals';
import Ads from '@/components/Ads';
import {
  getDiscountProducts,
  getDiscountProductsBycatalog
} from '@/services/Walmart';
import {
  loadExclusiveDeals,
  loadFurnitureProducts
} from '@/app/reducers/walmartSlice.ts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import Loading from '@/components/Loading';

const Home = () => {
  const cIId = '9767';
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const data1 = await getDiscountProductsBycatalog(cIId);

      dispatch(loadFurnitureProducts({ furnitureProducts: data1 }));

      const data2 = await getDiscountProducts();
      dispatch(loadExclusiveDeals({ exclusiveDeals: data2 }));
    })();
  }, []);
  return (
    <>
      <Box sx={{ padding: '30px 5%' }}>
        <Stack direction="row" spacing={2}>
          {/* Products */}
          <Stack
            direction="column"
            sx={{ width: { md: 'calc(100% - 300px)', sm: '100%' } }}
            spacing={3}
          >
            <Stack direction="column">
              <BestProducts />
            </Stack>
            <Stack direction="column">
              <FurnitureProducts />
            </Stack>
            <Stack direction="column">
              {/*<Section title="Exclusive Deals" productPropsList={testList} />*/}
              <ExclusiveDeals />
            </Stack>
          </Stack>

          {/* Ads */}
          <Ads />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
