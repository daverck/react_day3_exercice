import './App.css';
import DateDuJour from './Components/dateDuJour/dateDuJour';
import Compteur from './Components/compteur/compteur';
import Myform from './Components/myform/myform';
import TodoList from './Components/todoList/TodoList';
import ColorButton from './Components/exempleHook/ColorButton';
import DiceGame from './Components/diceGame/DiceGame';
import HangmanGame from './Components/hangmanGame/HangmanGame';

function App() {
  return (
    <div className="App">
      {/* header */}

      {/* zone de navigation */}


      <div className="container mt-2">
          <div className="row">
              <div className="col-3"></div>
              <div className="col-6">

                <DateDuJour/>

                <Compteur/>

                <ColorButton />

                <DiceGame/>

                <Myform/>

                <TodoList />

                <HangmanGame/>

              </div>
              <div className="col-3"></div>
          </div>
      </div>
      
    </div>
  );
}

export default App;
