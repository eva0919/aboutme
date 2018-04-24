!function(e){var t={};function a(n){if(t[n])return t[n].exports;var c=t[n]={i:n,l:!1,exports:{}};return e[n].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";React.createClass({displayName:"NavBar",render:function(){return React.createElement("div",{className:"navbar"},React.createElement(n,null))}});var n=React.createClass({displayName:"NavBarList",render:function(){return React.createElement("div",{className:"navbar-list"},React.createElement("ul",null,React.createElement("li",null," About ")," ",React.createElement("li",null," Resume ")," ",React.createElement("li",null," Profilo ")," ",React.createElement("li",null," Contact ")," ")," ")}}),c=React.createClass({displayName:"Introduction",render:function(){return React.createElement("div",{className:"introduction-box"},React.createElement("h2",null," 陳昱安 ")," ",React.createElement("h2",null," Yu - An Chen ")," ",React.createElement("div",{className:"subtitle"},"Stay Hungry, Stay Foolish."," ")," ",React.createElement(l,null))}}),l=React.createClass({displayName:"IntroductionContent",render:function(){return React.createElement("div",{className:"introduction-content-box"},React.createElement("h2",{className:"title_text"}," Introduction ")," ",React.createElement("p",null," ","Chen is passionate about computer science and enthused over developing products.Chen believes that technology will make this world not only faster, but better.Besides, Chen keeps contacting information of innovation and startup.Never give up to try any chance to change this world."," "))}}),r=React.createClass({displayName:"Achievement",render:function(){var e=this.props.achi_data.map(function(e){return React.createElement("li",null,React.createElement("span",{className:"price"}," ",e.price," ")," ",React.createElement("span",{className:"name"}," ",e.name," "),","," ",React.createElement("span",{className:"text"}," ",e.text," ")," ",React.createElement("div",{className:"date"}," ",e.date," ")," ")});return React.createElement("div",{className:"achievement-box"},React.createElement("h2",{className:"title_text"}," Achievement ")," ",React.createElement("ul",null," ",e," ")," ")}}),i=React.createClass({displayName:"JobProduction",render:function(){if(this.props.production)var e=this.props.production.map(function(e){return React.createElement("li",null," ","["," ",React.createElement("a",{target:"_blank",href:e.linkUrl}," ",e.name," ")," ","]"," ",e.descript)});else e="";return React.createElement("ul",{className:"jobDescriptor"}," ",e," ")}}),o=React.createClass({displayName:"Experience",render:function(){var e=this.props.job_data.map(function(e){return React.createElement("li",null,React.createElement("span",{className:"job"}," ",e.job,", ")," ",React.createElement("span",{className:"company"}," ",React.createElement("a",{target:"_blank",href:e.link}," ",e.company," ")),React.createElement("div",{className:"date"}," ",e.date," ")," ",React.createElement(i,{production:e.production})," ")});return React.createElement("div",{className:"experience-box"},React.createElement("h2",{className:"title_text"}," Experience ")," ",React.createElement("ul",null," ",e," ")," ")}}),s=React.createClass({displayName:"Education",render:function(){return React.createElement("div",{className:"education-box"},React.createElement("h2",{className:"title_text"}," Education ")," ",React.createElement("div",{className:"school-box"},React.createElement("div",{className:"school-name"}," ","National Taiwan University Taipei, Taiwan"," ")," ",React.createElement("ul",null,React.createElement("li",null," ","Master of Information Management"," ",React.createElement("div",{className:"date"}," Sep.2013– Jul.2015 ")," ")," ",React.createElement("li",null," ","Bachelor of Information Management"," ",React.createElement("div",{className:"date"}," Sep.2009– Jun.2013 ")," ")," ")," ")," ")}}),m=React.createClass({displayName:"Skill",render:function(){return React.createElement("div",{className:"skill-box"},React.createElement("h2",{className:"title_text"}," Working Knowledge ")," ",React.createElement("ul",null,React.createElement("li",null,"Familiar with git.There is my"," ",React.createElement("a",{target:"_blank",href:"https://github.com/eva0919"}," Github ")," ")," ",React.createElement("li",null,"Core member of NTU design thinking club(first design thinking agency in Taiwan)"," ")," ",React.createElement("li",null,"Familiar with JS and jQuery(JS lib).Keep learning JS framework such as React."," ")," ",React.createElement("li",null,"Have experiences in developing with MVC framework(Django, Ruby on Rails)."," ")," ",React.createElement("li",null,"Master of research is about text mining.Moderately high understanding of text mining, data mining, and information retrieval."," ")," ",React.createElement("li",null,"More project is put on this"," ",React.createElement("a",{target:"_blank",href:"http://eva0919.github.io/homepage/#third"}," ","link"," ")," ")," ")," ")}}),u=React.createClass({displayName:"Contact",render:function(){return React.createElement("div",{className:"contact-box"},"If you want to review formally resume, please click this"," ",React.createElement("a",{target:"_blank",href:"https://www.dropbox.com/s/3ni2dysyb5zlse9/Resume_en_advance.pdf?dl=0"}," ","link(Resume)"," ")," ","to download PDF file."," ",React.createElement("hr",null),React.createElement("h2",{className:"title_text"}," Contact ")," ",React.createElement("ul",null,React.createElement("li",null," ",React.createElement("a",{target:"_top",href:"mailto:eva091960601@gmail.com"}," ",React.createElement("i",{className:"fa fa-envelope fa-3x"}," "))," ")," ",React.createElement("li",null," ",React.createElement("a",{target:"_blank",href:"https://github.com/eva0919"}," ",React.createElement("i",{className:"fa fa-github fa-3x"}," "))," ")," ",React.createElement("li",null," ",React.createElement("a",{target:"_blank",href:"https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button"}," ",React.createElement("i",{className:"fa fa-linkedin fa-3x"}," "))," ")," ")," ")}}),d=React.createClass({displayName:"Content",render:function(){return React.createElement("div",{className:"content"},React.createElement(c,null),React.createElement(o,{job_data:this.props.job_data})," ",React.createElement(r,{achi_data:this.props.achi_data})," ",React.createElement(s,null),React.createElement(m,null),React.createElement(u,null))}}),p=React.createClass({displayName:"CircleImage",render:function(){return React.createElement("div",{className:"circle_box"},React.createElement("img",{className:"circle_img",src:"https://graph.facebook.com/v2.7/1273896409295463/picture?height=300"}))}}),R=React.createClass({displayName:"Main",render:function(){return React.createElement("div",{className:"main"},React.createElement(p,null),React.createElement(d,{achi_data:this.props.achi_data,job_data:this.props.job_data})," ")}});React.render(React.createElement(R,{achi_data:[{price:"4th Place",name:"Firebox",text:"Mozilla Firefox OS App Days",date:"Jan. 2013"},{price:"Top 5",name:"iTree",text:"XBRL Software Programming Competition",date:"Feb. 2012"},{price:"Top 5",name:"iTree",text:"NTU Cloud Creativity Competition",date:"Feb. 2012"},{price:"Outstanding Prize",name:"iTree",text:"Longterm Entrepreneur Competition",date:"Feb. 2012"}],job_data:[{job:"Software Engineer",link:"https://fiiser.com/",company:"Fiiser",date:"Oct. 2015 - Feb. 2018",production:[{name:"UTS",descript:"Core member in building Live-stream product, including implement dashboard page for management with React, implement iOS app, and setting docker environment.",linkUrl:""},{name:"SoQ*Live",descript:"Core member in building Live-stream product, including setting up system architecture, implement iOS app, and looking for alternate solution.",linkUrl:"https://itunes.apple.com/us/app/soqlive/id1133870559?l=zh&ls=1&mt=8"},{name:"Fiiser",descript:"Developing Main Web Page, Mobile Web. Moreover, building testing system to make sure that functions work.",linkUrl:"https://www.fiiser.com"}]},{job:"Web Developer",link:"http://pieces.hypo.cc/",company:"Hypo",date:"Jul. 2014 - Feb. 2015"},{job:"Intern",link:"http://tmi.vc/",company:"TMI",date:"Sep. 2012 - Dec. 2012"}]}),document.getElementById("box"))}]);