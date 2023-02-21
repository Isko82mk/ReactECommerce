import React from "react";
import { Button, CarouselItemProps, Stack } from "react-bootstrap";
import { useShopingCart } from "../context/ShopingCartContext";
import storeItems from "../data/items.json";
import CurencyFormater from "../util/CurencyFormater";
type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { remouveFromCart } = useShopingCart();

  const item = storeItems.find((item) => item.id === id);

  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        style={{ width: "125px", height: "70px", objectFit: "cover" }}
        src={item?.imgUrl}
      />
      <div className="me-auto">
        <div>
          {item?.name}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}{" "}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {CurencyFormater(item!.price)}
        </div>
      </div>
      <div>
        {CurencyFormater(item!.price * quantity)}
        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => remouveFromCart(item!.id)}
        >
          x
        </Button>
      </div>
    </Stack>
  );
};

export default CartItem;
