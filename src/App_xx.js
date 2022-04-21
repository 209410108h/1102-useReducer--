import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home_xx from './pages/Home_xx'
import About_xx from './pages/About_xx'
import SingleCocktail_xx from './pages/SingleCocktail_xx'
import Error_xx from './pages/Error_xx'
// import components
import Navbar_xx from './components/Navbar_xx'
function App_xx() {
  return (
    <Router>
      <Navbar_xx />
      <Switch>
        <Route exact path='/'>
           <Home_xx />
        </Route>
        <Route path="/about">
          <About_xx />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail_xx />
        </Route>
        <Route path="*">
          <Error_xx />
        </Route>

      </Switch>
    </Router>
  )
}

export default App_xx
