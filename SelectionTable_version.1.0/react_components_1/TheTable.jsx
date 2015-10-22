   /** @jsx React.DOM */
var React = require('react');
var TableHead= require('./TableHead.jsx');
var TableBody = require('./TableBody.jsx');
var TableFooter = require('./TableFooter.jsx');

   var therow = {column:-1, row:-1};
   var check=false;
   var idChecked = "";

module.exports = React.createClass({

  SetSelectStates: function (therowSelected)
  {
    therow.column = therowSelected.col;
    therow.row = therowSelected.row;
    check = therowSelected.checked; 
    idChecked = therowSelected.idChecked;
  },

    loadFromServer: function() {

    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function(data)
       {
    
         this.setState({regions: data.regions, subregions: data.countrySubregions, opconil: data.opconil, opco1: data.opCo1, opco2:data.opCo2, opco3:data.opCo3, hybridopco: data.HybridOpCo} );

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },



 getInitialState: function() {
  return {
      regions:[],
      subregions:[],
      countries:[" "," ",""," "," "," "," "," "," "," "],
      opco:["","","","","","","","","",""],
      hybridopco:["","","","","","","","","",""],
      opco1:[],
      opco2:[],
      opco3:[],
      subregion:["","","","","","","","","",""],
      region:["IEMEIA","North America", "Greatest China", "North Asia", "South Asia", "APAC", "","","","",""],
      countrySelected:-1,
      regionSelected:-1,
      subregionSelected:-1,
      opcoSelected:-1,
      hybridOpcoSelected:-1,
      opconil:[],
      rowaction:[]
    };
  },

isClicked:function(whatkey){
  
   {
    if (whatkey == 1)
    {

      if (check && therow.column!=-1)
      {
        

        if (therow.column == 0)
        {
          
            var reg = this.state.regions;
            var mysubObject = reg[therow.row];

            var numsub = therow.row;
         
            var regionaction= {name:this.state.region[numsub], filter:false, cross:true};
            var array = [regionaction, null,null,null,null];

            for(var i in mysubObject)
            {   
              this.setState({regionSelected: numsub, rowaction:array, subregion:mysubObject[i], opco:this.state.opconil, countries:this.state.opconil, hybridopco:this.state.opconil}); 
            }

        }
        else if(therow.column == 1)
        {
          var numsub = therow.row;
          numsub++;

          var numreg = this.state.regionSelected;

          numreg++;

            var name = "countrySub"+numreg+numsub;
            var subreg = this.state.subregions;

            var found = false;


     
            for(var i=0; i< subreg.length && !found; i++)
            { 
              

                var subr = subreg[i];

                for(var j in subr)
                {
                 
                  if (j==name)
                  {
                    
                    var regionaction = {name:this.state.region[this.state.regionSelected], filter:true, cross:true};
                    var subregaction= {name:this.state.subregion[therow.row], filter:false, cross:true};
                    var array = [regionaction, subregaction, null,null,null];

                    this.setState({subregionSelected:therow.row,rowaction:array, opco:this.state.opconil, countries:subr[j], hybridopco:this.state.opconil}); 
                   found = true;
                 }
              }
           }
         }
      
        else if(therow.column == 2)
        {
          var numSub = therow.row;

             var op = this.state.opco3;

              var regionaction = {name:this.state.region[this.state.regionSelected], filter:true, cross:true};
              var subregaction=  {name:this.state.subregion[this.state.subregionSelected], filter:true, cross:true};
              var countryaction = {name:this.state.countries[numSub], filter:false, cross:true};




              var array = [regionaction, subregaction, countryaction,null,null];

              this.setState({countrySelected:therow.row, rowaction:array, opco:op, hybridopco:this.state.opconil}); 
            
        }
        else if(therow.column == 3)
        {
          var numsub = therow.row;

              var regionaction = {name:this.state.region[this.state.regionSelected], filter:true, cross:true};
              var subregaction=  {name:this.state.subregion[this.state.subregionSelected], filter:true, cross:true};
              var countryaction = {name:this.state.countries[this.state.countrySelected], filter:true, cross:true};
              var opcoaction = {name:this.state.opco[numsub], filter:false, cross:true};

              var array = [regionaction, subregaction,countryaction,opcoaction,null];

          this.setState({opcoSelected:therow.row, rowaction:array,  hybridopco:this.state.hybridopco}); 
        }

        else
        {
           var numsub = therow.row;

              var regionaction = {name:this.state.region[this.state.regionSelected], filter:true, cross:true};
              var subregaction=  {name:this.state.subregion[this.state.subregionSelected], filter:true, cross:true};
              var countryaction = {name:this.state.countries[this.state.countrySelected], filter:true, cross:true};
              var opcoaction = {name:this.state.opco[this.state.opcoSelected], filter:true, cross:true};
              var hopaction = {name:this.state.hybridopco[numsub], filter:false, cross:true};
              var array = [regionaction, subregaction,countryaction,opco,hopaction];

             this.setState({hybridOpcoSelected:therow.row, rowaction:array}); 
        }

      }
    }

    else if (whatkey == 0 || whatkey==-1)
    {
      therow.column = -1;
      therow.row = -1;
      check = false;
      var id = "#"+idChecked;
    
     $(id).prop('checked', false);
      this.setState({rowaction:[], regionSelected: -1, subregionSelected:-1, opcoSelected:-1, subregion:this.state.opconil, opco:this.state.opconil, countries:this.state.opconil, hybridopco:this.state.opconil}); 
    }
    
    if (whatkey == -1)
    {
      
       $('.overlay').animate({
            top : '-=300',
            opacity : 0
        }, 400, function() {
            $('#overlay-shade').fadeOut(300);
            $(this).css('display','none');
        });

    }

      
   }

}, 
componentDidMount: function(){
     console.log("oewflknRFK");
     this.loadFromServer();
     console.log("did");

},
    render:function(){

var ctr = this.state.countries;
var reg = this.state.region;
var region = this.state.regions;



return(
       
    React.DOM.table({id:"myTable", className:"table table-bordered"},
        React.createElement(TableHead, {reg:reg, subreg:this.state.subregion, countries:this.state.countries, op:this.state.opco, hop:this.state.hybridopco, rowaction: this.state.rowaction}),
        React.createElement(TableBody, {reg:reg, regions:this.state.regions, subreg:this.state.subregion, countries:this.state.countries, op:this.state.opco, hop: this.state.hybridopco, checkboxChecked:this.SetSelectStates}),
        React.createElement(TableFooter, {applyHandled:this.isClicked}))
     ); 

       
    }


});
  
         