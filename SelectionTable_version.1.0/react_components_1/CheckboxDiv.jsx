 
/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

    render:function(){
 	
    	var name = this.props.name;
    	var opco = this.props.opco;
    	var country = this.props.country;
    	var hybrid = this.props.hybrid;
    	var subreg = this.props.subreg;
    	var index=this.props.divNumber;
    	

    	var arrayRow = [name, subreg[index], country[index], opco[index], hybrid[index]];

    	var therow = (arrayRow).map(function(nam, key){

    		 if(nam!="" && nam != " ")
    		 {
    		 	 var id = nam.replace(/\s/g, '');
    		 
    	return <td>	<div className="checkbox" >
                        <input id={id} name="radio" data-row={index} data-col={key} type="radio"></input>    
                        <label htmlFor={id}>
                            {nam}
                        </label>
                       <i name="de" className="pe-7s-angle-right pe-3x pe-va"></i>
                    </div>
            </td>
             }
    else
    {

    	return <td></td>
    }

    	});
   

return(
       <tr className="CheckboxDiv">
       	{therow}
        </tr>

      );
       
    }


});
  







