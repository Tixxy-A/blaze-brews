import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout';
import Indexpage from './component/IndexPage';
import LoginPage from './component/Login';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Indexpage />} />
        <Route path='/login' element={<LoginPage/>} />
      </Route>
      
    </Routes>
  );
}

export default App;
