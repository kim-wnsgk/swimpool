import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home'
import Rank from './routes/Rank'
import Location from './routes/Location'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </Router >
  );
}

export default App;
