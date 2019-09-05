import React from "react";
import ReactDOM from "react-dom";
import { Router, Switch, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import App from "./components/App";
import Jokes from  "./components/Jokes";
import "./index.css";


ReactDOM.render(
<Router history={createBrowserHistory()}>
  <Switch>
    <Route exact path='/' render={() => <Header><App /></Header>} />
<Route path='/jokes'  render={() => <Header><Jokes /></Header>} />
  </Switch>
</Router>,
 document.getElementById("root"));

// new Promise((resolve, reject) => {
//   return reject(new Error('No bears'));

//   setTimeout(() => {
//     resolve('Bears, Beets, Battlestar Galactica');
//   }, 2000);
// })
// .then(quote => {
//   console.log(quote);
// })
// .catch(error => console.log('error', error));
