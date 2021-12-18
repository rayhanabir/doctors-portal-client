import './App.css';
import {BrowserRouter, Switch, Route} from'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
              <Login/>
          </Route>
          <Route path="/register">
              <Register/>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
         
        </Switch>
      </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
