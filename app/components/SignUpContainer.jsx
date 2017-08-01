/*
*	Description: Container where the signup stages are contained
*/

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

/*  -- TODO: THIS IMPORT HERE MIGHT BE UNNECESSARY -- */
var {Link, IndexLink} = require('react-router');
var SignUpToolbar = require('SignUpToolbar');
var Navigation = require('Navigation');
var Property = require('Property');
var Tenant = require('Tenant');
var Rent = require('Rent');
var BankInfo = require('BankInfo');
var SignUpSuccess =require('SignUpSuccess');
var Main = require('Main'); // TODO: this is probably unneccessary

/* - - - Importing font styles and customized style sheets for signup forms - - -*/
var webfontloader = require('webfontloader');
webfontloader.load({
  google: {
    families: ['Arimo', 'Armata', 'sans-serif']
  }
});

const css_styleBootstrap = require(__dirname + '/../styles/signupBootstrap.css');
const css_style = require(__dirname + '/../styles/signup.css');


var SignUpContainer = React.createClass({
  getInitialState: function () {
		return {
      CurrentPage: 'property',
			addr1: '',
      addr2: '',
      firstName: '',
      lastName: '',
      email: '',
      monthlyRent: 0,
      deposit: 0,
      isDepositPaid: false,
      dueDate: '',
      bankAccount: undefined,
      routingNumber: undefined,
      property_state: true,
      tenant_state: false,
      rent_state: false,
      bank_state: false,
		};
	},

  updateInfo: function (page, newValues) {
    console.log('--- updateInfo has been called ----');
    console.log(newValues);
    switch (page) {
      case 'property':
        this.setState({
          addr1: newValues.addr1,
          addr2: newValues.addr2,
          CurrentPage: newValues.CurrentPage,
          property_state: true,
        });
        break;
      case 'tenant':
        this.setState({
          firstName: newValues.firstName,
          lastName: newValues.lastName,
          email: newValues.email,
          CurrentPage: newValues.CurrentPage,
          tenant_state: true,
        });
        break;
      case 'rent':
        this.setState({
          monthlyRent: newValues.monthlyRent,
          deposit: newValues.deposit,
          dueDate: newValues.date,
          CurrentPage: newValues.CurrentPage,
          rent_state:true,
        });
        break;
    case 'bank':
          this.setState({
            bankAccount: newValues.bankAccount,
            routingNumber: newValues.routingNumber,
            bank_state:true,
          });
      default:
        break;
    }
  },

  render: function () {
    var {CurrentPage, tenant_state, property_state, rent_state, bank_state} = this.state;
    var that = this; // --> bc any function inside render, will lose access to this context

    return (
      <div>
        <SignUpToolbar/>
        <div className="container">
          <div className= "row ">
              <div className="col-md-8 col-md-offset-1">
                  <Navigation tenantState={tenant_state} propertyState = {property_state} rentState={rent_state} bankState={bank_state}/>
              </div>
          </div>
          <div className= "row ">

            <div className="col-md-6 col-md-offset-2">
              {React.cloneElement(that.props.children, { onChange: that.updateInfo})}
            </div>
          </div>

        </div>
      </div>
    );
  }
});
module.exports = SignUpContainer;

// <Payment/>
// {/*<Rent/>*/}
// {/*<Tenant/>*/}
// {/*<Property/> */}

// <Router history={hashHistory}>
//   <Route path="/" component={Main}>
//     <Route path="rent" component={Rent}/>
//     <Route path="payment" component={Payment}/>
//     <Route path="tenant" component={Tenant}/>
//     <IndexRoute component={Property} />
//   </Route>
// </Router>



//
// render: function () {
//   var {CurrentPage} = this.state;
//



// function renderStages(CurrentPage) {
//    console.log('---------- INSIDE RENDER STAGES --------');
//     switch (CurrentPage) {
//       case 'tenant':
//         return (<Tenant onChange={that.updateInfo}/>);
//       case 'rent':
//         return (<Rent onChange={that.updateInfo} />);
//       case 'payment':
//         return (<Payment onChange={that.updateInfo}/>);
//       default:
//         return (<Property onChange={that.updateInfo}/>);
//     }
// }
