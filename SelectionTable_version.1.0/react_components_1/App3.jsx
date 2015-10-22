
/** @jsx React.DOM */

var React   = require('react');

var TheTable= require('./TheTable.jsx');


React.render(
  React.createElement(TheTable, {url:"scripts/features.JSON"}),
   document.getElementById("tablediv")
);



