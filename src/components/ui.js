/* eslint-disable no-unused-vars */
import React from "react";
import { CardMaker } from "./card";
export const Ui = () => {
    const [currentScore, setCurrentScore] = React.useState(0);
    const [highScore, setHighScore] = React.useState(0);
    const [list, setList] = React.useState([])
    const [lost, setLost] = React.useState(false);
    const [showingNumbers, setShowingNumbers] = React.useState([]);
    function numberGenerator(props) {
        const num = []
        while (num.length < 3 && list.length < 1) {
            const x = Math.floor(Math.random() * 50)
            if (!num.includes(x) && !list.includes(x)) {
                num.push(x)
            }
        }
        let y = list[Math.floor(Math.random() * (list.length - 1) + 0)]
        console.log("hi", y)
        while (num.length < 3) {
            const x = Math.floor(Math.random() * 50)
            if (!num.includes(x) && !list.includes(x)) {
                num.push(x)
                if (num.length === 2) {
                    num.push(y)
                }
            }
        }
        console.log(num)
        shuffle(num);
    }
    function handleClick(e) {
        const x = e.target.id;
        if (!list.includes(x)) {
            setList(prev => [...prev, x])
            setCurrentScore(prev => prev + 1)
        }
        else {
            setLost(true)
        }
    }
    function shuffle(num) {
        let div = []
        for (let i = 0; i < 3; i++) {
            const temp = num[i]
            let j = Math.floor(Math.random() * (2 - 0) + 0)
            num[i] = num[j]
            num[j] = temp
        }
        for (let i = 0; i < 3; i++) {
            div.push(<CardMaker
                name={num[i]}
                function={handleClick} />)
        }
        setShowingNumbers([...div])
    }
    React.useEffect(() => {
        if (currentScore > highScore) {
            setHighScore(currentScore)
        }
        setCurrentScore(0)
        setLost(false)
        setList([])
    }, [lost])
    React.useEffect(() => {
        numberGenerator()
    }, [list])
    return (
        <div>
            <header>
                <div>
                    <p>Memory Game</p>
                </div>
                <div className="header2">
                    <p>Current Score : {currentScore}</p>
                    <p>High Score : {highScore}</p>
                </div>
            </header>
            <main>
                {showingNumbers}
            </main>
            <footer>
                <p>Created by Reddy Veerendra</p>
            </footer>
        </div>
    )
}