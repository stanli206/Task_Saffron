import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import ProductsPage from "./components/ProductsPage";
import Navbar from "./components/Navbar";
import Product from "./components/pages/Product";
import AboutUs from "./components/AboutUs";
import Insight from "./components/pages/Insight";
import KashmiriSaffron from "./components/pages/KashmiriSaffron";
import Beautyuse from "./components/pages/Beautyuse";
import CulinaryUse from "./components/pages/CulinaryUse";
import MedicineUse from "./components/pages/MedicineUse";
import PregnancyUse from "./components/pages/PregnancyUse";
import ChooseUs from "./components/pages/ChooseUs";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/choose-us" element={<ChooseUs />} />
        <Route path="/insight" element={<Insight />} />
        <Route path="/kashmiri-saffron" element={<KashmiriSaffron />} />
        <Route path="/beauty-use" element={<Beautyuse />} />
        <Route path="/culinary-use" element={<CulinaryUse />} />
        <Route path="/medicine-use" element={<MedicineUse />} />
        <Route path="/pregnancy-use" element={<PregnancyUse />} />
      </Routes>
    </BrowserRouter>
  );
}
