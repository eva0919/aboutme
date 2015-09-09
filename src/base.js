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
var NavBar = React.createClass({
  render: function() {
    return (
      <div className="navbar">
        <NavBarList />
      </div>
    );
  }
});
var NavBarList = React.createClass({
  render: function() {
    return (
      <div className="navbar-list">
      	<ul>
	      	<li>About</li>
	      	<li>Resume</li>
	      	<li>Profilo</li>
	      	<li>Contact</li>
      	</ul>
      </div>
    );
  }
});

var Introduction = React.createClass({
	render:function(){
		return(
			<div className="introduction-box">
				<h2>陳昱安</h2>
				<h2>Yu-An Chen</h2>
				<div className="subtitle">
					Stay Hungry, Stay Foolish.
				</div>
				<IntroductionContent />
			</div>
		);
	}
});
var IntroductionContent = React.createClass({
	render:function(){
		return(
			<div className="introduction-content-box">
				<h2 className="title_text">Introduction</h2>
				Hi!I am Chen, graduated from National Taiwan University. Passionate about computer science and enthused over developing products. I believe that technology will make our life better not only wealthier.
			
			</div>
		);
	}
});
var Achievement = React.createClass({
	render:function(){
		var listNodes = this.props.achi_data.map(function(data){
			return(
				<li>
					<span className="price">{data.price}</span>
					<span className="name">{data.name}</span>,
					<span className="text">{data.text}</span>
					<div className="date">{data.date}</div>
				</li>
			);
		});
		return(
			<div className="achievement-box">
				<h2 className="title_text">Achievement</h2>
				<ul>	
					{listNodes}
				</ul>
			</div>
		);
	}
});
var Experience = React.createClass({
	render:function(){
		var listNodes = this.props.job_data.map(function(data){
			return(
				<li>
					<span className="job">{data.job},</span>
					<span className="company"><a target='_blank' href={data.link}>{data.company}</a></span>
					<div className="date">{data.date}</div>
					
				</li>
			);
		});
		return(
			<div className="experience-box">
				<h2 className="title_text">Experience</h2>
				<ul>	
					{listNodes}
				</ul>
			</div>
		);
	}
});

var Education = React.createClass({
	render:function(){
		return(
			<div className="education-box">
				<h2 className="title_text">Education</h2>
				<div className="school-box">
					<div className="school-name">National Taiwan University Taipei, Taiwan</div>
						<ul>
							<li>Master of Information Management
								<div className="date">Sep. 2013 – Jul. 2015</div>
							</li>
							<li>Bachelor of Information Management
								<div className="date">Sep. 2009 – Jun. 2013</div>
							</li>
						</ul>
					</div>
			</div>
		);
	}
});
var Skill = React.createClass({
	render:function(){
		return(
			<div className="skill-box">
				<h2 className="title_text">Working Knowledge</h2>
				<ul>
					<li>
					Familiar with git. There is my <a target='_blank' href="https://github.com/eva0919">Github</a>
					</li>
					<li>
					Core member of NTU design thinking club (first design thinking agency in Taiwan)
					</li>
					<li>
					Have experiences in developing under MVC framework (Ruby on Rails).
					</li>
					<li>
					Master of research is about text mining. Moderately high understanding of text mining, data mining, and information retrieval.
					</li>
					<li>
					More project is put on this <a target='_blank' href="http://eva0919.github.io/homepage/#third">link</a>
					</li>
				</ul>
			</div>
		);
	}
});
var Contact = React.createClass({
	render:function(){
		return(
			<div className="contact-box">
				<hr />
				<h2 className="title_text">Contact</h2>
				<ul>
				<li><a target='_top' href="mailto:eva091960601@gmail.com"><i className="fa fa-envelope fa-3x"></i></a></li>
				<li><a target='_blank' href="https://github.com/eva0919"><i className="fa fa-github fa-3x"></i></a></li>
				<li><a target='_blank' href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button"><i className="fa fa-linkedin fa-3x"></i></a></li>
				</ul>
			</div>
		);
	}
});




var Content = React.createClass({
	render: function(){

		return(
			<div className="content">
				<Introduction />
				<Achievement achi_data={this.props.achi_data}/>
				<Experience job_data={this.props.job_data}/>
				<Education />
				<Skill />
				<Contact />
			</div>
		);
	}
});


var Main = React.createClass({

	render: function(){
		return(
			<div className="main">
			<Content achi_data={this.props.achi_data} job_data={this.props.job_data}/>
			</div>
		);
	}
});

React.render(
  <Main achi_data={achieveimentData} job_data={jobData}/>,
  document.getElementById('box')
);