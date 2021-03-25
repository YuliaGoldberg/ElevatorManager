import React from 'react'
import {useState} from 'react'
import Floor from "./Floor.js"
import Elevator from "./Elevator.js"
import * as ReactBootStrap from "react-bootstrap"


const Building = () => {
    /*Permanent Information - 
        1.num of floors
        2.num of elevators 
    */
        
    const [floors, callAnElevator]= useState([
        {
            id:1,
            buttonWasClicked: false,
        },
        {
            id:2,
            buttonWasClicked: false,
        },
        {
            id:3,
            buttonWasClicked: false,
        },

    ])
        
    

    const elevators=[
        {
            floor:1,
            vacant: true
        },
        {
            floor:1,
            vacant: true
        },
        {
            floor:1,
            vacant: true
        },
    ]
    
    /*Changing information- 
        1.from which floor the elevator was called
        2.array of people who are waiting for an elevator
    */
    /*
    const [callAnElevator, setCallAnElevator] = useState ([
        {
            id:1,
            buttonWasClicked: false
        },
        {
            id:2,
            buttonWasClicked: false
        },
        {
            id:3,
            buttonWasClicked: false
        },
    ])
*/
    const [people, addPerson] = useState([])

    const renderBuilding = (floor) =>{
        return ( 
            <tr>
                    <td>
                        <Floor 
                            id={floor.id} 
                            wasClicked={floor.buttonWasClicked}
                            setClicked={()=>callAnElevator(!floor.buttonWasClicked)}
                        />
                    </td>
                </tr>      
        )
        
        
    } 
    return (
        <div className="container">
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Floor</th>
          </tr>
        </thead>
        <tbody>
          {callAnElevator(floors.map((floor)=> renderBuilding))}

        </tbody>
      </ReactBootStrap.Table>
    </div>
    )
}

export default Building
