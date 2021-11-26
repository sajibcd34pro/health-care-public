import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services/Services';
import Error from './Pages/Error';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import AuthProvider from './Context/AuthProvider';
import Cart from './Pages/Cart/Cart';
import Details from './Pages/Details/Details';
import PrivateRoute from './Route/PrivateRoute';




function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/cart">
              <Cart></Cart>
            </PrivateRoute>

            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path="/services/:key">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
    </AuthProvider>
     
        <p className="text-center m-0"><small>All Right Reserved 2022©</small></p>
      
    </div>
  );
}

export default App;
