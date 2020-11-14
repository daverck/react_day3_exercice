import './App.css';
import DateDuJour from './Components/dateDuJour/dateDuJour';
import Compteur from './Components/compteur/compteur';
import Myform from './Components/myform/myform';
import TodoList from './Components/todoList/TodoList';
import ColorButton from './Components/exempleHook/ColorButton';
import DiceGame from './Components/diceGame/DiceGame';
import HangmanGame from './Components/hangmanGame/HangmanGame';
// import {Fragment} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mainReducer from './store/main-reducer';
import TodoRedux from './Components/todoRedux/TodoList';
import {BrowserRouter as Router ,
        Switch,
        Route,
        Link} from 'react-router-dom';


const store = createStore(mainReducer);

function App() {
  return (
    <div className="App">
      <Router>
        {/* menu */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav">
              <li className="nav-item"> 
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/today_date" className="nav-link">Date du jour</Link>
              </li>
              <li className="nav-item">
                <Link to="/counter" className="nav-link">Compteur</Link>
              </li>
              <li className="nav-item">
                <Link to="/color_button" className="nav-link">Bouton avec react-hook</Link>
              </li>
              <li className="nav-item">
                <Link to="/dice_game" className="nav-link">Jeu de dés</Link>
              </li>
              <li className="nav-item">
                <Link to="/form" className="nav-link">Formulaire</Link>
              </li>
              <li className="nav-item">
                <Link to="/todolist" className="nav-link">Todolist</Link>
              </li>
              <li className="nav-item">
                <Link to="/hangman" className="nav-link">Jeu du pendu</Link>
              </li>
              <li className="nav-item">
                <Link to="/todolist_redux" className="nav-link">Todolist avec react-redux</Link>
              </li>
            </ul>
          </nav>


        {/* zone de navigation */}
        <div className="container mt-2">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">

                <Switch>
                  <Route path="/today_date">
                    <DateDuJour/>
                  </Route>
                  <Route path="/counter">
                    <Compteur/>
                  </Route>
                  <Route path="/color_button">
                    <ColorButton />
                  </Route> 
                  <Route path="/dice_game">             
                    <DiceGame/>
                  </Route>         
                  <Route path="/form">
                    <Myform/>
                  </Route>
                  <Route path="/todolist">
                    <TodoList />
                  </Route>
                  <Route path="/hangman">
                    <HangmanGame/>
                  </Route>          
                  <Route path="/todolist_redux">
                    <Provider store={store} >
                      <TodoRedux />
                    </Provider>
                  </Route>
                </Switch>

                </div>
                <div className="col-3"></div>
            </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
