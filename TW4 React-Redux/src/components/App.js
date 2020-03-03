import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Sidebar from './container/SidebarContainer'
import Search from './container/SearchContainer'
import Summary from './container/SummaryContainer'
import Details from './container/DetailsContainer'
import '../style.css'

const App = () => (
    <Router>
      <div className="flexParent">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/search" />} />
        </Switch>
        <Sidebar />
        <Route path="/search" component={Search}></Route>
        <Route path="/summary" component={Summary}></Route>
        <Route path="/details" component={Details}></Route>
      </div>
  </Router>
)

export default App
