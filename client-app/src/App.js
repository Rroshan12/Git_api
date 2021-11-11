import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
   
    
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail" exact component={Detail} />
      </Switch>
  
  </BrowserRouter>
  )
}

export default App
