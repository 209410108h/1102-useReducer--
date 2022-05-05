import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home_08 from './pages/Home_08'
import About_08 from './pages/About_08'
import SingleCocktail_08 from './pages/SingleCocktail_08'
import Error_08 from './pages/Error_08'
// import components
import Navbar_08 from './components/Navbar_08'
function App_08() {
  return (
    <Router>
      <Navbar_08 />
      <Switch>
        <Route exact path='/'>
           <Home_08 />
        </Route>
        <Route path="/about">
          <About_08 />
        </Route>
        <Route path="/cocktail/:id">
          <SingleCocktail_08 />
        </Route>
        <Route path="*">
          <Error_08 />
        </Route>

      </Switch>
    </Router>
  )
}

export default App_08
