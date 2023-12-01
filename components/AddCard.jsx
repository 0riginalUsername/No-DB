import React from 'react'

function AddCard(props) {
    const {newCard} = props

    return (
        <>
        <button onClick ={newCard}>Add Card</button>
        </>
    )

}

export default AddCard