/* eslint-disable no-unused-vars */
import React from "react"
export const Ui = () => {
    const [currentScore, setCurrentScore] = React.useState(0)
    const [highScore, setHighScore] = React.useState(0)
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
                <div>

                </div>
            </main>
            <footer>
                <p>Created by Reddy Veerendra</p>
            </footer>
        </div>
    )
}