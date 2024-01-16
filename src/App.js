import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { EveningVendors } from './Pages/EveningVendors';
import { Cafeteria1 } from './Pages/Cafeteria1';
import { Contact } from './Pages/Contact';
import Breakfast from './Pages/MannaPalace';
import DoublePortion from './Pages/DoublePortion';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';
import NarshPlace from './Pages/NarshPlace';
import LynPaul from './Pages/LynPaul';
import ErnalDelicacy from './Pages/ErnalDelicacy';
import NumbersSpag from './Pages/NumbersSpag';
import General from './Pages/General';
import IzzyBreadBox from './Pages/IzzyBreadBox';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="eveningvendors" element={<EveningVendors />}>
          <Route path='NarshPlace' element={<NarshPlace />} />
          <Route path='LynPaul' element={<LynPaul />} />
          <Route path='ErnalDelicacy' element={<ErnalDelicacy />} />
          <Route path='NumbersSpag' element={<NumbersSpag />} />
          <Route path='General' element={<General />} />
          <Route path='IzzyBreadBox' element={<IzzyBreadBox />} />
        </Route>
        <Route path="Cafeteria1" element={<Cafeteria1/>}>
          <Route index element={<Breakfast />} />
          <Route path="MannaPalace" element={<Breakfast />} />
          <Route path="DoublePortion" element={<DoublePortion />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="Welcome" element={<Welcome />} />
        <Route path='Register' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;