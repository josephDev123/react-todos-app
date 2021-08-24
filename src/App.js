
import './App.css';
import {addTodo, onDeleteId, editTodo} from './Component/reducers';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { useState } from 'react';


function App() {
  const action = useDispatch();
  const list =useSelector(state => state.todo);
  // state
const [EditForm, setEditForm] =useState(false);
const [text, setText] =useState('');
//handle oninput 
const onHandleText =(e)=>{
  setText(e.target.value)
}

  const handleSubmit =(e)=>{
    e.preventDefault();
    const content_el =document.getElementById('content');
    if(text ===''){
      console.log('Content field is empty');
    }else{
      action(addTodo({
        id:Date.now(),
        text:text
      }))
      content_el.value ='';
    } 
  }

  //handle delete by id or handle of each item
  const handleDelete = (e)=>{
    const delete_id = e.target.parentElement.parentElement.id;
    console.log(delete_id);
    action(onDeleteId(delete_id))
  }

  //edit todos
  const handleEdit=(e)=>{
    const editpostId = e.target.parentElement.parentElement.id;
    const editText = e.target.value;
    // console.log(editText, editpostId);
    action(editTodo({
      id:editpostId,
      text:editText
    }))
    
  }
 
  return (
    <div className="container">
      <div className='row justify-content-center text-center'>
        <div className='col-md-8'>
          <h3>React Todos App</h3>
          <form onSubmit ={handleSubmit}>
              <div className="mb-3" >
                <label htmlFor="content" className="form-label">Todos Content</label>
                <input type="text" className="form-control" id="content" aria-describedby="content" onInput ={onHandleText}/>
              </div>
          </form>

          <ul className="list-group">
            {list.map(list=>
                 <li id={list.id} key={list.id} className="list-group-item d-flex justify-content-between align-items-center">
                 {list.text}
   
                 {
                   // determine what to show btw edit text and edit btn
                 (EditForm ===false)?
                 <span className="badge bg-primary rounded-pill" style={{cursor:'pointer'}} onClick={()=>setEditForm(true)}>Edit</span>:
                 <span className="badge rounded-pill">
                 <input type="text" className="form-control form-control-sm" placeholder="Edit todo" aria-label="edit todo" aria-describedby="edit todo" onChange={handleEdit}/>
             </span>
                 }
                 <span className="badge bg-danger rounded-pill" style={{cursor:'pointer'}} ><i className="fa fa-trash" onClick={handleDelete}></i></span>
               </li>
              
              )}
         
            
          </ul>

        </div>

      </div>
    
    </div>
  );
}

export default App;
