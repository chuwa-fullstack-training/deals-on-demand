import { useLocation } from 'react-router-dom';

// type Props = {
//   id: string;
// };
const ProductDetail = () => {
  const location = useLocation();

  return <>{location}</>;
};

export default ProductDetail;
