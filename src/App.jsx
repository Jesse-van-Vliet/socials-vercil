import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App w-full'>
      <BrowserRouter>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/index' element={<Index />} />
          <Route path='*' element={<Index />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
