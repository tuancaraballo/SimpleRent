var React = require('react');



/* -- TODO: move this style to css file --- */
const logoStyle = {
  'font-weight':'normal',
  'color':'rgb(34,139,237)',
  'font-family':'Armata, sans-serif'
}

const contactStyle = {
  'color':'rgb(34,139,237)'
}



var SignUpToolbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top navigation-clean navBar-padding" >
        <div className="navbar-header">
          <a className="navbar-brand navbar-link" style={logoStyle}href="#">simple<strong>rent</strong> </a>
          <button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav navbar-right">
            <li role="presentation"><a href="#" style={contactStyle}>Contact Us</a></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#"> </a>
              <ul className="dropdown-menu" role="menu">
                <li role="presentation"><a href="#">First Item</a></li>
                <li role="presentation"><a href="#">Second Item</a></li>
                <li role="presentation"><a href="#">Third Item</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports =  SignUpToolbar;
