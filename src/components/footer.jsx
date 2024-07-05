import {useState} from "react"


 export default function Footer(){
    const [count,setcount]=useState(0)
    return(
      <>
      <h1 style={{backgroundColor:"yellow",fontSize:"large"}} className="foo">if you are gay you don't have any permission..</h1>
      <button className='p' onClick={ ()=>{ 
        alert("are you a gay or not")
      }
      }>press to enter home</button>
      <h1>Count:{count}</h1>
      <button  disabled={count<=0}  onClick={()=>{
        setcount(count-1)
        console.log(count)
      }}>click me to deccrease count</button>
      <button onClick={()=>{
        setcount(count + 1 )
        console.log(count)
      }}>click me to increase
       count</button>
      </>
      
    )
  }
   