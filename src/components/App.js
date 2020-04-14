import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Navbar from './Navbar/NavbarContainer'
import BlobifyMenu from './BlobifyMenu/BlobifyContainer'
import About from './About/AboutContainer'
import '../style.css'
import Search from './Search/SearchContainer'
import Playlist from './Playlist/PlaylistContainer'

const App = () => (
    <Router>
      <div className="flexParent">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/trending" />} />
        </Switch>
        
        <Route path="/trending" component={Search}></Route>
        <Route path="/myplaylist" component={Playlist}></Route>
        <Route component={Navbar}></Route>
        <Route component={BlobifyMenu}></Route>
        <Route component={About}></Route>
      </div>
  </Router>
)

export default App
