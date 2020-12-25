// import { Route, Switch, Link } from "react-router";
import './App.css';
import User from './components/User'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import { Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Header />
        <div className="container">
            <Route exact path="/user" component = {User} />
            <Route exact path="/dashboard"  component = {Dashboard} />
        </div>
    </div>
  );
}

export default App;
