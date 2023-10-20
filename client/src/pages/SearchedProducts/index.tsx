import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductsBySearch } from '@/services/Walmart';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '@/app/reducers/walmartSlice';
import { RootState } from '@/app/store.ts';
import Section3 from '@/pages/Section3';
import { WalmartProduct } from '@/types/walmart';
import Ads from '@/components/Ads';
import { Box, Stack } from '@mui/material';

// interface Product {
//   Id: string;
//   Name: string;
// }

const SearchedProducts: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const params = new URLSearchParams(location.search);
  const query = params.get('item') || '';
  const searchedProducts = useSelector(
    (state: RootState) => state.walmartReducer.searchedProducts
  ) as WalmartProduct[];
  console.log(searchedProducts);

  useEffect(() => {
    (async () => {
      const searchedProducts = await getProductsBySearch(query);
      dispatch(searchProducts({ searchedProducts: searchedProducts }));
    })();
  }, [query]);

  return (
    <>
      {searchedProducts.length !== 0 && (
        <Box sx={{ padding: { xs: '0', md: '1rem' } }}>
          <Stack direction="row" spacing={2}>
            <Stack
              direction="column"
              sx={{
                width: { md: 'calc(100% - 300px)', sm: '100%', xs: '100%' }
              }}
              spacing={3}
            >
              <Stack direction="column">
                <Section3 productList={searchedProducts} from="search" />
              </Stack>
            </Stack>
            <Ads />
          </Stack>
        </Box>
      )}
    </>
  );
};

export default SearchedProducts;
