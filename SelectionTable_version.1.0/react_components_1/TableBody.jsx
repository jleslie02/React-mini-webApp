 
/** @jsx React.DOM */
var React = require('react');
var CheckboxDiv = require('./CheckboxDiv.jsx');
var NullRow = require('./NullRow.jsx');

var previousRadio={id:""};

module.exports = React.createClass({


selectedCheckbox: function (e) 
    	{ 
    		if (e.target.type=="radio")
    		{

    			 var c = e.target.getAttribute("data-col");
    			 var r = e.target.getAttribute("data-row");

    			var f =  $(e.target).is(":checked");

    			
    		 if(previousRadio.id==e.target.getAttribute("id"))
    			 {
    			 	 previousRadio.id="";

    			 	 $(e.target).prop('checked', false);
    			 	 this.props.checkboxChecked({col:c, row:r, checked:false, idChecked:previousRadio});
    			 	// alert("unchecked");
    			 }
    		else    			
    			{
    				previousRadio.id = e.target.getAttribute("id");
    				this.props.checkboxChecked({col:c, row:r, checked:true, idChecked:e.target.getAttribute("id")});
    				

    			}
    		

    			
    		}
    	},
 	

    render:function(){

    	var reg = this.props.reg;
   
    	 var subreg = this.props.subreg;

    	var opco = this.props.op;
    	var country = this.props.countries;
    	var subreg = this.props.subreg;
 	 
    	var hybrid = this.props.hop;

console.log(hybrid);

var region = (reg).map(function(name, key){
  if (name!="")
  {
  
  return(

            React.createElement(CheckboxDiv, {name:name, divNumber:key, subreg:subreg, opco:opco, hybrid:hybrid, country:country})
        );

 	
  }
else {

		return (
  			
  				 React.createElement(NullRow)               
  			  );

  }
});



return(
          React.DOM.tbody( {refclassName:"TableBody", onClick:this.selectedCheckbox}, 
          	{region}
         )
      );
       
    }


});
  

