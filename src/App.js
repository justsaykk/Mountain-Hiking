import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Inspired from "./pages/Inspired";
import Itinerary from "./pages/Itinerary";
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([
    {
      peakName: "Pachermo Peak",
      category: "Beginner",
      elevation: 6273,
      description:
        "First climbed in 1955, Pharchamo Peak is an attractive snow peak lying south of Tashi Lapcha. It has a north-by-northwest ridge, which rises from the crevassed glacier astride the Tashi Lapcha. The face of the ridge forms a uniform slope broken by crevasse and seraes rising from the rocky lower buttresses above the Drolambau Glaciers in the west. Rolwaling valley is the main access to Pharchamo, though this route was closed for most of the 1980s due to potential dangers to porters crossing the Tashi Lapcha. The only other alternative route is from the Khumbu side via Namche Bazar and Thame. ",
      price: 2650,
      imageUrl:
        "https://www.nepalindependentguide.com/wp-content/uploads/2017/07/Pachermo-Peak.jpg",
    },
  ]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((el) => el !== item);
    setCart(newCart);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inspired" element={<Inspired />} />
          <Route
            path="/itinerary"
            element={<Itinerary handleClick={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} handleClick={removeFromCart} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
