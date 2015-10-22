/** @jsx React.DOM */

var React = require('react');
var SelectCountries = require('./SelectCountries.jsx');
var GeneralTable = require('./GeneralTable.jsx');

module.exports = React.createClass({

    loadCommentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data)
       {
         this.setState({features: data.allState, countries: data.countries});
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

 getInitialState: function() {
  return {
      features:[],
      countries:[],
      selectedCountry:"ALL",
      selectedState:"ALL",
      selectedCity:"ALL",
    
    };
  },

  componentDidMount: function()
   {
   
     this.loadCommentsFromServer();
    

   },

clickCountry: function(countryName)
        {
           
                this.setState({selectedCity:"ALL", selectedState:"ALL", selectedCountry:countryName})
       
           
      },

clickState: function(e)
        {
              this.setState({selectedCity:"ALL", selectedState:e.target.value})
        
       },

clickCity:function(e)
        {
             this.setState({selectedCity:e.target.value});
       },

render: function()
{


var stat = this.state.features;
var countries = this.state.countries;


var keysStates=[];
var keysCities=[];

var indexCountry = countries.indexOf(this.state.selectedCountry);
 var indexCity=-1;

var optionsStatesNode = null, optionsCityNode=null;

//console.log(this.state.selectedCountry);



if (indexCountry == -1)
    {
        optionsStateNode =  React.createElement("option", {value: "ALL"}, "ALL");
        optionsCityNode =  React.createElement("option", {value: "ALL"}, "ALL");
    }
 else
     {  
        


        
        keysStates = Object.keys(stat[indexCountry]);
      
       
        optionsStateNode = keysStates.map(function(names){

                return(
                        <option value={names}>{names}</option>
                      );
            });

         indexCity= keysStates.indexOf(this.state.selectedState);
      

        if (indexCity != -1)
        {
          

            keysCity = stat[indexCountry][this.state.selectedState];

            optionsCityNode = keysCity.map(function(names){
              
                return(
                        <option value={names}>{names}</option>
                      );
          
        });
   }
}

   
    return(
            React.DOM.div( {className:"TheReactDiv row"}, 

            React.createElement(SelectCountries, {countries:countries, selectedCountry:this.state.selectedCountry, onClickCountry:this.clickCountry}),
            
            React.DOM.select( {id:"states", selectedState:this.state.selectedState, value:this.state.selectedState, onChange:this.clickState}, 
            
            React.DOM.option( {value:"ALL", selected:true} , "ALL"),
                 optionsStateNode
            ),

            React.DOM.select( {id:"cities", value:this.state.selectedCity, selectedCity:this.state.selectedCity, onChange:this.clickCity}, 
             React.DOM.option( {value:"ALL", selected:true}, "ALL"),
               optionsCityNode
            ),

             React.createElement(GeneralTable, {countryArray:countries, selectState:this.state.selectedState, selectCountry:this.state.selectedCountry, selectCity:this.state.selectedCity, stat:stat})
        )
        );
}



});