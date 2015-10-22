/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({


    countriesChange: function(e)
        {
             this.props.onClickCountry(e.target.value);

       },


    render: function(){

        var optionsNodes = this.props.countries.map(function(country)
        {

            return (
                    <option value={country}>{country}</option>
                );
        });

        return(
                <select id="countries" value={this.props.selectedCountry} onChange={this.countriesChange}>
                    <option value="ALL" selected >ALL</option>
                     {optionsNodes}
                </select>
            );
        }
    });