import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import styles from "./components/styles.module.css"

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentItem, setCurrentItem] = useState("");
  
  const handleAddButton = (e) =>{
    e.preventDefault();
    //create object for each new todo:
    const todoItem ={
      theItem: currentItem,
      complete: false 
    }
    // add to the list:
    setTodoList([...todoList, todoItem]);
    setCurrentItem("");
  }

  //Delete:
  function handleDelete (idx){
    const newArr = todoList.filter((item,i) => {
      return i != idx;
    } )
    setTodoList(newArr);
  }

  //CheckBox;
  const handleCheckBox = (idx) =>{
    const updatedTodoList = todoList.map((todo, i) => {
      if(i == idx){
        todo.complete = !todo.complete;
      }
      return todo;
    })
    setTodoList(updatedTodoList);
  }

  return(
    <div style={{textAlign: "center"}}>
      <form onSubmit={handleAddButton}>
        <input type="text" value={currentItem} onChange={e => setCurrentItem(e.target.value)} />
        <div>
          <button className="btn btn-danger">Add</button>
        </div>
      </form>

      <div style={{margin: "20px"}}>
        {todoList.map((todo, index) => {
          const todoClasses = ["bold", "italic"];
          if(todo.complete){
            todoClasses.push("line-through");
          }
          return (
            <div key={index}>
              <input type="checkbox" checked={todo.complete} onChange={e => handleCheckBox(index)} />
              <span className={todoClasses.join(" ")}>{todo.theItem}</span>
              <button className="btn btn-danger" onClick={e => handleDelete(index)}>Delete</button>
            </div>
          );
        })}
      </div>
      

    </div>
  );


}


export default App;
