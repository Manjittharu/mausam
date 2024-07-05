import { useState } from "react";
export default function Movie() {
    const [movies, setmovies] = useState("The Shawshank Redemption");
    const [shows, setshows] = useState(null)
    async function film() {
        const response = await fetch(`https://dummyapi.online/api/movies`)
        const responsedata = await response.json();
        console.log(responsedata);
        setshows(responsedata);

    }
    return (
        <>  
            <h1>welcome to my cinema</h1>
            <p>{movies}</p>
            <input type="text" placeholder="kalki2989AD" onChange={(e) => {
                setmovies(e.target.value)
            }} />
            <button onClick={film}>search movie</button>

            {shows && <DispFilms shows={shows}/>}
        </>
    )
}

function DispFilms({shows}){
    return <div className="list">
        {shows.map(film=>{return <ul>{film.movie }</ul>})}
    </div>
}