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
var Introduction = React.createClass({displayName: "Introduction",
	render:function(){
		return(
			React.createElement("div", {className: "introduction-box"}
			)
		);
	}
});
var Achievement = React.createClass({displayName: "Achievement",
	render:function(){
		return(
			React.createElement("div", {className: "achievement-box"}
			)
		);
	}
});
var Experience = React.createClass({displayName: "Experience",
	render:function(){
		return(
			React.createElement("div", {className: "experience-box"}
			)
		);
	}
});
var Education = React.createClass({displayName: "Education",
	render:function(){
		return(
			React.createElement("div", {className: "education-box"}
			)
		);
	}
});
var Skill = React.createClass({displayName: "Skill",
	render:function(){
		return(
			React.createElement("div", {className: "skill-box"}
			)
		);
	}
});
var Contact = React.createClass({displayName: "Contact",
	render:function(){
		return(
			React.createElement("div", {className: "contact-box"}
			)
		);
	}
});




var Content = React.createClass({displayName: "Content",
	render: function(){
		return(
			React.createElement("div", {className: "content"}, 
				React.createElement(Introduction, null)
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