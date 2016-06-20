var React = require('react');

// var About = React.createClass({
// 	render: function () {
// 		return (
// 			<h3>About Components</h3>
// 		)
// 	}
// });

var Countdown = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This small web app was built on React. I have built this with help from an instructor for the purpose of learning react.</p>
			<p>Here are some of the tools I used:</p>
		</div>
	)
};

module.exports = Countdown;