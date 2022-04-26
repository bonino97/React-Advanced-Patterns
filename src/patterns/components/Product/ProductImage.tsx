import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from "../../styles/styles.module.css";
import noImage from "../../assets/no-image.jpg";

export interface ProductImageProps {
  className?: string;
}

export const ProductImage = ({ className }: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={product?.img || noImage}
      alt="Product Img"
    />
  );
};
