// section for local data initiating
var achieveimentData = [
{price:"4th Place",name:"Firebox",text:"Mozilla Firefox OS App Days",date:"Jan. 2013",},
{price:"Top 5",name:"iTree",text:"XBRL Software Programming Competition",date:"Feb. 2012",},
{price:"Top 5",name:"iTree",text:"NTU Cloud Creativity Competition",date:"Feb. 2012",},
{price:"Outstanding Prize",name:"iTree",text:"Longterm Entrepreneur Competition",date:"Feb. 2012",}
];
var jobData =[
	{job:"Web Developer",project:{name:"Hypo",link:"http://hypo.cc/"},company:"Hypo",date:"Jul. 2014 - Feb. 2015"}
];
// section for react function declaring
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
			React.createElement("div", {className: "introduction-box"}, 
				React.createElement("h2", null, "陳昱安"), 
				React.createElement("h2", null, "Yu-An Chen"), 
				React.createElement("div", {className: "subtitle"}, 
					"Stay Hungry, Stay Foolish."
				), 
				React.createElement(IntroductionContent, null)
			)
		);
	}
});
var IntroductionContent = React.createClass({displayName: "IntroductionContent",
	render:function(){
		return(
			React.createElement("div", {className: "introduction-content-box"}
				
			)
		);
	}
});
var Achievement = React.createClass({displayName: "Achievement",
	render:function(){
		var listNodes = this.props.achi_data.map(function(data){
			return(
				React.createElement("li", null, 
					React.createElement("span", {className: "price"}, data.price), 
					React.createElement("span", {className: "name"}, data.name), ",", 
					React.createElement("span", {className: "text"}, data.text), 
					React.createElement("div", {className: "date"}, data.date)
				)
			);
		});
		return(
			React.createElement("div", {className: "achievement-box"}, 
				React.createElement("h2", {className: "title_text"}, "Achievement"), 
				React.createElement("ul", null, 	
					listNodes
				)
			)
		);
	}
});
var Experience = React.createClass({displayName: "Experience",
	render:function(){
		var listNodes = this.props.job_data.map(function(data){
			return(
				React.createElement("li", null, 
					React.createElement("span", {className: "job"}, data.job), ",", 
					React.createElement("span", {className: "company"}, data.company), 
					React.createElement("div", {className: "date"}, data.date), 
					"// ", React.createElement(ProjectList, {list_data: data.project})
				)
			);
		});
		return(
			React.createElement("div", {className: "experience-box"}, 
				React.createElement("h2", {className: "title_text"}, "Experience"), 
				React.createElement("ul", null, 	
					listNodes
				)
			)
		);
	}
});
var ProjectList = React.createClass({displayName: "ProjectList",
// 	render:function(){
// 		var nodes = this.props.list_data.map(function(project){
// 			return(
// 				// <li><a href={project.link}>{project.name}</li>
// 			);
// 		});
// 		return(
// 			<ul>
// 				{nodes}
// 			</ul>
// 		);
// 	}
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
				React.createElement(Introduction, null), 
				React.createElement(Achievement, {achi_data: this.props.achi_data}), 
				React.createElement(Experience, {job_data: this.props.job_data}), 
				React.createElement(Education, null), 
				React.createElement(Skill, null), 
				React.createElement(Contact, null)
			)
		);
	}
});


var Main = React.createClass({displayName: "Main",

	render: function(){
		return(
			React.createElement("div", {className: "main"}, 
			React.createElement(NavBar, null), 
			React.createElement(Content, {achi_data: this.props.achi_data, job_data: this.props.job_data})
			)
		);
	}
});

React.render(
  React.createElement(Main, {achi_data: achieveimentData, job_data: jobData}),
  document.getElementById('box')
);