import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import './App.css'

function App() {

  return (
   
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/income">Income</Link>
            </li>
            <li>
              <Link to="/expense">Expense</Link>
            </li>
            <li>adnan</li>
          </ul>
        </nav>

        <Switch>
          <Route path="/income" component={IncomePage} />
          <Route path="/expense" component={ExpensePage} />
        </Switch>
      </div>
    </Router>
   
  )
}

export default App
