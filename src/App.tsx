import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ContactBar from './Components/ContactBar/ContactBar';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
      <ContactBar />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
