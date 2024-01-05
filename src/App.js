import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Cafeteria } from './Pages/Cafeteria';
import { Contact } from './Pages/Contact';
import Breakfast from './Pages/MannaPalace';
import DoublePortion from './Pages/DoublePortion';
import Welcome from './Pages/Welcome';
// import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cafeteria" element={<Cafeteria />}>
          <Route index element={<Breakfast />} />
          <Route path="MannaPalace" element={<Breakfast />} />
          <Route path="DoublePortion" element={<DoublePortion />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="Welcome" element={<Welcome />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
