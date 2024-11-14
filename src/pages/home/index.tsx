import { useState } from "react";
import axios from 'axios'

const Home = () => {

    const [joke, setJoke] = useState<any>("")
    
    const randomJoke = () => {
        axios.get("https://api.chucknorris.io/jokes/random")
        .then((Response) => {setJoke(Response.data.value)})
    }

    return (
        <div className="container">
            <h1>Funny joke</h1>
            <div className="joke">
                <h2>{!joke ? "Omega fun image" : "Alpha fun image"}</h2>
                <button onClick={randomJoke} className="submit">{!joke ? "Click here for a super funny joke" : "Click here to see another super ultra funny joke"}</button>
            </div>
        </div>
    )
}

export default Home;