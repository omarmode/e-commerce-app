import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import Slider from "./Components/Slider";
import "./App.css";
import ProductsList from "./Components/ProductsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import { Fade } from "react-awesome-reveal";
import ProductDetails from "./Components/ProductDetails";
import { Slide, Roll } from "react-awesome-reveal";

function App() {
  return (
    <div className="App  " style={{ minHeight: "270px" }}>
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Roll>
                <ProductsList />
              </Roll>
            </>
          }
        ></Route>
        <Route path="/About" element={<About />} />
        <Route path="Product/:ProductId" element={<ProductDetails />} />
      </Routes>

      <Container></Container>
    </div>
  );
}

export default App;
