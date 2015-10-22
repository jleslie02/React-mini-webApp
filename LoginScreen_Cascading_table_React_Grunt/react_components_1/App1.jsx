
/** @jsx React.DOM */

var React   = require('react');

var TheReactDiv = require('./TheReactDiv.jsx');


React.render(
  React.createElement(TheReactDiv, {url:"scripts/features.JSON"}),
   document.getElementById("row")
);



