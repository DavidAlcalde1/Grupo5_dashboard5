import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import MenuHeader from './components/MenuHeader';
import Users from "./components/pages/Users";
import Products from "./components/pages/Products";
import Home from "./components/pages/Home";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
