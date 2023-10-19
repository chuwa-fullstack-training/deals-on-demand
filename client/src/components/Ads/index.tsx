import { Hidden, ImageList, ImageListItem, Stack } from '@mui/material';

const Ads = () => {
  return (
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
  );
};
export default Ads;
