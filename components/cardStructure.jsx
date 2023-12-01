import React from 'react'
import {useState} from 'react'
import '../src/App.css'

const CardStructure = (props) => {
    const {initialData} = props
    const [make, setMake] = useState(initialData.make)
    const [model, setModel] = useState(initialData.model)
    const [img, setImg] = useState(initialData.img)
    const [power, setPower] = useState(initialData.power)
    const [weight, setWeight] = useState(initialData.weight)
    const [showSide, setShowSide] = useState(true)

    const toggleCard = () => {
        setShowSide(!showSide)
    }
    let weightNum = Number(weight)
    let powerNum = Number(power)

    let ratio = (powerNum / weightNum)
    // console.log(ratio);
    console.log(weightNum);
    if (showSide === true){
        return (
            <div className="card" onClick={toggleCard}>
                <h2>Make: {make} </h2>
                <h3>Model: {model}</h3>
                <img src={img} width="250"/>
            </div>
        )
    } else{
        return (
            <div className="card" onClick={toggleCard}>
                <p>Power: {power}hp</p>
                <p>Weight: {weight}lbs</p>
                <p>{ratio.toFixed(3)}hp/lbs</p>
            </div>
        )
    }
    
}
export default CardStructure