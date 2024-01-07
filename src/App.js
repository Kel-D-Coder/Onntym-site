<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Cafeteria } from "./Pages/Cafeteria";
import { Contact } from "./Pages/Contact";
import Breakfast from './Pages/Breakfast'
import Welcome from "./Pages/Welcome";
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Cafeteria } from './Pages/Cafeteria';
import { Contact } from './Pages/Contact';
import Breakfast from './Pages/MannaPalace';
import DoublePortion from './Pages/DoublePortion';
import Welcome from './Pages/Welcome';
// import { Footer } from './components/Footer';
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cafeteria" element={<Cafeteria />}>
<<<<<<< HEAD
          <Route index element={<Breakfast/>}/>
          <Route path="breakfast" element={<Breakfast/>}/>
          {/* <Route path="lunch" element={<Lunch/>}/> */}
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="Welcome" element={<Welcome/>} />
=======
          <Route index element={<Breakfast />} />
          <Route path="MannaPalace" element={<Breakfast />} />
          <Route path="DoublePortion" element={<DoublePortion />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="Welcome" element={<Welcome />} />
>>>>>>> ad491171283d74d4e43e10fb30355c8e93b3b388
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
