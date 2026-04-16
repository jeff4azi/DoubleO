import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PropertyDetail from "./components/PropertyDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
