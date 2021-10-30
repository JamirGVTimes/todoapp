import React from 'react';

const TodoList =({todos, setTodos}) =>{
    const handleComplete = (todo) =>{
        setTodos(
            todos.map((item) =>{
                if(item.id === todo.id){
                    return{...item, completd: !item.completd}
                }
                return item;
            })
        );
    };
    const handleDelete = ({id}) =>{
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return(
        <div>
           {todos.map((todo) =>(
               <li className="todo-list" key={todo.id}>
                   <input type="text" value={todo.title} className="list" onChange={(event) => event.preventDefault()} />
                   
                   <div>
                       <button className="del1" onClick ={() => handleDelete(todo)}>
                           Delete
                       </button>
                    
                       <button className="edi1" onClick ={() => handleComplete(todo)}>
                           Completed
                       </button>
                   </div>
               </li>
           ))}
        </div>
    )
}
export default TodoList;