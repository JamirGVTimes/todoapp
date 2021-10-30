import React, {useEffect} from 'react';
import {v4 as uuidv4} from "uuid";
const FormY = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    
    useEffect(() =>{
        if(editTodo){
            setInput(editTodo.title);
        }else {
            setInput("");
        }
    }, [setInput, editTodo]);
    
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onFormSubmit =(event) => {
        event.preventDefault();
        if(!editTodo){
        setTodos([...todos, {id: uuidv4(), title: input, completed:false}]);
        setInput("");
        }else{
            
        }
    };
    return (
        <form onSubmit={onFormSubmit}>
            <input
            type="text"
            placeholder="Type here..."
            className="inp1"
            value={input}
            required
            onChange={onInputChange}
            />
            <button className="subm1" type="submit">Add Person</button>
        </form>
    )
}
export default FormY;