import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Cafeteria } from "./Pages/Cafeteria";
import { Contact } from "./Pages/Contact";
import Breakfast from './Pages/Breakfast'
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cafeteria" element={<Cafeteria />}>
          <Route index element={<Breakfast/>}/>
          <Route path="breakfast" element={<Breakfast/>}/>
          {/* <Route path="lunch" element={<Lunch/>}/> */}
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="Welcome" element={<Welcome/>} />
      </Routes>
    </Router>
  );
}

export default App;
