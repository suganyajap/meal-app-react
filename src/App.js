import './App.css';
import AppNavbar from './components/Navbar';
import { MyContext } from './Context';
import Home from './Pages/Home';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { useContext  } from 'react';
import { useEffect } from 'react';
import axios from './Axios';
import Favorites from './Pages/Favorites/Favorites';
function App() {
  const {user,setUser}=useContext(MyContext);
  useEffect (()=>{
    axios.post("/auto-login")
    .then(({data})=>setUser(data))
  },[])
  return (
    <Router>
    
    <div >
      <AppNavbar />
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        {!user &&(
        <>
        <Route exact path="/login">
        <Login />
        </Route>
        <Route exact path="/signup">
        <Signup />
        </Route>
        </>
        )}
        {user && 
        <Route exact path="/my-favorites">
          <Favorites />
          </Route>}
        <Route exact path="**">
        <NotFound />
        </Route>
      </Switch>
     
     </div>
    
    </Router>
  );
}

export default App;
