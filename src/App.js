
import './App.css';

function App() {

  const handleSubmit =()=>{

  }
  
  return (
    <div className="container">
      <div className='row justify-content-center text-center'>
        <div className='col-md-8'>
          <h3>React Todos App</h3>
          <form>
              <div className="mb-3">
                <label htmlFor="content" className="form-label">Todos Content</label>
                <input type="text" className="form-control" id="content" aria-describedby="content" onClick ={handleSubmit}/>
              </div>
          </form>

          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A list item
              <span className="badge bg-primary rounded-pill" style={{cursor:'pointer'}}>Edit</span>
              <span className="badge rounded-pill">
                  <input type="text" className="form-control form-control-sm" placeholder="Edit todo" aria-label="edit todo" aria-describedby="edit todo"/>
              </span>
              <span className="badge bg-danger rounded-pill" style={{cursor:'pointer'}}><i className="fa fa-trash"></i></span>
            </li>
            
          </ul>

        </div>

      </div>
    
    </div>
  );
}

export default App;
