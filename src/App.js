import React from 'react';

import Container from './views/Container'

import { BrowserRouter,Switch, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Container} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
