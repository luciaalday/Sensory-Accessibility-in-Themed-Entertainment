import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './static/Nav';
import Footer from './static/Footer';

import Home from './pages/Home';
import Information from './pages/Information';
import Database from './pages/Database';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Design from './pages/Design';
import Visitation from './pages/Visitation';

export default function App() {
  return (
    <Router>
      <main>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Information />} />
          <Route path='/view' element={<Database />} />
          <Route path='/visit' element={<Visitation />} />
          <Route path='/design' element={<Design />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Error code={404} />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}
