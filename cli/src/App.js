import Login from './pages/login/Login';
import Register from './pages/register/Register';
import TopBar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Single from './pages/single/Single';
import SinglePost from './components/singlepost/SinglePost';
import Search from './pages/search/Search';
import{BrowserRouter as Router, Switch,Route} from 'react-router-dom'



function App() {
  const user =false
  return (
    <Router>
    <TopBar/>
    <Switch>
      <Route exact path='/'>
       <Home/>
      </Route>

      <Route path='/register'>{user ? <Home/>:<Register/>}</Route>
      <Route path='/login'>{user ? <Home/>:<Login/>}</Route>
      <Route path='/search'>{user ? <Home/>:<Search/>}</Route>
      <Route path='/single'>{user ? <Home/>:<SinglePost/>}</Route>
      <Route path='/post/:postId'>
       <Single/>
      </Route>

    </Switch>
    
    
  </Router>
  );
}

export default App;
