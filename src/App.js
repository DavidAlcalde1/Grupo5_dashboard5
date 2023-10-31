import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import MenuHeader from './components/MenuHeader';
import Dashboard from "./components/pages/Dashboard";
// import Products from "./components/pages/Products";
// import Home from "./components/pages/Home";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          {/* <Route index element={<Home />} /> */}
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="products" element={<Products />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
