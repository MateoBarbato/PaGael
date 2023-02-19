import './css/index.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import SmoothScroll from './components/SmoothScroll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompanyContainer from './components/companyListContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SmoothScroll>
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/:company' element={<CompanyContainer/>}/>
          </Routes>
        </SmoothScroll>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
