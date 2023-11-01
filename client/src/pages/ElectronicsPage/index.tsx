import { Box, Stack } from '@mui/material';
import Ads from '@/components/Ads';
import ReusableProducts from '@/pages/ReusableProducts';
import { RootState } from '@/app/store';
import { useSelector } from 'react-redux';

export default function ElectronicsPage() {
  const bestProductList = useSelector(
    (state: RootState) => state.amazonReducer
  );

  return (
    <>
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
              <ReusableProducts
                productList={bestProductList.list1}
                from="headerelectronics"
              />
            </Stack>
          </Stack>
          <Ads />
        </Stack>
      </Box>
    </>
  );
}
