import './App.css';
import {BrowserRouter, Switch, Route} from'react-router-dom';
import Home from './Pages/Home/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
