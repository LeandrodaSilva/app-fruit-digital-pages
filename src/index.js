import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './pages/home';
import reportWebVitals from './reportWebVitals';
import {Route, Router, Switch} from "react-router-dom";
import Fruit from "./pages/fruit";
import { createBrowserHistory } from "history";
import 'material-icons/iconfont/material-icons.css';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Index/>
        </Route>
        <Route path="/fruit/:name">
          <Fruit/>
        </Route>
      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
