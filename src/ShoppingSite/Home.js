import React from 'react';
// import Shop from './logo.svg';
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='home'>
      <h1>Home</h1>
     
      <Link to ="/login" >   &#128270; LOGIN AS USER   &#128270;</Link>
      <Link to ="/about" >   &#128270; LIST PRODUCTS  &#128270;</Link>
       &nbsp;  &nbsp;
    </div>
  );
};

export default Home;
