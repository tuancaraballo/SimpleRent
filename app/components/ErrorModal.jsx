var React = require('react');

var ErrorModal = React.createClass({
	getDefaultProps: function () {
		return {
			title: 'Error',
		};
	},
	proptypes: {
		title: React.PropTypes.string,
		message: React.PropTypes.string.isRequired,
	},
	componentDidMount: function () {
		$('#error-modal').modal('show');
	},
	render: function() {
		
		var {title, message} = this.props;

		return (
			<div id="error-modal" className="modal fade" tabindex="-1" role="dialog">
  				<div className="modal-dialog" role="document">
    				<div className="modal-content">
      					<div className="modal-header">
        					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        					<h4 className="modal-title">{title}</h4>
      					</div>
      					
      					<div className="modal-body">
        					<p>{message}</p>
      					</div>
      					
      					<div className="modal-footer">
        					<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
      					</div>
    				</div>
  				</div>
			</div>
		);
	}
});

module.exports = ErrorModal;