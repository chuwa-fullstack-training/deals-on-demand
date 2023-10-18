import { Box, Button, Paper, styled, Typography } from '@mui/material';
import { WalmartProduct as ItemType } from '@/types/walmart';

const CustomHorizontalBox = styled('div', {
  name: 'CustomHorizontalBox',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  margin: '5px 0'
}));
const CustomVerticalBox = styled('div', {
  name: 'product',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start'
}));
const WalmartProduct = ({ item }: { item: ItemType }) => {
  return (
    <Paper sx={{ padding: '15px', margin: '0 10px' }} elevation={3}>
      <CustomVerticalBox sx={{ width: 250 }}>
        <CustomHorizontalBox sx={{ justifyContent: 'center' }}>
          <img style={{ height: 150 }} src={item.ImageUrl} alt="" />
        </CustomHorizontalBox>
        <CustomHorizontalBox>
          <Typography sx={{ fontSize: '10px' }}>Walmart</Typography>
        </CustomHorizontalBox>
        <CustomHorizontalBox>
          <Box
            component="div"
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              height: '33px',
              lineHeight: '15px'
            }}
          >
            <Typography sx={{ fontSize: '11px', fontWeight: 600 }}>
              {item.Name}
            </Typography>
          </Box>
        </CustomHorizontalBox>

        <CustomHorizontalBox
          style={{
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ display: 'flex', gap: '5px' }}>
            {item.OriginalPrice !== item.CurrentPrice ? (
              <Typography sx={{ fontSize: '13px', color: 'green' }}>
                ${item.CurrentPrice}
              </Typography>
            ) : (
              <></>
            )}
            {item.OriginalPrice === '' ? (
              <></>
            ) : (
              <Typography
                sx={{
                  fontSize: '13px',
                  textDecoration: 'line-through'
                }}
              >
                ${item.OriginalPrice}
              </Typography>
            )}
          </Box>
          {/*onClick={()=>toProductDetail()}*/}
          <Button sx={{ fontSize: '10px' }}>View Deals</Button>
        </CustomHorizontalBox>
      </CustomVerticalBox>
    </Paper>
  );
};
export default WalmartProduct;
