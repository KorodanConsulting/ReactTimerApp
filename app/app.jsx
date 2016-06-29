var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')


// var Route = require('react-router').Route; <--- same as above except above uses object destructuring syntax from es6
//if the path is /about then it'll render About
//however if the path is just / it'll render Weather
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);


