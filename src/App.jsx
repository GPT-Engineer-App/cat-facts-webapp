import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Breeds from "./pages/Breeds.jsx";
import RandomFact from "./pages/RandomFact.jsx";
import Facts from "./pages/Facts.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/breeds" element={<Breeds />} />
        <Route path="/random-fact" element={<RandomFact />} />
        <Route path="/facts" element={<Facts />} />
      </Routes>
    </Router>
  );
}

export default App;
