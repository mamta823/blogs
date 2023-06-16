import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Postdetail from './pages/postdetail';
import Navbar from './components/navbar';
import Formforpost from './pages/formforpost';
import Loader from './components/Spinner';
import { useContext, useEffect, useState } from 'react';
import LoaderContext from './context/LoaderProvider';

function App() {
  const { isLoading } = useContext(LoaderContext);
  console.log(isLoading, "isLoading")
  return (
    <Loader loading={isLoading} >
      <div style={{ height: '100vh' }}>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Postdetail />} />
          <Route path="/formforpost" element={<Formforpost />} />

        </Routes>

      </div>
    </Loader >
  );
}

export default App;