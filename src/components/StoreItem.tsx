import { Button, Card, CardImg } from "react-bootstrap";
import { useShopingCart } from "../context/ShopingCartContext";
import CurencyFormater from "../util/CurencyFormater";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    remouveFromCart,
  } = useShopingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100">
      <CardImg
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex  justify-content-between align-items-baseline mb-4">
          <span className="fs-3">{name}</span>
          <span className="ms-2 text-muted">{CurencyFormater(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              onClick={() => {
                increaseCartQuantity(id);
              }}
              className="w-100"
            >
              + Add to Card
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>

                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <div>
                <Button
                  onClick={() => remouveFromCart(id)}
                  variant="danger"
                  size={"sm"}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
