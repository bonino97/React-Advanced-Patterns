import { createContext, CSSProperties, ReactElement } from "react";

import { useProduct } from "../../hooks/useProduct";

import {
  ProductContextProps,
  Product,
  OnChangeProps,
} from "../../interfaces/product.interface";

import styles from "../../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (props: OnChangeProps) => void;
  value?: number;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: ProductCardProps) => {
  const { counter, increaseCounter } = useProduct({
    product,
    onChange,
    value,
  });

  return (
    <Provider value={{ product, counter, increaseCounter }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
