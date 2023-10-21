import { Box, Button, Paper, Typography } from '@mui/material';
import { WalmartProduct as ItemType } from '@/types/walmart';

const WalmartProduct = ({ item }: { item: ItemType }) => {
  return (
    <Paper sx={{ padding: '15px', margin: '0 10px' }} elevation={3}>
      <Box
        sx={{
          width: 250,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start'
        }}
      >
        <Box
          sx={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '5px 0'
          }}
        >
          <img style={{ height: 150 }} src={item.ImageUrl} alt="" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            margin: '5px 0'
          }}
        >
          <Typography sx={{ fontSize: '10px' }}>Walmart</Typography>
        </Box>
        <Box>
          <Box
            component="div"
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              height: '33px'
              // lineHeight: '15px'
            }}
          >
            <Typography sx={{ fontSize: '11px', fontWeight: 600 }}>
              {item.Name}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '5px'
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
        </Box>
      </Box>
    </Paper>
  );
};
export default WalmartProduct;
