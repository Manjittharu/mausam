import {useState} from "react"
 
export default function Manjit({color} ){
    const[games,setgames]=useState([
      "volleyball",
      "cricket",
      "football",
      "hockey",
    ])
    return(
    <>
      <ul style={{backgroundColor:color}}>
        {
          games.map((game,index)=>{
            if (game=="football"){
            return<li key={index} className='g'> {game} (popular)</li>
            }
            else{
            return<li key={index} className='game' >{game}</li>
            }
          }
        )
        }
      </ul>
      <h1>games:{games}</h1>
  </>
    )
  }