

/** @jsx React.DOM */
var React = require('react');
var CountryTable = require('./CountryTable.jsx');

module.exports = React.createClass({

    render: function(){

        var countries = this.props.countryArray;
        var selectCountry= this.props.selectCountry;
        var selectState = this.props.selectState;
        var selectCity= this.props.selectCity;
    

                var i=-1;


                 var countryNodes = (this.props.stat).map(function(nam){
                
                  i++;
                  var name = countries[i];
               //   alert(name);

                  return(

                            React.DOM.tr(null,  
                                React.DOM.td(null, 
                                    React.createElement(CountryTable, {name:name, selectCity:selectCity, selectState:selectState, selectCountry:selectCountry, numCountry:nam, states:nam})
                                )

                            )
                        );
                });


        return (
                <div id="reactDiv" className="GeneralTable col-md-8">
                    <table id="myTable" className="table-bordered">
                           {countryNodes}
                    </table>
              </div>
          ); 
       
        }

    });