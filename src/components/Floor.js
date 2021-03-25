import Button from "./Button"
import {useState} from 'react'

const Floor = ({  id, wasClicked, setClicked }) => {

    return (
        <div>
            <h3>{id}</h3>
           <Button id={id} color= {wasClicked ? 'red' : 'green'} text={wasClicked ? 'Close' : 'Add'} onClick={setClicked}/>
            
        </div>
    )
}

export default Floor
