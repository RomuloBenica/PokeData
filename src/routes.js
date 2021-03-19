import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import ListPokemon from "./pages/ListPokemon";

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ListPokemon} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;