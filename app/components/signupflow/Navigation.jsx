var React = require('react');

// <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
var {Link, IndexLink} = require('react-router');

var activeCircle = {
  "background": "#228bed",
  "color": "#fff"
};

var disabledCircle = {
  "opacity": "1!important",
  "filter" :"alpha(opacity=100)!important",
  "background-color": "#adb2c6",
  "color": "#fff",
};

var activeStep = {
  "color": "#228bed",
  "font-family": "Armata, sans-serif",
};

var disabledStep = {
  "color": "#adb2c6",
  "font-family": "Armata, sans-serif",
};

var Navigation = React.createClass({

  handleColors: function(element, state){

    if (element == 'step'){
      if(state == true) return activeStep;
      return disabledStep;
    }else if (state == true){
        return activeCircle;
    }
    return disabledCircle;
  },

  render: function() {
    var {tenantState, rentState, propertyState, bankState} = this.props;

    var actclass = 'btn-active';
    var deactclass = 'btn-disable';
    return (
      <div className="cont-wizard space-from-toolbar">
        <div className="stepwizard">
          <div className="stepwizard-row">

            {/* --- Property --- */}
            <div className="stepwizard-step">
              <IndexLink to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="btn btn-link btn-circle" style={this.handleColors('circle', propertyState)}> 1 </IndexLink>
              {/*}<button type="button" className="btn btn-link btn-circle" style={this.handleColors('circle', propertyState)}>1</button>*/}
              <p style={this.handleColors('step', propertyState)}>Property</p>
            </div>
            {/* --- Tenant --- */}
            <div className="stepwizard-step">
              <Link to='/tenant' activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="btn btn-link btn-circle" style={this.handleColors('circle', tenantState)}> 2 </Link>
            {/*  <button type="button" className="btn btn-link btn-circle" style={this.handleColors('circle', tenantState)} ><b>2</b></button>*/}

            <p style={this.handleColors('step', tenantState)}>Tenant</p>
            </div>
            {/* --- Rent --- */}
            <div className="stepwizard-step">
                <Link to='/rent' activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="btn btn-link btn-circle" style={this.handleColors('circle', rentState)}> 3 </Link>
              {/*}<button type="button" className="btn btn-link btn-circle" style={this.handleColors('circle', rentState)} >3</button> */}
              <p style={this.handleColors('step', rentState)}>Rent</p>
            </div>
            {/* --- Bank Info --- */}
            <div className="stepwizard-step">
              <Link to='/bankinfo' activeClassName="active" activeStyle={{fontWeight: 'bold'}} className="btn btn-link btn-circle" style={this.handleColors('circle', bankState)}> 4 </Link>
              {/*<button type="button" className="btn btn-link btn-circle" style={this.handleColors('circle', bankState)}>4</button> */}
              <p style={this.handleColors('step', bankState)}>Bank Info</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
