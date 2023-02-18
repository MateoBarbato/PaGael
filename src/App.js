import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import SmoothScroll from './components/SmoothScroll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompanyList from './components/companyList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SmoothScroll>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/:company' element={<CompanyList />}></Route>
          </Routes>
        </SmoothScroll>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
