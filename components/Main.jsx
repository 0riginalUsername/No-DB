import axios from "axios"
import {useState, useEffect} from 'react'
import React from 'react'
import CardStructure from './cardStructure.jsx'
import AddCard from './AddCard.jsx'
const MainPage =(props) =>{
    const [currentData, setCurrentData] = useState([])

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
       const car = currentData.map((car) => <CardStructure initialData={car} key={car.id}/>)
        console.log(car);
        console.log(currentData);

        const newCard = () => {

           axios.post('/cars') 
           .then((res) => {
            setCurrentData(res.data)
           })
           .catch((err) =>{
            console.log(err);
           })
        }
        return(
            <div>
                {car}
                <AddCard  newCard={newCard}/>
            </div>
        )

}
export default MainPage
