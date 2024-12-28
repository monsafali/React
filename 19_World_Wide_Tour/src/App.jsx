import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";

import PageNotFound from "./pages/PageNotFound";
import AppLayOut from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <h1>Helow Router</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayOut />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
