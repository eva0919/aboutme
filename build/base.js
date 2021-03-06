/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// section for local data initiating
	var achieveimentData = [
	{price:"4th Place",name:"Firebox",text:"Mozilla Firefox OS App Days",date:"Jan. 2013",},
	{price:"Top 5",name:"iTree",text:"XBRL Software Programming Competition",date:"Feb. 2012",},
	{price:"Top 5",name:"iTree",text:"NTU Cloud Creativity Competition",date:"Feb. 2012",},
	{price:"Outstanding Prize",name:"iTree",text:"Longterm Entrepreneur Competition",date:"Feb. 2012",}
	];
	var jobData =[
		{
			job:"Software Engineer",
			link:"https://fiiser.com/",
			company:"Fiiser",
			date:"Oct. 2015 - Present",
			production:[
				{
					name: "SoQ*Live",
					descript: "Core member in building Live-stream product, including setting up system architecture, implement iOS app, and looking for alternate solution.",
					linkUrl: "https://itunes.apple.com/us/app/soqlive/id1133870559?l=zh&ls=1&mt=8"
				},
				{
					name: "Fiiser",
					descript: "Developing Main Web Page, Mobile Web. Moreover, building testing system to make sure that functions work.",
					linkUrl: "https://www.fiiser.com"
				}
			]

			
		},
		{
			job:"Web Developer",
			link:"http://pieces.hypo.cc/",
			company:"Hypo",
			date:"Jul. 2014 - Feb. 2015"
		},
		{
			job:"Intern",
			link:"http://tmi.vc/",
			company:"TMI",
			date:"Sep. 2012 - Dec. 2012"
		}
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
					React.createElement("p", null, " Chen is passionate about computer science and enthused over developing products. Chen believes that technology will make this world not only faster, but better. Besides, Chen keeps contacting information of innovation and startup. Never give up to try any chance to change this world.")
				
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

	var JobProduction = React.createClass({displayName: "JobProduction",
		render: function(){
			if( this.props.production ){
				var listNodes = this.props.production.map(function(data){
					return(
						React.createElement("li", null, "[ ", React.createElement("a", {target: "_blank", href: data.linkUrl}, data.name), " ] ", data.descript)
					);
				});
			}else{
				var listNodes = "";
			}
			return(
				React.createElement("ul", {className: "jobDescriptor"}, " ", listNodes, " ")
				)
		}
	});

	var Experience = React.createClass({displayName: "Experience",
		render:function(){
			var listNodes = this.props.job_data.map(function(data){
				return(
					React.createElement("li", null, 
						React.createElement("span", {className: "job"}, data.job, ","), 
						React.createElement("span", {className: "company"}, React.createElement("a", {target: "_blank", href: data.link}, data.company)), 
						React.createElement("div", {className: "date"}, data.date), 
						React.createElement(JobProduction, {production: data.production})
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
						"Familiar with JS and jQuery(JS lib). Keep learning JS framework such as React."
						), 
						React.createElement("li", null, 
						"Have experiences in developing with MVC framework (Django, Ruby on Rails)."
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
				"If you want to review formally resume, please click this ", React.createElement("a", {target: "_blank", href: "https://www.dropbox.com/s/3ni2dysyb5zlse9/Resume_en_advance.pdf?dl=0"}, "link(Resume)"), " to download PDF file.", 
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
					React.createElement(Experience, {job_data: this.props.job_data}), 
					React.createElement(Achievement, {achi_data: this.props.achi_data}), 
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
					React.createElement("img", {className: "circle_img", src: "https://graph.facebook.com/v2.7/1273896409295463/picture?height=300"})
				)
			);
		}
	});

	var Main = React.createClass({displayName: "Main",

		render: function(){
			return(
				React.createElement("div", {className: "main"}, 
				React.createElement(CircleImage, null), 
				React.createElement(Content, {achi_data: this.props.achi_data, job_data: this.props.job_data})
				)
			);
		}
	});

	React.render(
	  React.createElement(Main, {achi_data: achieveimentData, job_data: jobData}),
	  document.getElementById('box')
	);

/***/ }
/******/ ]);