import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Postdetail from './pages/postdetail';
import Navbar from './components/navbar';
import Formforpost from './pages/formforpost';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Postdetail />} />
        <Route path="/formforpost" element={<Formforpost />} />

      </Routes>
    </div>
  );
}

export default App;
