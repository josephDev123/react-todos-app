
import './App.css';

function App() {
  return (
    <div className="container">
      <div className='row justify-content-center text-center'>
        <div className='col-md-6'>
          <h3>React Todos App</h3>
          <form>
              <div className="mb-3">
                <label htmlfor="exampleInputEmail1" class="form-label">Todos Content</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
          </form>

          <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              A list item
              <span className="badge bg-danger rounded-pill"><i className="fa fa-trash"></i></span>
            </li>
            
          </ul>

        </div>

      </div>
    
    </div>
  );
}

export default App;
