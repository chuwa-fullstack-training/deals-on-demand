import { Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import BestProducts from '@/pages/BestProducts';
import FurnitureProducts from '@/pages/FunitureProducts';
import ExclusiveDeals from '@/pages/ExclusiveDeals';
import Ads from '@/components/Ads';
import Loading from '@/components/Loading';

import {
  useGetWalmartDataQuery,
  useGetWalmartDataByCatalogQuery
} from '@/services/Walmart';
import { RootState } from '@/app/store';

const Home = () => {
  const cIId = '9767';

  const { data, error, isLoading } = useGetWalmartDataQuery(null);
  const {
    data: dataByCatalog,
    error: error2,
    isLoading: isLoading2
  } = useGetWalmartDataByCatalogQuery(cIId);

  const bestProductList = useSelector(
    (state: RootState) => state.amazonReducer
  );

  if (isLoading || isLoading2) return <Loading />;
  if (error || error2) return <div>Something went wrong</div>;

  // console.log(data, dataByCatalog);

  return (
    <>
      <Box sx={{ padding: { xs: '0', md: '1rem' } }}>
        <Stack direction="row" spacing={2}>
          <Stack
            direction="column"
            sx={{ width: { md: 'calc(100% - 300px)', sm: '100%', xs: '100%' } }}
            spacing={3}
          >
            <Stack direction="column">
              <BestProducts productList={bestProductList} />
            </Stack>
            <Stack direction="column">
              <FurnitureProducts productList={dataByCatalog} />
            </Stack>
            <Stack direction="column">
              {/*<Section title="Exclusive Deals" productPropsList={testList} />*/}
              <ExclusiveDeals productList={data} />
            </Stack>
          </Stack>
          <Ads />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
