import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    // state

    const [color1, setColor1] = useState("ffffff")
    const [color2, setColor2] = useState("ffffff")
    const [color3, setColor3] = useState("ffffff")
    const [color4, setColor4] = useState("ffffff")

    // comportement

    const generateRandomColor_1 = () => {
        setColor1(Math.random().toString(16).substr(-6));
        setColor4(Math.random().toString(16).substr(-6));
    }

    const generateRandomColor_2 = () => {
        setColor2(Math.random().toString(16).substr(-6))
        setColor3(Math.random().toString(16).substr(-6))
    }

    const generateRandomColor_3 = () => {
        setColor3(Math.random().toString(16).substr(-6))
        setColor2(Math.random().toString(16).substr(-6))
    }

    const generateRandomColor_4 = () => {
        setColor4(Math.random().toString(16).substr(-6))
        setColor1(Math.random().toString(16).substr(-6))
    }

    const reset = () => {
        setColor1("ffffff")
        setColor2("ffffff")
        setColor3("ffffff")
        setColor4("ffffff")
    }

    return (
        <div className="main-container">
                <div id="1" className="color_1" onClick={generateRandomColor_1} style={{background:  `#${color1}`}}>{`#${color1}`}</div>
                <div id="2" className="color_2" onClick={generateRandomColor_2} style={{background: `#${color2}`}}>{`#${color2}`}</div>
                <div id="3" className="color_3" onClick={generateRandomColor_3} style={{background: `#${color3}`}}>{`#${color3}`}</div>
                <div id="4" className="color_4" onClick={generateRandomColor_4} style={{background: `#${color4}`}}>{`#${color4}`}</div>
                <button className="reset_button" onClick={reset}>RESET</button>
        </div>
    )

}



export default App
