import './App.css';
import DateDuJour from './Components/dateDuJour/dateDuJour';
import Compteur from './Components/compteur/compteur';
import Myform from './Components/myform/myform';
import TodoList from './Components/todoList/TodoList';
import ColorButton from './Components/exempleHook/ColorButton';
import DiceGame from './Components/diceGame/DiceGame';
import HangmanGame from './Components/hangmanGame/HangmanGame';
import {Fragment} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mainReducer from './store/main-reducer';
import TodoRedux from './Components/todoRedux/TodoList';


const store = createStore(mainReducer);

function App() {
  return (
    <div className="App">
      {/* menu */}


      {/* zone de navigation */}


      <div className="container mt-2">
          <div className="row">
              <div className="col-3"></div>
              <div className="col-6">

                {/* <DateDuJour/>

                <Compteur/>

                <ColorButton />

                <DiceGame/>

                <Myform/>

                <TodoList />

                <HangmanGame/> */}

                <Fragment>
                  <Provider store={store} >
                    <TodoRedux />
                  </Provider>
                </Fragment>

              </div>
              <div className="col-3"></div>
          </div>
      </div>
      
    </div>
  );
}

export default App;
