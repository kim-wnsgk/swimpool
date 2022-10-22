import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home'
import Rank from './routes/Rank'
import Location from './routes/Location'
import List from './routes/List'
import About from './routes/About'
import Method from './routes/Method'
import Coution from './routes/Coution'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rank/:loc" element={<Rank />} />
        <Route path="/location" element={<Location />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />
        <Route path="/method" element={<Method />} />
        <Route path="/coution" element={<Coution />} />
      </Routes>
    </Router >
  );
}

export default App;


