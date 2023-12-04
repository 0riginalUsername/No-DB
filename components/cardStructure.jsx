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
        if(initialData.model == ""){
            return(<div>
                <div className="card" onClick={toggleCard}>
                <h2 id="centerText">Make:</h2><p id="centerText" className="ital">Flip to edit</p>
                <h3 id="centerText">Model: {model}</h3><p id="centerText" className="ital">Flip to edit</p>
                <h3 id="centerText">Flip to add info!</h3>
                <img src={img} width="250"/>
            </div>
                <button className="dltBtn" onClick ={deleteCard}>Delete</button>
            </div>
            )
        }
        return (<div>
            <div className="card" onClick={toggleCard}>
                <h2 id="centerText">Make: {make} </h2>
                <h3 id="centerText">Model: {model}</h3>
                <img src={img} width="250"/>
            </div>
                <button className="dltBtn" onClick ={deleteCard}>Delete</button>
           </div>
        )
    } else{
        if(isEditing === false) {
            return (<div>
                <section className="card" onClick={toggleCard}>
                    <p>Power: {power}hp</p>
                    <p>Weight: {weight}lbs</p>
                    <p>Power:weight {ratio.toFixed(3)}hp/lbs</p>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            changeEditMode()
                        }}
                        
                    >Edit</button>
                    <br></br>
                    
                </section>
                <button className="dltBtn" onClick ={deleteCard}>Delete</button>
                </div>
            )
        } else {
            return(<div>
                <div className="card">
                    <input placeholder="make"value={make} onChange={(e) => setMake(e.target.value)}/>
                    <input placeholder="model"value={model} onChange={(e) => setModel(e.target.value)}/>
                    <input placeholder="img"value={img} onChange={(e) => setImg(e.target.value)}/>
                    <input placeholder="power"value={power} onChange={(e) => setPower(e.target.value)}/>
                    <input placeholder="weight"value={weight} onChange={(e) => setWeight(e.target.value)}/>

                </div>
                    <button onClick={() =>editCard(initialData.id, make, model, power, weight, img)}>Save</button>
                </div>
            )

        }
    }
    
}

export default CardStructure