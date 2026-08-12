import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Produk from "./pages/Produk";
import Kategori from "./pages/Kategori";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Layout/>}>
        <Route index element ={<Home />} />
        <Route path="produk" element={<Produk/>} />
        <Route path="kategori" element={<Kategori />} />
      </Route>
    </BrowserRouter>
  )
}