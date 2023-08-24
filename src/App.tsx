import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './reset.css';
import { ROUTE_ARR } from './routes';

function App() {
  return (
    <div>
      <Routes>
        {ROUTE_ARR.map((route, index) => {
          return (
            <Route path={route.path} element={<route.element />} key={index} />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
