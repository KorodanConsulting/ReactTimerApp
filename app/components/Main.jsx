var React = require('react');
var Navigation = require('Navigation');


var Main = (props) => {
	return (
		<div>
		<Navigation />
			<div>
				<div >
					main.jsx Rendered
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports = Main;