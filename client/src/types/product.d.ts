import { WalmartProduct as WalmartType } from '@/types/walmart';
import { AmazonProduct as AmazonType } from '@/types/amazon';

export type ProductType = AmazonType | WalmartType | null;
