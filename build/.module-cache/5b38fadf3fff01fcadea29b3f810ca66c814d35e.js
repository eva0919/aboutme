var NavBar = React.createClass({displayName: "NavBar",
  render: function() {
    return (
      React.createElement("div", {className: "navbar"}, 
        "Hello, world! I am a CommentBox."
      )
    );
  }
});

var Main = React.createClass({displayName: "Main",
	render: function(){
		return(
			React.createElement("div", {className: "main"}, 
				"main content"
			)
		);
	}
});

React.render(
  React.createElement(NavBar, null),
  // <Main />,
  document.getElementById('box')
);