import { createContext } from "react";

import { useProduct } from "../../hooks/useProduct";

import {
  ProductContextProps,
  ProductCardProps,
} from "../../interfaces/product.interface";

import styles from "../../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increaseCounter } = useProduct();
  return (
    <Provider value={{ product, counter, increaseCounter }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};
