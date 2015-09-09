var NavBar = React.createClass({displayName: "NavBar",
  render: function() {
    return (
      React.createElement("div", {className: "navbar"}, 
        "Hello, world! I am a CommentBox."
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