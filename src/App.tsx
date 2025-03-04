import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import ContactBar from "./Components/ContactBar/ContactBar";
import Footer from "./Components/Footer/Footer";
import ServicePath from "./Components/ServicePath/ServicePath";

function App() {
  return (
    <>
      <ContactBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:path" element={<ServicePath />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
