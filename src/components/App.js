import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Navbar from './container/NavbarContainer'
import '../style.css'
import Search from './container/SearchContainer'
import Playlist from './container/PlaylistContainer'

const App = () => (
    <Router>
      <div className="flexParent">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/trending" />} />
        </Switch>
        <Navbar />
        <Route path="/trending" component={Search}></Route>
        <Route path="/myplaylist" component={Playlist}></Route>
      </div>
  </Router>
)

export default App
