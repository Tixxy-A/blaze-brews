import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout';
import { UserContextProvider } from './context/UserContext';
import Indexpage from './component/IndexPage';
import LoginPage from './component/Login';
import RegisterPage from './component/Register';
import Shop from './component/Shop';
import Profile from './component/Profile';
import './App.css';
import axios from 'axios';

axios.defaults.withCredentials=true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Indexpage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/profile' element={<Profile />} />
        </Route>

      </Routes>
    </UserContextProvider>
  );
}

export default App;
