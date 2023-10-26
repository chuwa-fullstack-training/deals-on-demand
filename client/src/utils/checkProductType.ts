import { AmazonProduct as AmazonType } from '@/types/amazon';
import { WalmartProduct as WalmartType } from '@/types/walmart';

type ProductType = AmazonType | WalmartType | null;
const isAmazon = (p: ProductType): p is AmazonType => {
  const product = p as AmazonType;
  return product.image5 !== undefined;
};
const isWalmart = (p: ProductType): p is WalmartType => {
  const product = p as WalmartType;
  return product.Text2 !== undefined;
};

export { isAmazon, isWalmart };
