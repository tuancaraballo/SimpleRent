var React = require('react');


var Tenant = React.createClass({
  propTypes: {
        onChange:   React.PropTypes.func
    },

	onFormSubmit: function (e) {
		e.preventDefault();// this prevents the browse from refreshing the whole app.
    var {tenantFirst, tenantLast, tenantEmail} = this.refs;
    console.log(tenantFirst.value);

    var info = {
			"firstName ": tenantFirst.value,
			"lastName" : tenantLast.value,
      "email": tenantEmail.value,
			"NextPage": "rent",
		}

    console.log(info);
    /* --  checking that the user has entered all the fields --*/
		if (tenantFirst.value.length > 0 &&
        tenantLast.value.length > 0 &&
        tenantEmail.value.length > 0) {
			  this.props.onChange('tenant', info);
			 window.location.hash = '#/rent';
		}else{
      // TODO: through an alert here
    }

	},
  render: function(){
    console.log('------ Got to the tenant screen ----- ');
    return (
      <div className="space-from-toolbar">
        <h1 className="text-left title-style" >Add A Tenant</h1>
        <h5 className="text-left description" >Now let's add a tenant to that property! Add the tenant that will be the primary payer.</h5>

      <form className="sign-up form-style" onSubmit={this.onFormSubmit}>

          <div className="form-group sign-up-group">
            <input className="form-control text-in input-style" type="text" ref="tenantFirst" placeholder="ex: Leland"/>
            <span className="label label-default form-label input-label">Tenant's First Name</span>
          </div>

          <div className="form-group sign-up-group">
            <input className="form-control text-in input-style" type="text" ref="tenantLast" placeholder="ex: Stanford"/>
            <span className="label label-default form-label input-label">Tenant's Last Name</span>
          </div>

          <div className="form-group sign-up-group">
            <input className="form-control text-in input-style" type="text" ref="tenantEmail" placeholder="ex: goCardinals@stanford.edu"/>
            <span className="label label-default form-label input-label">Tenant's Email</span>
          </div>
          <button className="btn btn-link btn-sm pull-right next-button " type="submit" >NEXT </button>
        </form>

      </div>
    );
  }
});



module.exports = Tenant;
