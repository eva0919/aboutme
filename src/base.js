// section for local data initiating
var achieveimentData = [
  {
    price: "4th Place",
    name: "Firebox",
    text: "Mozilla Firefox OS App Days",
    date: "Jan. 2013"
  },
  {
    price: "Top 5",
    name: "iTree",
    text: "XBRL Software Programming Competition",
    date: "Feb. 2012"
  },
  {
    price: "Top 5",
    name: "iTree",
    text: "NTU Cloud Creativity Competition",
    date: "Feb. 2012"
  },
  {
    price: "Outstanding Prize",
    name: "iTree",
    text: "Longterm Entrepreneur Competition",
    date: "Feb. 2012"
  }
];
var jobData = [
  {
    job: "Software Engineer",
    link: "https://fiiser.com/",
    company: "Fiiser",
    date: "Oct. 2015 - Feb. 2018",
    production: [
      {
        name: "UTS",
        descript: "Core member in building Live-stream product, including implement dashboard page for management with React, implement iOS app, and setting docker environment.",
        linkUrl: ""
      },
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
    job: "Web Developer",
    link: "http://pieces.hypo.cc/",
    company: "Hypo",
    date: "Jul. 2014 - Feb. 2015"
  },
  {
    job: "Intern",
    link: "http://tmi.vc/",
    company: "TMI",
    date: "Sep. 2012 - Dec. 2012"
  }
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
          <li> About </li>
          {" "}
          <li> Resume </li>
          {" "}
          <li> Profilo </li>
          {" "}
          <li> Contact </li>
          {" "}
        </ul>{" "}
      </div>
    );
  }
});

var Introduction = React.createClass({
  render: function() {
    return (
      <div className="introduction-box">
        <h2> 陳昱安 </h2> <h2> Yu - An Chen </h2> <div className="subtitle">
          Stay Hungry, Stay Foolish.{" "}
        </div> <IntroductionContent />
      </div>
    );
  }
});
var IntroductionContent = React.createClass({
  render: function() {
    return (
      <div className="introduction-content-box">
        <h2 className="title_text"> Introduction </h2> <p>
          {" "}
          Chen is passionate about computer science and enthused over developing products.Chen believes that technology will make this world not only faster, but better.Besides, Chen keeps contacting information of innovation and startup.Never give up to
          try any chance to change this world.{" "}
        </p>

      </div>
    );
  }
});
var Achievement = React.createClass({
  render: function() {
    var listNodes = this.props.achi_data.map(function(data) {
      return (
        <li>
          <span className="price"> {data.price} </span>
          {" "}
          <span className="name"> {data.name} </span>
          ,
          {" "}
          <span className="text"> {data.text} </span>
          {" "}
          <div className="date"> {data.date} </div>
          {" "}
        </li>
      );
    });
    return (
      <div className="achievement-box">
        <h2 className="title_text"> Achievement </h2>
        {" "}
        <ul> {listNodes} </ul>
        {" "}
      </div>
    );
  }
});

var JobProduction = React.createClass({
  render: function() {
    if (this.props.production) {
      var listNodes = this.props.production.map(function(data) {
        return (
          <li>
            {" "}
            [
            {" "}
            <a target="_blank" href={data.linkUrl}> {data.name} </a>
            {" "}
            ]
            {" "}
            {data.descript}
          </li>
        );
      });
    } else {
      var listNodes = "";
    }
    return <ul className="jobDescriptor"> {listNodes} </ul>;
  }
});

var Experience = React.createClass({
  render: function() {
    var listNodes = this.props.job_data.map(function(data) {
      return (
        <li>
          <span className="job"> {data.job}, </span>
          {" "}
          <span className="company">
            {" "}<a target="_blank" href={data.link}> {data.company} </a>
          </span>
          <div className="date"> {data.date} </div>
          {" "}
          <JobProduction production={data.production} />
          {" "}
        </li>
      );
    });
    return (
      <div className="experience-box">
        <h2 className="title_text"> Experience </h2> <ul> {listNodes} </ul>{" "}
      </div>
    );
  }
});

var Education = React.createClass({
  render: function() {
    return (
      <div className="education-box">
        <h2 className="title_text"> Education </h2> <div className="school-box">
          <div className="school-name">
            {" "}National Taiwan University Taipei, Taiwan{" "}
          </div>
          {" "}
          <ul>
            <li>
              {" "}
              Master of Information Management
              {" "}
              <div className="date"> Sep.2013– Jul.2015 </div>
              {" "}
            </li>
            {" "}
            <li>
              {" "}
              Bachelor of Information Management
              {" "}
              <div className="date"> Sep.2009– Jun.2013 </div>
              {" "}
            </li>
            {" "}
          </ul>{" "}
        </div>{" "}
      </div>
    );
  }
});
var Skill = React.createClass({
  render: function() {
    return (
      <div className="skill-box">
        <h2 className="title_text"> Working Knowledge </h2> <ul>
          <li>
            Familiar with git.There is my
            {" "}
            <a target="_blank" href="https://github.com/eva0919"> Github </a>
            {" "}
          </li> <li>
            Core member of NTU design thinking club(first design thinking agency in Taiwan)
            {" "}
          </li> <li>
            Familiar with JS and jQuery(JS lib).Keep learning JS framework such as React.
            {" "}
          </li> <li>
            Have experiences in developing with MVC framework(Django, Ruby on Rails).
            {" "}
          </li> <li>
            Master of research is about text mining.Moderately high understanding of text mining, data mining, and information retrieval.
            {" "}
          </li> <li>
            More project is put on this
            {" "}
            <a target="_blank" href="http://eva0919.github.io/homepage/#third">
              {" "}link{" "}
            </a>
            {" "}
          </li>{" "}
        </ul>{" "}
      </div>
    );
  }
});
var Contact = React.createClass({
  render: function() {
    return (
      <div className="contact-box">
        If you want to review formally resume, please click this
        {" "}
        <a
          target="_blank"
          href="https://www.dropbox.com/s/3ni2dysyb5zlse9/Resume_en_advance.pdf?dl=0"
        >
          {" "}link(Resume){" "}
        </a>
        {" "}
        to download PDF file.
        {" "}
        <hr />
        <h2 className="title_text"> Contact </h2> <ul>
          <li>
            {" "}
            <a target="_top" href="mailto:eva091960601@gmail.com">
              {" "}<i className="fa fa-envelope fa-3x"> </i>
            </a>
            {" "}
          </li>
          {" "}
          <li>
            {" "}
            <a target="_blank" href="https://github.com/eva0919">
              {" "}<i className="fa fa-github fa-3x"> </i>
            </a>
            {" "}
          </li>
          {" "}
          <li>
            {" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button"
            >
              {" "}<i className="fa fa-linkedin fa-3x"> </i>
            </a>
            {" "}
          </li>
          {" "}
        </ul>{" "}
      </div>
    );
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <div className="content">
        <Introduction />
        <Experience job_data={this.props.job_data} />
        {" "}
        <Achievement achi_data={this.props.achi_data} />
        {" "}
        <Education />
        <Skill />
        <Contact />
      </div>
    );
  }
});
var CircleImage = React.createClass({
  render: function() {
    return (
      <div className="circle_box">
        <img
          className="circle_img"
          src="https://graph.facebook.com/v2.7/1273896409295463/picture?height=300"
        />
      </div>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <div className="main">
        <CircleImage />
        <Content
          achi_data={this.props.achi_data}
          job_data={this.props.job_data}
        />
        {" "}
      </div>
    );
  }
});

React.render(
  <Main achi_data={achieveimentData} job_data={jobData} />,
  document.getElementById("box")
);
