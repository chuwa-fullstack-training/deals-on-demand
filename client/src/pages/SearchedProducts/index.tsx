import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getProductsBySearch } from '@/services/Walmart';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from '@/app/reducers/walmartSlice';
import { RootState } from '@/app/store.ts';
import Section3 from '@/pages/Section3';
import { WalmartProduct } from '@/types/walmart';

// interface Product {
//   Id: string;
//   Name: string;
// }

const SearchedProducts: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const params = new URLSearchParams(location.search);
  const query = params.get('item') || '';
  const searchedProducts = useSelector(
    (state: RootState) => state.walmartReducer.searchedProducts
  ) as WalmartProduct[];
  console.log(searchedProducts);

  useEffect(() => {
    (async () => {
      const searchedProducts = await getProductsBySearch(query);
      dispatch(searchProducts({ searchedProducts: searchedProducts }));
    })();
  }, [query]);

  return (
    <>
      {searchedProducts.length !== 0 && (
        <>
          <Section3 productList={searchedProducts} from="search" />
          {/*{searchedProducts.map(product => {*/}
          {/*  return <div key={product.Id}>{product.Name}</div>;*/}
          {/*})}*/}
        </>
      )}
    </>
  );
};

export default SearchedProducts;
