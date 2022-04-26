import { ProductCardProps } from "../components/Product/ProductCard";
import { ProductImageProps } from '../components/Product/ProductImage';
import { ProductTitleProps } from "../components/Product/ProductTitle";
import { ProductButtonsProps } from "../components/Product/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  product: Product;
  counter: number;
  increaseCounter: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
}
