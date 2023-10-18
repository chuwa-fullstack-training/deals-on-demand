import React from 'react';
import { useSelector } from 'react-redux';
import { styled, Typography } from '@mui/material';
import WalmartProduct from '@/components/WalmartProduct';
// import { loadExclusiveDeals } from '@/app/reducers/walmartSlice.ts';
// import { getDiscountProducts } from '@/services/Walmart';
import { RootState } from '@/app/store.ts';

const ExclusiveHorizontalSection = styled('div', {
  name: 'ExclusiveHorizontalSection',
  slot: 'root'
})(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'start',
  height: '310px',
  margin: '10px 0',
  gap: '20px'
}));
const ExclusiveVerticalSection = styled('div', {
  name: 'product',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start'
}));
const ExclusiveDeals = () => {
  // const [exclusiveDeals, setExclusiveDeals] = useState([]);
  const exclusiveDeals = useSelector(
    (state: RootState) => state.walmartReducer.exclusiveDeals
  );
  return (
    <React.Fragment>
      <ExclusiveVerticalSection>
        <Typography variant="h6" fontWeight={600} sx={{ marginBottom: '10px' }}>
          Exclusive Deals On Furnitures
        </Typography>
        <ExclusiveHorizontalSection>
          {exclusiveDeals.map((item, index) => (
            <div key={index}>
              <WalmartProduct item={item} />
            </div>
          ))}
        </ExclusiveHorizontalSection>
      </ExclusiveVerticalSection>
    </React.Fragment>
  );
};
export default ExclusiveDeals;
