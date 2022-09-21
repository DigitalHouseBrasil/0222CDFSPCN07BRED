import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import About from '../About/About';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Navbar title="AnaDev" />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home name="Ana" />} />
            <Route path="/about" element={<About name="Ana" />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
