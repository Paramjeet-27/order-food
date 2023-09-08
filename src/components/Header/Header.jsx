import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import routes from "./../../routes/routes.json";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const selectedItems = useSelector((store) => store.thaliItems.value);

  const navigate = useNavigate();

  const checkoutHandler = () => {
    if (selectedItems.length < 2) {
      alert("Please select atleast 2 items to continue");
    } else {
      navigate(routes.CHECKOUT);
    }
  };

  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#">Yumm Foods</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink
                to={routes.HOME}
                style={{
                  color: "White",
                  textDecoration: "none",
                }}
              >
                Make Thali
              </NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="warning" onClick={checkoutHandler}>
              Checkout
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};
export default Header;
