
/** @jsx React.DOM */
 var customers = [{name: "Alain", email: "alain@al.com", pass: "me"}, 
                    {name: "Marc", email: "marc@ma.com", pass: "you"}, 
                     {name: "john", email: "john@jo.com", pass: "him"}];

var React   = require('react');

var UserForm = require('./UserForm.jsx');

React.render(
  React.createElement(UserForm, {customers:customers}),
  document.getElementById("loginDiv")
);


