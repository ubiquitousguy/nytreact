// Include React and React-Router dependencies
var React = require('react');

var Query = React.createClass({

	//Set initial variables for the component to be blanks
	getInitialState: function(){
		return {
			search: "",
			start: "",
			end: "",
		}
	},
  //ANY change in the textbox, we register it.
    handleChange: function(event) {
    	console.log("TEXT CHANGED");
      var newState = {};
  		newState[event.target.id] = event.target.value;
  		this.setState(newState);
  	},

    /*This code handles the sending of the search terms to the parent Search component*/
	handleSubmit: function(){
		console.log("CLICKED");
		this.props.updateSearch(this.state.search, this.state.start, this.state.end);
		return false;
	},
