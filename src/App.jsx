import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
