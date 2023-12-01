import axios from "axios"
import {useState, useEffect} from 'react'
import React from 'react'
import CardStructure from './cardStructure.jsx'
import AddCard from './AddCard.jsx'

const MainPage =(props) =>{
    const [editMode, setisEditing] = useState(false)
    const [currentData, setCurrentData] = useState([])

    const changeEditMode = () => setisEditing(true)

    useEffect(() =>{
        axios.get('/cars')
        .then((res) => {
            // console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    const newCard = () => {
        
        axios.post('/cars') 
        .then((res) => {
            setCurrentData(res.data)
        })
        .catch((err) =>{
        console.log(err);
        })
    }

    const deleteCard = (id) => {
        axios.delete(`/cars/${id}`)
        .then(res => {
            setCurrentData(res.data)
            console.log('res.data');
        })
        .catch(err=> {
            console.log(err);
        })
    }
    
    const editCard = (id, make, model, power, weight, img) =>{
        // const bodyObj ={
        //    make,
        // }

        // axios.put(`/cars/${id}`, bodyObj)
        //     .then((res) =>{
                
        //         setCurrentData(res.data)

                setisEditing(false)
            // })
    }

    const car = currentData.map((car) => <CardStructure changeEditMode={changeEditMode} editCard={editCard} isEditing = {editMode} deleteCard={() => deleteCard(car.id)} initialData={car} key={car.id}/>)
    return(
        <div id="cardDisplay">
            {car}
            <AddCard  newCard={newCard}/>
        </div>
    )
    
}

export default MainPage
    