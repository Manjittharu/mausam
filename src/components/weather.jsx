import { useState, useEffect } from "react";
// import Reactlogo from "../assets/react.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);


export default function Weather() {
    const [city, setcity] = useState("")
    const [weather, setweather] = useState({})
    const baseurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6623cbc8126e718c8ad9067906a836a3`
    useEffect(() => {
        fetchweather()
    }, [])
    function getImage( weather){
        switch(weather)
        {
            case "clouds":
                return "https://media.istockphoto.com/id/1321878632/photo/cloudy-sky-over-beautiful-flood-plain-landscape.webp?b=1&s=170667a&w=0&k=20&c=3nGMfD-sXDLS5jwwLV89TcEstDn00juZJ--18xie-UM="
            case "Rain":
                return "https://media.istockphoto.com/id/1388636452/photo/rain-drop-infront-of-mango-bud.webp?b=1&s=170667a&w=0&k=20&c=csV5-O0mIadLwh-_Ap-XGuZGhpmYUOuo4_k2fkXr7-4="
        }
    }
    async function fetchweather() {
        const response = await fetch(baseurl)
        const responsejson = await response.json();
        console.log(responsejson);
        setweather(responsejson);
    }
    return (
        <>
            <h1 style={{ fontSize: "larger", fontWeight: "bold", textTransform: "uppercase" }}><FontAwesomeIcon icon="fa-solid fa-cloud" />wheather app</h1>
            <p>{city}</p>
            <input type="text" placeholder="enter city name.."
                onChange={(e) => {
                    // console.log(e.target.value)
                    setcity(e.target.value)
                }} style={{ padding: "10px" }} />

            <button onClick={fetchweather}> <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />search weather</button>
            {
                weather.main &&
                (
                    <div className="weather" style={{backgroundImage:`url(${getImage(weather.weather[0].main)})`, backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
                        <h1>Temperature :{weather.main.temp} degree </h1>
                        <h2> <FontAwesomeIcon icon="fa-solid fa-location-dot" />{weather.name} </h2>
                        <h2 >{weather.sys.country}</h2>
                        <p> humidity:{weather.main.humidity}</p>
                        <p>{ weather.weather[0].main}</p>
                        <p><FontAwesomeIcon icon="fa-solid fa-book" />{ weather.weather[0].description}</p>
                
                    </div>
                )

            }
        </>
    )
}
