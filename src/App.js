import './App.css';
import DateDuJour from './Components/dateDuJour/dateDuJour';
import Compteur from './Components/compteur/compteur';
import Myform from './Components/myform/myform';
import TodoList from './Components/todoList/todoList';

function App() {
  return (
    <div className="App">
      {/* <DateDuJour/>
      <Compteur/> */}

      <div className="container mt-2">
          <div className="row">
              <div className="col-3"></div>
              <div className="col-6">
                {/* <Myform/> */}

                <TodoList/>

              </div>
              <div className="col-3"></div>
          </div>
      </div>
      
    </div>
  );
}

export default App;
