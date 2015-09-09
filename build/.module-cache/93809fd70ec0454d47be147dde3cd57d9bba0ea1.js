var NavBar = React.createClass({displayName: "NavBar",
  render: function() {
    return (
      React.createElement("div", {className: "navbar"}, 
        React.createElement(NavBarList, null)
      )
    );
  }
});
var NavBarList = React.createClass({displayName: "NavBarList",
  render: function() {
    return (
      React.createElement("div", {className: "navbar-list"}, 
      	React.createElement("ul", null, 
	      	React.createElement("li", null, "About"), 
	      	React.createElement("li", null, "Resume"), 
	      	React.createElement("li", null, "Profilo"), 
	      	React.createElement("li", null, "Contact")
      	)
      )
    );
  }
});
var Content = React.createClass({displayName: "Content",
	render: function(){
		return(
			React.createElement("div", {className: "content"}, 
				"main content"
			)
		);
	}
});


var Main = React.createClass({displayName: "Main",
	render: function(){
		return(
			React.createElement("div", {className: "main"}, 
			React.createElement(NavBar, null), 
			React.createElement(Content, null)
			)
		);
	}
});

React.render(
  React.createElement(Main, null),
  document.getElementById('box')
);