import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Cafeteria1 } from './Pages/Cafeteria1/Cafeteria1';
import { Cafeteria2 } from './Pages/Cafeteria2/Cafeteria2';
import { EveningVendors } from './Pages/EveningVendors'
import Breakfast from './Pages/Cafeteria1/MannaPalace';
import DoublePortion from './Pages/Cafeteria1/DoublePortion';
import Welcome from './Pages/Welcome';
import Register from './Pages/Register';
import Mimis from "./Pages/Cafeteria1/Mimi's";
import NationalKitchen from './Pages/Cafeteria1/NationalKitchen';
import Numbers from './Pages/Cafeteria1/Numbers';
import Shalom from './Pages/Cafeteria2/Shalom';
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
          <Route index element={<NarshPlace />} />
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
          <Route path="NationalKitchen" element={<NationalKitchen />} />
          <Route path="Mimi's" element={<Mimis />} />
          <Route path="Numbers" element={<Numbers />} />
          <Route path="Shalom" element={<Shalom />} />
        </Route>
        <Route path="Cafeteria2" element={<Cafeteria2 />} />
        <Route path="Welcome" element={<Welcome />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;