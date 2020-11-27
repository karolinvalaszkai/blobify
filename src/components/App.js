import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Navbar from './Navbar/NavbarContainer'
import '../style.css'
import Search from './Search/SearchContainer'
import Playlist from './Playlist/PlaylistContainer'

const App = () => (
    <Router>
      <div className="flexParent">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/" />} />
        </Switch>
        
        <Route path="/" component={Search}></Route>
        <Route path="/myplaylist" component={Playlist}></Route>
        <Route component={Navbar}></Route>
      </div>
  </Router>
)

export default App
