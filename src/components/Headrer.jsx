import { useState } from "react";

export default function Header({tittle,subtittle,color}){
return(
    <>
    <h1 className="header"> here is your header</h1>
    <p style={{backgroundColor:color}}>{tittle}</p>
    <p style={{backgroundColor:color}}>{subtittle}</p>
    <p style={{backgroundColor:color}}>{color}</p>
    </>
)

}