import { useState } from "react";
import axios from 'axios'
import "./style.css"

const Home = () => {

    const [joke, setJoke] = useState<any>("")
    
    const randomJoke = () => {
        axios.get("https://api.chucknorris.io/jokes/random")
        .then((Response) => {setJoke(Response.data.value)})
    }

    return (
        <div className="container">
            <div className="image">
                {!joke ? <img src="./ChuckNorrisOld.jpg"/> : <img src="./ChuckNorrisPeak.jpg"/>}
            </div>
            <div className="joke">
                <h2>{joke}</h2>
                <button onClick={randomJoke} className="submit">{!joke ? "Click here for a super funny joke" : "Click here to see another super ultra funny joke"}</button>
            </div>
        </div>
    )
}

export default Home;