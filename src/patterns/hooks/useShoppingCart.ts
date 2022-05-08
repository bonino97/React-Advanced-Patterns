import { useState } from "react";
import { IProductInCart, OnChangeProps } from "../interfaces/product.interface";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: IProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: OnChangeProps) => {
    setShoppingCart((lastShoppingCart) => {
      const productInCart: IProductInCart = lastShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...lastShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = lastShoppingCart;
      return { ...rest };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
