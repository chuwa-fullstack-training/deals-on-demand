import { styled, Typography } from '@mui/material';
import React from 'react';
import Product from '../Product';

type Props = {
  title: string;
  productPropsList: { name: string; desp: string; price: number }[];
};

const CustomHorizontalBox = styled('div', {
  name: 'CustomHorizontalBox',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'start',
  gap: '20px',
  padding: '0 10px'
}));
const CustomVerticalBox = styled('div', {
  name: 'product',
  slot: 'root'
})(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  gap: '20px'
}));
const Section = (props: Props) => {
  // const startScroll = () => {};
  return (
    <React.Fragment>
      <CustomVerticalBox>
        <CustomHorizontalBox>
          <Typography variant="h6" fontWeight={600}>
            {props.title}
          </Typography>
        </CustomHorizontalBox>
        <CustomHorizontalBox
          // onMouseDown={() => {
          //   startScroll();
          // }}
          sx={{
            overflowX: 'scroll',
            height: '400px'
          }}
        >
          {props.productPropsList.map((propsList, index) => (
            <div key={index}>
              <Product
                name={propsList.name}
                desp={propsList.desp}
                price={propsList.price}
              />
            </div>
          ))}
        </CustomHorizontalBox>
      </CustomVerticalBox>
    </React.Fragment>
  );
};
export default Section;
