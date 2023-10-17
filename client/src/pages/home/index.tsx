import { Box, Stack } from '@mui/material';
// import React from 'react';
import Section from '../../components/Section';

const Home = () => {
  const testList = [
    { name: '1', desp: '1', price: 1 },
    { name: '2', desp: '2', price: 2 },
    { name: '1', desp: '1', price: 1 },
    { name: '2', desp: '2', price: 2 }
  ];
  return (
    <Box sx={{ width: 1400 }}>
      <Box>
        <Stack direction="row" spacing={10}>
          {/*products*/}
          <Stack direction="column" sx={{ width: 4 / 5, gap: 5 }}>
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
          {/*ads*/}
          <Stack
            direction="column"
            sx={{ border: '1px solid red', width: '20%' }}
          ></Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
