var React = require('react')

var App = React.createClass({

	getInitialState: function() {
		return {
			counter: 0
		}
	},

	changeCounter: function() {
		this.setState({
			counter: this.state.counter + 1
		})
	},


	render: function() {
		return (

			<div>
				<button onClick={this.changeCounter}>{this.state.counter} {this.state.counter > 1 ? "likes" : "like"}</button>
			</div>

		)
	}
})


module.exports = App