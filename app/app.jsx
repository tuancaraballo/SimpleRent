var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var SignUpContainer = require('SignUpContainer');
var Property = require('Property');
var Tenant = require('Tenant');
var Rent = require('Rent');
var BankInfo = require('BankInfo');
var SignUpSuccess =require('SignUpSuccess');
var Main = require('Main'); // TODO: this is probably unneccessary


ReactDOM.render(
  <Router history={hashHistory}>
    <Route component = {Main}>

      <Route path="/" component={SignUpContainer} >
        <Route path="rent" component={Rent}/>
        <Route path="payment" component={BankInfo}/>
        <Route path="tenant" component={Tenant}/>
        <Route path="signupsuccess" component={SignUpSuccess}/>
        <IndexRoute component={Property} />
      </Route>

    </Route>
  </Router>,
  document.getElementById('app')
);
