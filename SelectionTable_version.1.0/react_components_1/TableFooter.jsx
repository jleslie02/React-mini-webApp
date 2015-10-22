 
/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

handleApply: function(e)
{ 
	if (e.target.name=="apply")
	{	var num=1;
		this.props.applyHandled(num);
	}
else if (e.target.name=="clear")
	{
		var num = 0;
		this.props.applyHandled(num);
	}
	else if (e.target.name=="cancel")
	{
       num=-1;
       this.props.applyHandled(num);
	}
}, 

render:function(){




return(
          <tr className="TableFooter footer">
      		<td><button type="button" onClick={this.handleApply} name="cancel" className="btn btn-default">Cancel</button><button type="button" name="clear" className="btn btn-default" onClick={this.handleApply}>Clear</button></td>
            <td colSpan="3"></td>
            <td ref="apply" id="apply"> <button type="button" name="apply" className="btn btn-default" onClick={this.handleApply}>Apply</button></td>    
         </tr>
      );
       
    }


});
  
