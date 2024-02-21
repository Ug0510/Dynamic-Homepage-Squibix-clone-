import './assets/css/style.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import AdminLoginForm from './Pages/AdminLoginForm';
import UpdateForm from './Pages/UpdateForm';
import fetchData from './utils/fetchData';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(localStorage.getItem('data'));
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem('data');
    if (dataFromLocalStorage) {
      setData(dataFromLocalStorage);
    } else {
      fetchData();
      setTimeout(()=> {
        window.location.reload();
      },100);
    }
    console.log('now');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setLoggedIn(true);
    }
    
  }, [data,loggedIn]);


  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setLoggedIn(true);
  };

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage data={data} />} />
        <Route path="/login" element={loggedIn ? <Navigate to="/" /> : <AdminLoginForm login={login} />} />
        <Route path="/update-form" element={localStorage.getItem('isLoggedIn') === 'true' ? <UpdateForm data={data} setData={setData} /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
