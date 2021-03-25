import { useState } from 'react'

const AddPerson = ({onAdd})=>
{
    const [floor,setFloor] = useState('')

    const onSubmit=(e)=>{
        e.preventDefault()

        if(!floor){
            alert('Please choose a floor')
            return
        }

        onAdd({floor})
        setFloor('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
           <div className='form-control'>
               <label>Floor</label>
               <input type='text' placeholder='Choose Floor' value={floor} 
               onChange={(e)=>setText(e.target.value)} />
           </div>

           <input type='submit' value='Order' 
           className='btn btn-block' />
        </form>
        
    )
}

export default AddPerson