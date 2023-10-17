import { Box, ImageList, ImageListItem, Stack, Hidden } from '@mui/material';
import Section from '@/components/Section';

const Home = () => {
  const testList = [
    { name: '1', desp: '1', price: 1 },
    { name: '2', desp: '2', price: 2 },
    { name: '1', desp: '1', price: 1 },
    { name: '2', desp: '2', price: 2 }
  ];
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        {/* Products */}
        <Stack
          direction="column"
          sx={{ width: { md: 'calc(100% - 300px)', sm: '100%' } }}
          spacing={3}
        >
          <Stack direction="column">
            <Section
              title="Best Deals On Electronics"
              productPropsList={testList}
            />
          </Stack>
          <Stack direction="column">
            <Section
              title="Exclusive Deals On Funitures"
              productPropsList={testList}
            />
          </Stack>
          <Stack direction="column">
            <Section title="Exclusive Deals" productPropsList={testList} />
          </Stack>
        </Stack>

        {/* Ads */}
        <Hidden mdDown>
          <Stack direction="column" sx={{ width: '300px' }}>
            <ImageList sx={{ width: '100%' }} cols={1}>
              {[1, 2, 3].map((_, idx) => (
                <ImageListItem key={idx}>
                  <img
                    srcSet="https://github.com/chuwa-fullstack-training/deals-on-demand/blob/main/client/src/assets/image15-2.png?raw=tru"
                    src="https://github.com/chuwa-fullstack-training/deals-on-demand/blob/main/client/src/assets/image15-2.png?raw=true"
                    alt="ads"
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
        </Hidden>
      </Stack>
    </Box>
  );
};

export default Home;
