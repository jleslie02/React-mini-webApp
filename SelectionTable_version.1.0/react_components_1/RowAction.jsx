
      /** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({


    render:function(){

if ((this.props.rowaction).length !=0)
{
    	var myrows = (this.props.rowaction).map(function(myobject)

    	{
    		if (myobject!=null)
    		{
    			if (myobject.filter && myobject.cross)
    			{
    				var nam = ""+myobject.name;
    				return (

    						<td>
    							<table className="borderless">
    							<tr>
    							<td >{nam}</td>
    							
    							<td style={{paddingLeft:60+'px'}}> <i className="action-icon pe-7s-filter pe-2x"></i><i name="de" className="action-icon pe-7s-close-circle pe-2x"></i></td>
    							</tr>
    							</table>
    					
    						</td>
    					);
    			}
    			else if (!myobject.filter && myobject.cross)
    			{
    				var nam = ""+myobject.name;
    			  return(  <td>
    			  				<table className="borderless">
    							<tr>
    							<td >{nam}</td>
    							<td ></td>
    							<td style={{paddingLeft:60+'px'}} ><i className="action-icon pe-7s-close-circle pe-2x"></i></td>
    							</tr>
    							</table>
    					</td>);
    		
    			}
    		}
    		else
    			return (<td></td>);
    	});


    	return (
    				<tr className="RowAction actions">
        				{myrows}
       				</tr>

    		);
 }
    else
    {
    	return(
        <tr className="RowAction actions">
            <td></td>
        	<td></td> 
        	<td></td>   
        	<td></td>
        	<td></td>
        </tr>

      );


    }
}


});
  
         