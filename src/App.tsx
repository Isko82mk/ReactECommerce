import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import { ShopingCartProvider } from "./context/ShopingCartContext";

function App() {
  return (
    <ShopingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Container>
    </ShopingCartProvider>
  );
}

export default App;
