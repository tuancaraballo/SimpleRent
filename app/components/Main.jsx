var React = require('react');

// the this.props.children renders below any component you want,
// below the navbar, but you can put it whereever you want

var Main = (props) => {
	return (
			<div>
  				{props.children}
			</div>
	);
}

module.exports = Main;
