

/** @jsx React.DOM */
var React = require('react');
var ListCity  = require('./ListCity.jsx');

module.exports = React.createClass({


    handleClick: function(e){
        if (this.state.classNames=="downImg")
        {this.setState({classNames:"rightImg"});}
    else
        {this.setState({classNames:"downImg"});}


       $(e.target).parent("tr").parent("tbody").children("tr:not(:first-child)").fadeToggle(500);

    },

getInitialState: function() {
  return {classNames:"rightImg"};
  },


render: function(){

    var datas = this.props.states;
  var name = this.props.name;
  var selectCountry = this.props.selectCountry;

        var selectState = this.props.selectState;
        var selectCity= this.props.selectCity;
 
        var keys = Object.keys(datas);
      
       
        var citiesAndStates = (keys).map(function(stateNames){
        if (selectCountry=="ALL" || ((name==selectCountry) && (stateNames==selectState || selectState=="ALL")))
        {
      
return(
    React.DOM.tr( {className: "accordion"}, 
       React.DOM.th( {colSpan:"2"}, stateNames),
      
        React.createElement(ListCity, {selectCity:selectCity, stateName:stateNames, selectState:selectState, listNames:datas[stateNames]})
       
     ) 
 );
}

      
});
  

    return(
             <table className="CountryTable table-striped table table-bordered groups" >
                <tbody>
                    <tr onClick={this.handleClick} >
                        <td colSpan="4"><span className={this.state.classNames}></span>{this.props.name}</td>    
                   </tr>  
                        {citiesAndStates}
                    </tbody>
             </table>

        );
  }

});