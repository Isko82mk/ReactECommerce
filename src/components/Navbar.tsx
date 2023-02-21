import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShopingCart } from "../context/ShopingCartContext";
import CartSVG from "./CartSVG";

const Navbar = () => {
  const { openCart, cartQuantity } = useShopingCart();
  return (
    <Container>
      <NavBarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <NavBarBs.Brand href="#home">E-commerce</NavBarBs.Brand>
          <NavBarBs.Toggle aria-controls="basic-navbar-nav" />
          <NavBarBs.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to={"/"} as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link to={"/store"} as={NavLink}>
                Store
              </Nav.Link>
              <Nav.Link to={"/about"} as={NavLink}>
                About
              </Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
              <Button
                onClick={openCart}
                style={{ width: "3rem", height: "3rem", position: "relative" }}
                variant="outline-primary"
                className="rounded-circle"
              >
                <CartSVG />
                <div
                  className="rounded-circle bg-danger d-flex-center "
                  style={{
                    color: "white",
                    width: "1.5rem",
                    height: "1.5rem",
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(50%,50%)",
                  }}
                >
                  {cartQuantity}
                </div>
              </Button>
            )}
          </NavBarBs.Collapse>
        </Container>
      </NavBarBs>
    </Container>
  );
};

export default Navbar;
