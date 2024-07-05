import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route,Link,useParams} from "react-router-dom"
import './App.css'
import Weather from './components/weather'

function App() {
  return(
    <div>
      <div>
        <Link to ='/'> home</Link>
<Link to ="/weather">weather </Link>
<Link to="/products"> products</Link>

      </div>
      <Routes>
        <Route path="/" element={<h1> this is home</h1>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Productdetail/>}/>
      </Routes>
    </div>
  )
}
export default App
function Products(){
 const[products,setproducts]=useState([
  {
    id:1,
    name:"ice creame"
  },
  {
    id:2,
    name:"beer"
  },
   {
    id:3,
    name:"wiskey"
  }, 
  {
    id:4,
    name:"creame"
  }
 ])
 return(
  <div>
    {products.map((product)=>{
      return <div>
        <p>{product.id}</p>
        <h1>{ product.name}</h1>
        </div>
    })
    }
  </div>
 )
}
 function Productdetail(){
  const{id}=useParams()
    return(
      <div>
      <h1>the product is {id}</h1>
      </div>
    )
  }

