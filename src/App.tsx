import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// pages
import ListPage from './pages/list_page';
import NewPage from './pages/new_page';
import MainPage from './pages/main_page';



function App() {
  return (
    <div>
    
      <Routes>
         <Route path="/" element={<MainPage  />} />
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/listpage" element={<ListPage />} />

      </Routes>
      
    </div>
  );
}

export default App;

