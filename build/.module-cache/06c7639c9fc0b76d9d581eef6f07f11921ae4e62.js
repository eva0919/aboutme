// section for local data initiating
var achieveimentData = [
{price:"4th Place",name:"Firebox",text:"Mozilla Firefox OS App Days",date:"Jan. 2013",},
{price:"Top 5",name:"iTree",text:"XBRL Software Programming Competition",date:"Feb. 2012",},
{price:"Top 5",name:"iTree",text:"NTU Cloud Creativity Competition",date:"Feb. 2012",},
{price:"Outstanding Prize",name:"iTree",text:"Longterm Entrepreneur Competition",date:"Feb. 2012",}
];
var jobData =[
	{job:"Web Developer",
	link:"http://pieces.hypo.cc/",
	company:"Hypo",date:"Jul. 2014 - Feb. 2015"},
	{job:"Intern",
	link:"http://tmi.vc/",
	company:"TMI",date:"Sep. 2012 - Dece. 2012"}
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
			React.createElement("div", {className: "introduction-content-box"}, 
				React.createElement("h2", {className: "title_text"}, "Introduction"), 
				"Hi!I am Chen, graduated from National Taiwan University. Passionate about computer science and enthused over developing products. I believe that technology will make our life better not only wealthier."
			
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
					React.createElement("span", {className: "job"}, data.job, ","), 
					React.createElement("span", {className: "company"}, React.createElement("a", {target: "_blank", href: data.link}, data.company)), 
					React.createElement("div", {className: "date"}, data.date)
					
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

var Education = React.createClass({displayName: "Education",
	render:function(){
		return(
			React.createElement("div", {className: "education-box"}, 
				React.createElement("h2", {className: "title_text"}, "Education"), 
				React.createElement("div", {className: "school-box"}, 
					React.createElement("div", {className: "school-name"}, "National Taiwan University Taipei, Taiwan"), 
						React.createElement("ul", null, 
							React.createElement("li", null, "Master of Information Management", 
								React.createElement("div", {className: "date"}, "Sep. 2013 – Jul. 2015")
							), 
							React.createElement("li", null, "Bachelor of Information Management", 
								React.createElement("div", {className: "date"}, "Sep. 2009 – Jun. 2013")
							)
						)
					)
			)
		);
	}
});
var Skill = React.createClass({displayName: "Skill",
	render:function(){
		return(
			React.createElement("div", {className: "skill-box"}, 
				React.createElement("h2", {className: "title_text"}, "Working Knowledge"), 
				React.createElement("ul", null, 
					React.createElement("li", null, 
					"Familiar with git. There is my ", React.createElement("a", {target: "_blank", href: "https://github.com/eva0919"}, "Github")
					), 
					React.createElement("li", null, 
					"Core member of NTU design thinking club (first design thinking agency in Taiwan)"
					), 
					React.createElement("li", null, 
					"Have experiences in developing under MVC framework (Ruby on Rails)."
					), 
					React.createElement("li", null, 
					"Master of research is about text mining. Moderately high understanding of text mining, data mining, and information retrieval."
					), 
					React.createElement("li", null, 
					"More project is put on this ", React.createElement("a", {target: "_blank", href: "http://eva0919.github.io/homepage/#third"}, "link")
					)
				)
			)
		);
	}
});
var Contact = React.createClass({displayName: "Contact",
	render:function(){
		return(
			React.createElement("div", {className: "contact-box"}, 
			"If you want to review formally resume, please click this ", React.createElement("a", {target: "_blank", href: "https://www.dropbox.com/s/po19ewm4zpia3g7/Resume.pdf?dl=0"}, "link(Resume)"), " to download PDF file.", 
				React.createElement("hr", null), 
				React.createElement("h2", {className: "title_text"}, "Contact"), 
				React.createElement("ul", null, 
				React.createElement("li", null, React.createElement("a", {target: "_top", href: "mailto:eva091960601@gmail.com"}, React.createElement("i", {className: "fa fa-envelope fa-3x"}))), 
				React.createElement("li", null, React.createElement("a", {target: "_blank", href: "https://github.com/eva0919"}, React.createElement("i", {className: "fa fa-github fa-3x"}))), 
				React.createElement("li", null, React.createElement("a", {target: "_blank", href: "https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button"}, React.createElement("i", {className: "fa fa-linkedin fa-3x"})))
				)
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
var CircleImage = React.createClass({displayName: "CircleImage",
	render:function(){
		return(
			React.createElement("div", {className: "circle_box"}, 
				React.createElement("img", {className: "circle_img", src: "https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/1385793_699317240086719_965516295_n.jpg?oh=681e978846867d3890b04dfa2aba43c4&oe=56703445&__gda__=1450247180_8c072e21e6114262dd761e86b9609259"})
			)
		);
	}
});

var Main = React.createClass({displayName: "Main",

	render: function(){
		return(
			React.createElement("div", {className: "main"}, 
			React.createElement(Content, {achi_data: this.props.achi_data, job_data: this.props.job_data})
			)
		);
	}
});

React.render(
  React.createElement(Main, {achi_data: achieveimentData, job_data: jobData}),
  document.getElementById('box')
);