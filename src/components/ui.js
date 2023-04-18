import React from "react"
import { Info } from "./data"
export const Ui = () => {
    const [currentScore, setCurrentScore] = React.useState(0)
    const [highScore, sethighScore] = React.useState(0)
    const [cards, setCards] = React.useState([])
    const [level, setLevel] = React.useState(1)
    const [data, setData] = React.useState([...Info])
    function shuffle(data) {
        for (let i = 0; i < data.length; i++) {
            const temp = data[i]
            const j = Math.floor(Math.random() * (data.length - 0) + 0)
            data[i] = data[j]
            data[j] = temp;
        }
        return data
    }
    function Card(name) {
        return (
            <div className="card">
                <img src='../images/{}' alt="name" />
            </div>
        )
    }
    return (
        <div>
            <header>
                <div>
                    <p>Memory Game</p>
                </div>
                <div className="header2">
                    <p>Current Score : {currentScore} :</p>
                    <p>High Score : {highScore}</p>
                </div>
            </header>
            <main>
                <div>{shuffle(data.slice(0, 6))}</div>
                <div>{data}</div>
            </main>
            <footer>
                <p>Created by Reddy Veerendra</p>
            </footer>
        </div>
    )
}