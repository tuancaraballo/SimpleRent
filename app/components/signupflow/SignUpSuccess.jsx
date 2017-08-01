var React = require('react');


var textStyle = {
  "font-size": "20px",
  "color":"#5C5C5C",
};
var successColor = {
  "color":"#0fad00",
};

var SignUpSuccess = React.createClass({
  render: function() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <br></br>
        <h2 style={successColor}>Success</h2>
        <img src="http://www.clker.com/cliparts/I/y/N/Q/r/4/house-logo-md.png"/>
          <h3>Dear, Landlord</h3>
          <p style={textStyle}>Thank you for registering. Way to go!.We have sent you an email "landlord@gmail.com" with your details
            Please go to your above email now and login.</p>
          <a href="" className="btn btn-success">     Log in      </a>
          <br> </br>
      </div>
    );
  }
});

module.exports = SignUpSuccess;

// <br><br> <h2 style={successColor}>Success</h2>
// <img src="http://osmhotels.com//assets/check-true.jpg"/>
//
//
// <h3>Dear, Landlord</h3>
// <p style={textStyle}>Thank you for registering. Way to go!.We have sent you an email "landlord@gmail.com" with your details
//   Please go to your above email now and login.</p>
// <a href="" className="btn btn-success">     Log in      </a>
