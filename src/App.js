import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Cafeteria1 } from './Pages/Cafeteria1';
import { Contact } from './Pages/Contact';
import Breakfast from './Pages/MannaPalace';
import DoublePortion from './Pages/DoublePortion';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';
// import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Cafeteria1" element={<Cafeteria1/>}>
          <Route index element={<Breakfast />} />
          <Route path="MannaPalace" element={<Breakfast />} />
          <Route path="DoublePortion" element={<DoublePortion />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="Welcome" element={<Welcome />} />
        <Route path='Register' element={<Register/>}/>
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
