import { CSSProperties, useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from "../../styles/styles.module.css";
import noImage from "../../assets/no-image.jpg";

export interface ProductImageProps {
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      style={style}
      className={`${styles.productImg} ${className}`}
      src={product?.img || noImage}
      alt="Product Img"
    />
  );
};
