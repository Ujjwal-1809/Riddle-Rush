import StartImg from "./component/images/startBTN.png"
import gameImg from "./component/images/comicbg2.jpg"
import App from "./App"
import { useState } from "react"
import "./Start.css"
import game_name_img from "./component/images/game-name-img.jpg"

export default function Start() {

    const [afterStart, setAfterStart] = useState(false)

    const StartGame = () => {
        setAfterStart(true)
    }

    if (afterStart === true) {
        return <App />
    }

    else {
        return <div className="h-screen bg-cover bg-center flex justify-center flex-col items-center"
            style={{ backgroundImage: `url(${gameImg})` }}>
            <h1 id="gameName" className="text-5xl self-start justify-self-start"
                style={{ backgroundImage: `url(${game_name_img})` }}>RiddleRush</h1>
            <img onClick={StartGame} className="mb-8 cursor-pointer h-[100px] w-[200px]" src={StartImg} />
        </div>
    }
}