import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Components/Home"
import Trending from "./Components/Trending"
import Browse from "./Components/Browse"
import SearchPage from "./Components/SearchPage"
import MovieDetails from "./Components/MovieDetails"

const App = () => {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/trending">
              <Trending />
            </Route>

            <Route path="/movies/:title">
              <MovieDetails />
            </Route>

            <Route path="/movies">
              <SearchPage />
            </Route>

            <Route path="/browse">
              <Browse />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App