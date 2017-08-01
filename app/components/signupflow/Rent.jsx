var React = require('react');

var Rent = React.createClass({
  propTypes: {
        onChange:   React.PropTypes.func
    },

	onFormSubmit: function (e) {
		e.preventDefault();// this prevents the browse from refreshing the whole app.
    var {monthlyRent, deposit, isPaid, dueDate} = this.refs;

    // TODO: this checkbox needs to be resetted after triggering this action
    var isDepositPaid = ((isPaid.value == 'on') ? true : false);


    var info = {
			"monthlyRent" : monthlyRent.value,
			"deposit" : deposit.value,
      "isDepositPaid": isDepositPaid,
			"NextPage": "bankinfo"
		};

    console.log(info);
    /* --  checking that the user has entered all the  neccesary fields --*/
		if (monthlyRent.value.length > 0 &&
        deposit.value.length > 0) {
			 this.props.onChange('rent', info);
			 window.location.hash = '#/bankinfo';
		}else{
      // TODO: through an alert here or a warning
    }

	},
  render: function() {
    return (
      <div className="space-from-toolbar">
        <h1 className="text-left title-style">Set Up Rent</h1>
        <h5 className="text-left description">It's time to set up this tenant's monthly rent and security deposit!</h5>

        <form className="sign-up form-style" onSubmit={this.onFormSubmit}>

          <div className="form-group sign-up-group">
            <input className="form-control text-in input-style" type="text" placeholder="$1200" ref="monthlyRent"/>
            <span className="label label-default form-label input-label">Monthly Rent Amount</span>
          </div>

          <div className="form-group sign-up-group">
            <input className="form-control text-in input-style" type="text" placeholder="$2000" ref="deposit"/>
            <span className="label label-default form-label input-label">Security Deposit Amount</span>
          </div>

          <div className="form-group">
            <div className="checkbox">
              <label className="control-label">
                <input type="checkbox" ref="isPaid">Security Deposit has been paid</input>
              </label>
            </div>
          </div>

          <div className="form-group sign-up-group">
            <input className="form-control text-in input-style" type="text" placeholder="MM/DD/YY" ref="dueDate"/>
            <span className="label label-default form-label input-label">Starting lease date</span>
          </div>

          <button className="btn btn-link btn-sm pull-right next-button" type="submit"> NEXT </button>

      </form>
    </div>

      );
    }
  });

module.exports = Rent;
