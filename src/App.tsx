import React from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// components
import  Header   from './components/common/header';
import  SlideBnner   from './components/common/slide';
import  Footer   from './components/common/footer';
// pages
import ListPage from './pages/list_page';
import NewPage from './pages/new_page';
import MainPage from './pages/main_page';



function App() {
  return (
    <div>
      <Header />
      <SlideBnner />
      <MainPage />
      <Routes>
        <Route path="/newpage" element={<NewPage />} />
        <Route path="/listpage" element={<ListPage />} />
       
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

