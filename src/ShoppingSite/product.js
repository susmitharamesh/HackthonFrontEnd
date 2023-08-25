import React from 'react'
import {Link,Outlet} from 'react-router-dom'
const Product = () => {
  return (
    
    <div>
      <h1>Product List</h1>
       <Link to ="/about/list" >   &#128270; LIST PRODUCTS   &#128270;</Link>
       &nbsp;  &nbsp;
    
      <Outlet/>
    </div>
   
    
  )
   
  
}

export default Product
