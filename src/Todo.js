import { useState } from "react"
import {useDispatch} from 'react-redux'
import { editTodo } from "./actions"
import { deleteTodo } from "./actions"


function Todo({id,title}){    

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const dispatch = useDispatch()

    const handleTodo =()=>{
        if(newTitle.trim()){
            dispatch(editTodo({id:id,title : newTitle}))
            setEditing(false)
        }
    }
    
    const handleDel = (id)=>{
        dispatch(deleteTodo({id:id}))
    }

    return (
        <div>
            {
                editing ? 

                <div style={{display : 'flex', justifyContent:'space-between'}} className="form-group">
                    <input type="text" className="form-control"  value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
                    <button className="btn btn-secondary" onClick={handleTodo}>Save</button>
                </div>
                :
                <li style={{display : 'flex', justifyContent:'space-between'}} className="list-group-item mt-2">
                    <p>{title}</p>
                    <div className="actions">

                        <button className="btn btn-warning" onClick={()=>setEditing(true)}>Edit</button>
                        <button className="btn btn-danger" onClick={()=>handleDel(id)} >Del</button>

                    </div>
               </li>
            }
            
            
        </div>
    )
}

export default Todo