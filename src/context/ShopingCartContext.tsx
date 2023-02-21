import { createContext, ReactNode, useContext, useState } from "react";
import { ShopingCart } from "../components/ShopingCart";

type ShopingCartProviderProps = {
  children: ReactNode;
};

type ShopingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  remouveFromCart: (id: number) => void;
  cartQuantity: number;
  openCart: () => void;
  closeCart: () => void;
  cartItems: CartItem[];
};

type CartItem = {
  id: number;
  quantity: number;
};

const ShopingCartContext = createContext({} as ShopingCartContext);

const useShopingCart = () => {
  return useContext(ShopingCartContext);
};

///cartProvider
const ShopingCartProvider = ({ children }: ShopingCartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce((quantity, item) => {
    return quantity + item.quantity;
  }, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const remouveFromCart = (id: number) => {
    return setCartItems((curentItems) =>
      curentItems.filter((item) => item.id !== id)
    );
  };

  return (
    <ShopingCartContext.Provider
      value={{
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        remouveFromCart,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShopingCart isOpen={isOpen} />
    </ShopingCartContext.Provider>
  );
};

export { useShopingCart, ShopingCartProvider };
