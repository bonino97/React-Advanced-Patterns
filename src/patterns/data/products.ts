import { Product } from "../interfaces/product.interface";

const productOne: Product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "/coffee-mug.png",
};

const productTwo: Product = {
  id: "2",
  title: "Coffee Mug - Meme",
  img: "/coffee-mug2.png",
};

export const products: Product[] = [productOne, productTwo];
