import { Adventures, Cars, Flight, Glamping, Hotels, Packages } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import "./App.css";
const App = () => {
  return (
    <div className="transition">
      <BrowserRouter>
        {/* <ScrollToTop */}
        <Header />
        <Routes>
          <Route path="/" element={<Glamping />} />
          <Route path="/flight" element={<Flight />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/adventures" element={<Adventures />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
