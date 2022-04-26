import { ProductCard as ProductCardHOC } from "./ProductCard";

import { ProductImage } from "./ProductImage";
import { ProductButtons } from "./ProductButtons";
import { ProductTitle } from "./ProductTitle";

import { ProductCardHOCProps } from "../../interfaces/product.interface";

export { ProductImage } from "./ProductImage";
export { ProductButtons } from "./ProductButtons";
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle, // ProductCard.Title = ProductTitle;
  Image: ProductImage, // ProductCard.Image = ProductImage;
  Buttons: ProductButtons, // ProductCard.Buttons = ProductButtons;
});

export default ProductCard;
