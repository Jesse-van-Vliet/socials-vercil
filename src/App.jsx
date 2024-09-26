import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Marieke from './pages/Marieke';

function App() {
  return (
    <>
      <div className='App'>
      <BrowserRouter>
        <Routes>
             <Route index element={<Index />} />
             <Route path='*' element={<Index />} />
             <Route path='<3' element={<Marieke />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
