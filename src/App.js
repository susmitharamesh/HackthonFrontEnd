// import logo from './logo.svg';
import './ShoppingSite/shop.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './ShoppingSite/Home';
import Login from './ShoppingSite/Login';
import About from './ShoppingSite/About';
import Navbar from './ShoppingSite/Navbar';


import Error from './ShoppingSite/error';
import List from './ShoppingSite/list';
import Product from './ShoppingSite/product';


function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
     
        <hr></hr>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Product />} >
            <Route index element={<About />} />
           
            <Route exact path="/about/list" element={<List />} />
          </Route>

          <Route path="/login" element={<Login />} />
         
          <Route path="*" element={<Error />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;

