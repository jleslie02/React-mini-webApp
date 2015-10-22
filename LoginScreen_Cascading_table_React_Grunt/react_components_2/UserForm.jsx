 /** @jsx React.DOM */



var React = require('react');

module.exports= React.createClass({

  handleSubmit: function(e) {
  


    var email = React.findDOMNode(this.refs.email_log).value.trim();
    var pass = React.findDOMNode(this.refs.pass_log).value.trim();

      var yes = 0, i=0;
      var cust = this.props.customers;
    
    var len = cust.length;
    for (i=0; i<len; i++)
    {
    
          if (cust[i].email == email && cust[i].pass == pass)
          {
                 localStorage.setItem('name', cust[i].name);
                window.location.replace('reactpage_raw.html');
                 yes = 1;  
            
          }
    }

  

    React.findDOMNode(this.refs.email_log).value = '';
    React.findDOMNode(this.refs.pass_log).value = '';
  
  },


  render: function() {
    return (
      <form className="userForm" >
     
       <table id="login_table">
        <thead >
          <tr>
            <th colSpan="2" align ="center">LOGIN SCREEN</th>
         </tr>
        </thead>
      <tbody>
      <tr>
          <td>Email Address</td>
         <td  align="center"><input ref="email_log" id="email_log" type="email" title="Invalid email" required="required" placeholder=" email" ></input></td>
      </tr>
      <tr id="glutalinks">
         <td> Password </td>
         <td  align="center"> <input ref="pass_log" id="pass_log" type="password" placeholder=" password" id="pass" required="required"></input></td>
      </tr>
       <tr>
        <td colSpan="2"> <a href="forgot_password.html"> Forgot password</a></td>
      </tr>
        <tr>
         <td align="center"><input type="submit" onClick={this.handleSubmit} id="login_submit" value="SIGN IN" ></input><span> or </span><a href="loginScreen.html"> Return to the store </a></td>
      </tr>

    </tbody>
  </table>
  </form>
    );
  }
});
