
import Home from './pages/home/Home';
import Topbar from './topbar/Topbar';
import Login from './logIn/LogIn';
import Register from './register/Register';
import Settings from './settings/Settings';
import Single from './single/Single';
import Write from './write/Write';
import {BrowserRouter as Router ,Switch ,Route}
from 'react-router-dom';

export default function App() {
  const currentUser=true;
  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/posts'>
          <Home/>
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>

        <Route path='/login'>{currentUser ? <Home/>:<Login/>}</Route>

        <Route path='/post/:id'>
          <Single/>


        </Route>
        <Route path='/write'>{currentUser ? <Write/> : <Login/>}</Route>
        <Route path='/settings'>
          {currentUser ? <Settings/> : <Login/>}
        </Route>

      </Switch>

    </Router>
   
     
     
    
    
      
    
  )
}
