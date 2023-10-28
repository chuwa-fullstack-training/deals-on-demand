import { Box, Button, Paper, Typography } from '@mui/material';
import { WalmartProduct as ItemType } from '@/types/walmart';
import { useNavigate, useSearchParams } from 'react-router-dom';

const WalmartProduct = ({ item }: { item: ItemType }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const searchText = params.get('item');
  const toDetails = () => {
    navigate('/product/walmart/' + item.Id, {
      state: { searchText: searchText }
    });
  };
  return (
    <Box
      component={Paper}
      sx={{
        padding: { xs: '15px', sm: '15px', md: '15px' },
        margin: { xs: '0', sm: '0', md: '0 10px' },
        boxShadow: { xs: 0, sm: 0, md: 3 },
        border: {
          xs: '1px solid #dddddd',
          sm: '1px solid #dddddd',
          md: 'none'
        }
        // minWidth: { xs: '100%', sm: '360px', md: 0 }
      }}
    >
      <Box
        sx={{
          width: { xs: '100%', sm: '100%', md: 250 },
          display: 'flex',
          flexDirection: { xs: 'row', sm: 'row', md: 'column' },
          justifyContent: 'start',
          gap: { xs: '10px' }
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
          <Box
            component="img"
            sx={{ height: { xs: 80, sm: 80, md: 150 } }}
            src={item.ImageUrl}
            alt=""
          />
        </Box>
        <Box sx={{ width: { xs: 280, sm: 400, md: 'auto' } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'start',
              margin: '5px 0'
            }}
          >
            <Box component="span" sx={{ fontSize: '10px' }}>
              Walmart
            </Box>
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
              <Box component="span" sx={{ fontSize: '11px', fontWeight: 600 }}>
                {item.Name}
              </Box>
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
            <Button sx={{ fontSize: '10px' }} onClick={() => toDetails()}>
              View Deals
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default WalmartProduct;
