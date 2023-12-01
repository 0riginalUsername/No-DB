import React from 'react'
import {useState} from 'react'
import '../src/App.css'

const CardStructure = (props) => {
    const {initialData, deleteCard, changeEditMode, isEditing, editCard} = props
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
        if(isEditing === false) {
            return (
                <div className="card" onClick={toggleCard}>
                    <p>Power: {power}hp</p>
                    <p>Weight: {weight}lbs</p>
                    <p>{ratio.toFixed(3)}hp/lbs</p>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            changeEditMode()
                        }}
                    >Edit</button>
                </div>
            )
        } else {
            return(
                <div className="card">
                    <input placeholder="make"value={make} onChange={(e) => setMake(e.target.value)}/>
                    <input placeholder="model"value={model} onChange={(e) => setModel(e.target.value)}/>
                    <input placeholder="img"value={img} onChange={(e) => setImg(e.target.value)}/>
                    <input placeholder="power"value={power} onChange={(e) => setPower(e.target.value)}/>
                    <input placeholder="weight"value={weight} onChange={(e) => setWeight(e.target.value)}/>
                    <button onClick={() =>editCard(initialData.id, make, model, power, weight, img)}>Save</button>
                    <button onClick ={deleteCard}>Delete</button>



                </div>
            )

        }
    }
    
}

export default CardStructure