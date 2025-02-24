import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import ContactBar from './Components/ContactBar/ContactBar';

function App() {
  return (
    <>
      <ContactBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
