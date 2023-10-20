import { Box, Button, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AmazonProduct as ItemType } from '@/types/amazon';

const AmazonProduct = ({ item }: { item: ItemType }) => {
  const navigate = useNavigate();
  const toDetails = () => {
    navigate('/product/amazon/' + item.id);
  };
  return (
    <Paper
      sx={{ padding: { xs: '5px', md: '15px' }, margin: '10px 10px' }}
      elevation={3}
    >
      <Box
        sx={{
          width: { xs: 100, md: 250 },
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
          <Box
            component="img"
            sx={{ height: { xs: 50, md: 150 } }}
            src={
              item.image1.startsWith('../')
                ? 'https://avatars.githubusercontent.com/u/583231?v=4'
                : item.image1
            }
            alt=""
          />
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: '10px', display: { xs: 'none', md: 'block' } }}
          >
            amazon
          </Typography>
        </Box>
        <Box
          sx={{
            justifyContent: 'start',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: '5px 0'
          }}
        >
          <Box
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              width: '100%',
              height: '33px',
              lineHeight: '15px'
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '10px', md: '11px' },
                fontWeight: { xs: 400, md: 600 }
              }}
            >
              {item.title}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin: '5px 0'
          }}
        >
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '5px' }}>
            {item.originalPrice !== item.currentPrice ? (
              <Typography
                sx={{
                  fontSize: '13px',
                  color: 'green'
                }}
              >
                ${item.currentPrice}
              </Typography>
            ) : (
              <></>
            )}
            {item.originalPrice === '' ? (
              <></>
            ) : (
              <Typography
                sx={{
                  fontSize: '13px',
                  textDecoration: 'line-through'
                }}
              >
                ${item.originalPrice}
              </Typography>
            )}
          </Box>
          <Button onClick={toDetails} sx={{ fontSize: '10px' }}>
            View Deals
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default AmazonProduct;
