import React from 'react'

function AddCard(props) {
    const {newCard} = props

    return (
        <>
        <button className="addCard" onClick ={newCard}>Add Card</button>
        </>
    )

}

export default AddCard