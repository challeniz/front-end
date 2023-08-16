import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// components

// pages
import ListPage from './pages/list_page';
import NewPage from './pages/new_page';
<<<<<<< HEAD
import ApplicationPage from './pages/application_page';
=======
import LoginPage from './pages/login/login_page';
import JoinPage from './pages/join/join_page';
>>>>>>> f01741208b76ebdb4bb889a887700fe7e1262f2c

function App() {
  return (
    <Routes>
      <Route path="/newpage" element={<NewPage />} />
      <Route path="/listpage" element={<ListPage />} />
<<<<<<< HEAD
      <Route path="/applicationpage" element={<ApplicationPage />} />
=======
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/joinpage" element={<JoinPage />} />
>>>>>>> f01741208b76ebdb4bb889a887700fe7e1262f2c
    </Routes>
  );
}

export default App;
