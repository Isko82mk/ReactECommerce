import { Offcanvas, Stack } from "react-bootstrap";
import { useShopingCart } from "../context/ShopingCartContext";
import CurencyFormater from "../util/CurencyFormater";
import CartItem from "./CartItem";
import storeItems from "../data/items.json";
type ShopingCatProps = {
  isOpen: boolean;
};

export const ShopingCart = ({ isOpen }: ShopingCatProps) => {
  const { closeCart, cartItems } = useShopingCart();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={2}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <div className="ms-auto fw-bold">
            Total :
            {CurencyFormater(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((item) => item.id === cartItem.id);
                return total + item!.price * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
