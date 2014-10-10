/** @jsx React.DOM */

var App = React.createClass({
	render: function() {
		return <p>Hello World!</p>;
	}
});

React.renderComponent(<App />, document.getElementById('content'));