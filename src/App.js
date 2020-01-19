import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch,Route} from 'react-router-dom';

function Hats(props){
  console.log(props);
  return(
    <div>
      Hats Page
    </div>

  )
}

function App() {
  return (
    <div >
      <Switch>
      <Route exact path='/' component={HomePage} ></Route>
      <Route path='/shop/hats' component={Hats}></Route>
      </Switch>
    </div>
  );
}

export default App;
