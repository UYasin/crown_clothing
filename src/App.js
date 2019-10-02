import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage  from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component'

const HatsPage = () => (
  <div>
  <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
    <Switch>
    <Route exact={true} path='/' component={HomePage}/>
    <Route exact={true} path='/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
