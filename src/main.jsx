import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home.jsx'
import Manjit from './components/manjit.jsx'
import Footer from './components/footer.jsx'
import Header from './components/Headrer.jsx'
import Weather from './components/weather.jsx'
import { BrowserRouter } from 'react-router-dom'
// import Movie from './components/movie.jsx'

// function Persondetail(){
//   const[ persons,setpersons]=useState([
//     {
//       'name':'manjit',
//        'age':22,
//        'gender':'male',
//     },
//     {
//       'name':'nikhil',
//        'age':22,
//        'gender':'male',
//     },
//     {
//       'name':'devesh',
//        'age':25,
//        'gender':'male',
//     },
//     {
//       'name':'tharu',
//        'age':23,
//        'gender':'male',
//     },
//   ])
//   return(
//   <>
// {
//   persons.map((person)=>{
//     return(
//       <div className='person'>
//       <h1>{person.name}</h1>
//       <h1>Age:{person.age}</h1>
//       <h1> Gender:{person.gender}</h1>
//     </div>
//     )
// })}
// <button onClick={()=>{
//   let data=persons
//   let newperson=
//     {
//       'name':"man",
//       'age':33,
//       'gender':"male"
//     }
  
//   data.push(newperson)
//   setpersons((persons)=>{
//     return [...persons,newperson]


//   })
//   console.log(data)
// }}>enter here</button>
//   </> 
//   )
// }
// const element =<h1>hello i am here<br></br>{60+9}</h1>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  
{/* //     {element} */}
{/* //     <Home/>
//   <Footer/>
//     <Manjit color="red"/>
//     <Persondetail/>
//     <Header tittle="Ranjit"  color="red" />
//     <Header subtittle="Manjit" color="green"/> */} 
   
    {/* <Movie/> */}
  </React.StrictMode>,

)
