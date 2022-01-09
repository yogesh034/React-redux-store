import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header'
import Productlist from './component/Productlist'
import ProductDetails from './component/ProductDetails'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" exact element={<Productlist />} />
        <Route path="/product/:productId" exact element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
