/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({


    render:function(){

        var selectCity= this.props.selectCity;
          
            var dataList = this.props.listNames;
            var stateName = this.props.stateName;
            var selectState = this.props.selectState;

  var lis = (dataList).map(function(names){
              
     if (selectCity=="ALL" || (stateName==selectState && selectCity==names)  ){
    return(
            <li>{names}</li>
         );
}

        });

return(
        <td className="ListCity" colSpan="2">
           <ul>
              {lis}
           </ul>
        </td>

      );
       
    }


});