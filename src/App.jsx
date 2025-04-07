import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';


function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
