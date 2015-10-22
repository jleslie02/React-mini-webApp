
      /** @jsx React.DOM */
var React = require('react');
var FirstHead = require('./FirstHead.jsx');
var SecondHead = require('./SecondHead.jsx');
var RowAction = require('./RowAction.jsx');

module.exports = React.createClass({


    render:function(){

      var reg = this.props.region;
      var subreg = this.props.subregion;
      var country = this.props.countries;
      var opco = this.props.opco;
      var hybridopco = this.props.hybridopco;


return(
       
    React.DOM.thead({},
        React.createElement(FirstHead, {}),
        React.createElement(RowAction, {region:reg, rowaction: this.props.rowaction, subregion:subreg, country:country, opco:opco, hybridopco:hybridopco}),
        React.createElement(SecondHead, {})
      ) 
 );
       
    }


});
  
         