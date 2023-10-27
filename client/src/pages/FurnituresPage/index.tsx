import { Box, Stack } from '@mui/material';
import ReusableWalmartProducts from '@/pages/ReusableWalmartProducts';
import Ads from '@/components/Ads';
import Loading from '@/components/Loading';
import {
  useGetWalmartDataQuery,
  useGetWalmartDataByCatalogQuery
} from '@/services/Walmart';

export default function FurnituresPage() {
  const cIId = '9767';

  const { data, isLoading } = useGetWalmartDataQuery(null);
  const {
    data: dataByCatalog,
    error: error2,
    isLoading: isLoading2
  } = useGetWalmartDataByCatalogQuery(cIId);

  if (isLoading || isLoading2) return <Loading />;

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
              <ReusableWalmartProducts productList={dataByCatalog} from="headerfurnitures" />
            </Stack>
          </Stack>
          <Ads />
        </Stack>
      </Box>
    </>
  );
}