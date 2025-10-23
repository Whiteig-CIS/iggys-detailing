import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './Global.css';

import Layout from './Layout';
import Home from './pages/Home';
import Auto from './pages/Auto';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import Marine from './pages/Marine';
import Portfolio from './pages/Portfolio';








export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="auto" element={<Auto />}/>
          <Route path="booking" element={<Booking />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="locations" element={<Locations />}/>
          <Route path="marine" element={<Marine />}/>
          <Route path="portfolio" element={<Portfolio />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(); test
