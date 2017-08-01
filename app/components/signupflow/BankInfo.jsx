var React = require('react');


// TODO: After submit button, then tell the user he or she has been registered successfully

var BankInfo = React.createClass({
  propTypes: {
        onChange:   React.PropTypes.func
    },

  onFormSubmit: function (e) {
    e.preventDefault();// this prevents the browse from refreshing the whole app.
    var {bankAccount, routingNumber} = this.refs;

    var info = {
      "bankAccount": bankAccount.value,
      "routingNumber" : routingNumber.value,
      "NextPage": "signupsuccess",
    };

    console.log(info);
    /* --  checking that the user has entered all the  neccesary fields --*/
    if (bankAccount.value.length > 0 &&
        routingNumber.value.length > 0) {
       this.props.onChange('bank', info);
       // --> Redirect this to true
       window.location.hash = '#/signupsuccess';
    }else{
      // TODO: throw an alert here or a warning
    }

  },
  render: function() {
    return (
      <div className="space-from-toolbar">
        <h1 className="text-left title-style" >Set Up Your Banking</h1>
        <h5 className="text-left description" >It's time to set up your bank account so that you can receive your tenant's payments. Know that here at simpleRent, the security of your information is our highest priority. Want to hear more about the security details? Feel free to contact us!</h5>

        <form className="sign-up form-style" onSubmit={this.onFormSubmit}>

          <div className="form-group sign-up-group">
            <input className="form-control text-in input-style" type="text" placeholder="ex: 9023834234902" ref="bankAccount"/>
            <span className="label label-default form-label input-label">Bank Account Number</span>
          </div>

          <div className="form-group sign-up-group">
            <input className="form-control text-in input-style" type="text" placeholder="ex: 23487932433432"  ref="routingNumber"/>
            <span className="label label-default form-label input-label">Bank Account Routing Number</span>
          </div>

          <button className="btn btn-link btn-sm pull-right next-button" type="submit">FINISH </button>

      </form>
      </div>
    );
  }
});


module.exports = BankInfo;
