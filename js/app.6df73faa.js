(function(t){function e(e){for(var i,n,l=e[0],r=e[1],c=e[2],u=0,p=[];u<l.length;u++)n=l[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,l=1;l<a.length;l++){var r=a[l];0!==o[r]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},o={app:0},s=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=r;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),o=a.n(i);o.a},"0442":function(t,e,a){},"04de":function(t,e,a){"use strict";var i=a("f08f"),o=a.n(i);o.a},"10b9":function(t,e,a){t.exports=a.p+"img/4.7dc7014a.png"},"13cc":function(t,e,a){"use strict";var i=a("e544"),o=a.n(i);o.a},1456:function(t,e,a){t.exports=a.p+"img/3.396e4b9b.png"},1598:function(t,e,a){t.exports=a.p+"img/4.089aadcc.png"},2011:function(t,e,a){"use strict";var i=a("b2a9"),o=a.n(i);o.a},"25a3":function(t,e,a){t.exports=a.p+"img/2.eb1bf594.png"},"273d":function(t,e,a){},"2a25":function(t,e,a){t.exports=a.p+"img/1.ffb2a8b4.png"},"2c9e":function(t,e,a){t.exports=a.p+"img/1.95bbaf60.jpg"},"38b3":function(t,e,a){"use strict";var i=a("b509"),o=a.n(i);o.a},"3fb5":function(t,e,a){"use strict";var i=a("72a5"),o=a.n(i);o.a},4165:function(t,e,a){t.exports=a.p+"img/3.264071e8.png"},4175:function(t,e,a){t.exports=a.p+"img/2.e705a9b8.png"},4352:function(t,e,a){},"468c":function(t,e,a){"use strict";var i=a("dc73"),o=a.n(i);o.a},"4c52":function(t,e,a){},"50ab":function(t,e,a){"use strict";var i=a("4352"),o=a.n(i);o.a},"513b":function(t,e,a){"use strict";var i=a("7f79"),o=a.n(i);o.a},"52c6":function(t,e,a){t.exports=a.p+"img/6.be6939c4.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"text-dark":!t.nightMode,"text-light":t.nightMode},attrs:{id:"app"}},[a("Navbar",{attrs:{nightMode:t.nightMode},on:{scroll:t.scrollTo,nightMode:t.switchMode}}),a("div",{staticClass:"parent"},[a("Home",{attrs:{nightMode:t.nightMode}}),a("About",{attrs:{id:"about",nightMode:t.nightMode}}),a("Skills",{attrs:{id:"skills",nightMode:t.nightMode}}),a("Paper",{attrs:{id:"paper",nightMode:t.nightMode}}),a("Portfolio",{attrs:{id:"portfolio",nightMode:t.nightMode}}),a("Contact",{attrs:{id:"contact",nightMode:t.nightMode}}),a("Footer",{attrs:{nightMode:t.nightMode}})],1)],1)},s=[],n=(a("4160"),a("caad"),a("2532"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light fixed-top p-st",class:{"bg-light":!t.nightMode,"navbar-blur":t.navbarConfig.blur,"bg-dark2":t.nightMode}},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"/"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","home")}}},[a("Logo",{attrs:{nightMode:t.nightMode}})],1),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/about"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","about")}}},[t._v("关于我")])]),a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/skills"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","skills")}}},[t._v("技能")])]),a("li",{staticClass:"nav-item mx-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/paper"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","paper")}}},[t._v("学术")])]),a("li",{staticClass:"nav-item mx-2 "},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"/portfolio"},on:{click:function(e){return e.preventDefault(),t.$emit("scroll","portfolio")}}},[t._v("项目")])]),a("li",{staticClass:"nav-item ml-2"},[a("a",{staticClass:"nav-link",class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.switchMode(e)}}},[a("i",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.nightMode?"Light Mode":"Night Mode",expression:"nightMode ? 'Light Mode' : 'Night Mode'",modifiers:{bottom:!0}}],class:{"fas fa-moon":t.nightMode,"far fa-moon":!t.nightMode}})])])])])])])])}),l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticStyle:{color:"gray","font-size":"23px"}},[a("i",{staticClass:"fas fa-bars"})])])}],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo-div"},[a("span",{staticClass:"logo-title-name",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v(t._s(t.name))]),a("span",{staticClass:"logo-title-dot pblue"},[t._v(t._s(t.dot))])])},c=[],d={name:"朱书斐",logo_name:"maGnet1C",flat_picture:a("b0df"),config:{use_cookies:!0,navbar:{blur:!0}},description:"目前就读于伯明翰大学计算机科学理学硕士",links:{linkedin:"",github:"https://github.com/maGnet2C-cmd",behance:"",resume:" "},education:[{name:"伯明翰大学",place:"伯明翰, 英国",date:"2021/9 - 至今",degree:"MSc Computer Science",gpa:"",description:"",skills:["Software engineering","Data structure","Artifical intelligence","Full stack development"]},{name:"西交利物浦大学",place:"苏州, 中国",date:"2017/9 - 2021/7",degree:"BEng Digital Media Technology",gpa:"",description:"",skills:["Software engineering","Web programming","VR gaming development","Computer graphics"]}],experience:[{name:"name",place:"place",date:"date",position:"position",description:"",skills:["skill1","skill2"]}],skills:[{title:"语言",info:["Python","Java","Kotlin","C#"],icon:"fa fa-code"},{title:"Web开发",info:["HTML","CSS","JavaScript","Vue"],icon:"fa fa-cubes"},{title:"游戏开发",info:["Unreal","Unity","Blender"],icon:"fa fa-gamepad"},{title:"深度学习",info:["PyTorch","VGG16"],icon:"fas fa-laptop-code"}],paper:[{name:"An Enhanced Video Anomaly Detection System for Smart City Management",pictures:[{img:a("1456")}],technologies:["Machine Learning","VGG16"],category:"机器学习",date:"",github:"",visit:"https://www.earticle.net/Article/A413439",description:"<pre>标题：  An Enhanced Video Anomaly Detection System for Smart City Management </pre><pre>作者：  Yuechun Wang, Shufei Zhu, Yuxuan Zhao, Jie Zhang, Ka Lok Man </pre> <pre>发表日期： 2022/6</pre> <pre>期刊：  한국 ITS 학회 학술대회</pre> <pre>页码范围：  1139-1143</pre>"}],portfolio:[{name:"视频危险识别分类系统",video:"//player.youku.com/embed/XNTg4OTkyMzY1Ng==",pictures:[{img:a("e5e8")},{img:a("7c53")},{img:a("1456")},{img:a("1598")}],technologies:["PyTorch","VGG16","Android","PHP","Full Stack"],category:"机器学习",date:"",github:"",visit:"https://v.youku.com/v_show/id_XNTg4OTkyMzY1Ng==.html?spm=a2hcb.playlsit.page.1",description:"<pre>基于机器学习的视频智能传输与危险识别分类系统，包含安卓端、服务器端、前端门户网站</pre> <pre>使用技术：安卓开发、HTTP文件传输、PyTorch深度学习、前端开发</pre>"},{name:"JobTracker",pictures:[{img:a("2c9e")},{img:a("cb05")},{img:a("f75d")}],technologies:["Android","Kotlin"],category:"安卓开发",date:"",github:"https://github.com/maGnet2C-cmd/JobTracker",visit:"https://github.com/maGnet2C-cmd/JobTracker",description:"使用Kotlin开发的Android App，用于跟踪纪录求职信息。"},{name:"装车模拟器",video:"//player.bilibili.com/player.html?aid=216487773&bvid=BV1ya411T7Kp&cid=787397661&page=1",pictures:[{img:a("9388")},{img:a("dcce")},{img:a("b635")},{img:a("8748")},{img:a("dbee")},{img:a("52c6")}],technologies:["Unreal","C++","Game Development"],category:"游戏开发",date:"",github:"https://github.com/maGnet2C-cmd/Bike-Building-Simulator",visit:"https://github.com/maGnet2C-cmd/Bike-Building-Simulator",description:"使用虚幻5开发的自行车模拟经营游戏（仍在开发中）"},{name:"Timetable+ 课表App",video:"https://player.youku.com/embed/XNTg4OTkyNDk4OA==",pictures:[{img:a("d372")},{img:a("fcde")},{img:a("4165")},{img:a("5c2c")}],technologies:["Android Development","Java"],category:"安卓开发",date:"",github:"https://github.com/maGnet2C-cmd/Timetable-Plus",visit:"https://github.com/maGnet2C-cmd/Timetable-Plus",description:"集待办事项 课表 学校地图和通知为一体的安卓App"},{name:"Commonwealth Games 票务App",video:"https://player.youku.com/embed/XNTg5MTQ3MDE0NA==",pictures:[{img:a("2a25")},{img:a("25a3")},{img:a("a261")},{img:a("10b9")}],technologies:["Android Development","Java"],category:"安卓开发",date:"",github:"",visit:"",description:"适用于2022年伯明翰英联邦运动会的票务App Prototype"},{name:"Visuomotor Rotation",pictures:[{img:a("6223")}],technologies:["Unity","C#","WebGL"],category:"游戏开发",date:"",github:"https://github.com/maGnet2C-cmd/Visuomotor-Rotation",visit:"https://github.com/maGnet2C-cmd/Visuomotor-Rotation",description:"使用Unity开发的在线FPS游戏，用于研究人类对于visuomotor rotation的适应与恢复 <pre>链接：https://magnet2c.itch.io/visuomotor-rotation</pre>"},{name:"自制俱乐部网站",pictures:[{img:a("84c7")},{img:a("4175")},{img:a("6559")}],technologies:["HTML","JavaScript"],category:"Web",date:"",github:"https://github.com/maGnet2C-cmd/navi-fanmade-webpage",visit:"",description:"使用HTML自制的简单俱乐部网站"}]},u=d,p={name:"Logo",props:{nightMode:{type:Boolean}},data:function(){return{name:u.logo_name,dot:"."}}},h=p,g=(a("e8e7"),a("2877")),m=Object(g["a"])(h,r,c,!1,null,"8d13128e",null),f=m.exports,b={name:"Navbar",props:{nightMode:{type:Boolean}},data:function(){return{navbarConfig:u.config.navbar,localNightMode:this.nightMode}},components:{Logo:f},methods:{switchMode:function(){this.localNightMode=!this.localNightMode,this.$emit("nightMode",this.localNightMode)}}},v=b,M=(a("513b"),Object(g["a"])(v,n,l,!1,null,"3f800df3",null)),y=M.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5 p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center"},[a("img",{attrs:{src:t.picture,width:"200",height:"200"}})]),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5"},[a("span",{staticClass:"home-title",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("朱 书斐"),a("br")]),a("span",{staticClass:"second-title",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("shufei.zhu@outlook.com")]),a("div",[a("p",{domProps:{innerHTML:t._s(t.description)}})]),a("div",{staticClass:"text-center pb-4"},[a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"LinkedIn",expression:"'LinkedIn'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2 ",on:{click:function(e){return t.open("linkedin")}}},[a("i",{staticClass:"fab fa-linkedin"})]),a("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:"GitHub",expression:"'GitHub'",modifiers:{bottom:!0}}],staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[a("i",{staticClass:"fab fa-github"})])])])])])])},C=[],k=(a("a4d3"),a("e01a"),a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"wave"},[t._v("👋🏽npm ")])}),w=[],x={name:"Wave"},S=x,T=(a("ddb3"),Object(g["a"])(S,k,w,!1,null,"df85ed74",null)),E=T.exports,B={name:"Home",components:{Wave:E},props:{nightMode:{type:Boolean}},data:function(){return{picture:u.flat_picture,description:u.description,name:u.name,linkedin:u.links.linkedin,github:u.links.github,behance:u.links.behance,resume:u.links.resume}},methods:{open:function(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"behance":window.open(this.behance,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},j=B,$=(a("3fb5"),Object(g["a"])(j,_,C,!1,null,"03941a17",null)),D=$.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("关于我")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("Timeline",{attrs:{data:t.education,nightMode:t.nightMode}})],1),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("Timeline",{attrs:{data:t.experience,nightMode:t.nightMode}})],1)])])])},P=[],N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mx-3 mt-3 mb-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-xl-12 col-bg-12 col-md-12 col-sm-12"},[a("p",{staticClass:"title1",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"1000"}},[t._v(" "+t._s(t.data.title)+" ")]),t._l(t.data.data,(function(e,i){return a("ul",{key:e.name,staticClass:"timeline m-0 pt-1",style:{"transition-delay":i/4.2+"s"},attrs:{"data-aos":"fade-up","data-offset":"10","data-aos-once":"true","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-duration":"500"}},[a("li",{staticClass:"m-0 pb-2"},[a("div",[a("div",{staticClass:"px-2 title2"},[t._v(t._s(e.name)+", "+t._s(e.place))]),a("div",{staticClass:"px-2 title3"},[t._v(" "+t._s(e.degree||e.position)+" "+t._s(e.gpa?"("+e.gpa+")":"")+" ")]),a("div",{staticClass:"px-2 date"},[t._v(t._s(e.date))]),a("div",{staticClass:"px-2 pb-2 pt-2",staticStyle:{"text-align":"justify"}},[t._v(" "+t._s(e.description)+" ")]),t._l(e.skills,(function(e){return a("span",{key:e,staticClass:"mx-2 badge p-2 mb-2",class:{"bg-dark2":t.nightMode}},[t._v(t._s(e))])})),a("p",{staticClass:"m-2"})],2)])])}))],2)])])])},G=[],A={name:"Timeline",props:{data:{type:Object},nightMode:{type:Boolean}}},V=A,L=(a("38b3"),Object(g["a"])(V,N,G,!1,null,"72b2c29a",null)),I=L.exports,H={name:"About",components:{Timeline:I},props:{nightMode:{type:Boolean}},data:function(){return{education:{title:"教育",data:u.education}}}},F=H,J=(a("7388"),Object(g["a"])(F,O,P,!1,null,"b27c767c",null)),z=J.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"p-st",class:{"bg-white":!t.nightMode,"bg-dark":t.nightMode}},[a("div",{staticClass:"container py-4"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("技能")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("br"),a("div",{staticClass:"row"},t._l(t.skills,(function(e,i){return a("div",{key:e.title,staticClass:"col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4",style:{"transition-delay":i/4.2+"s"},attrs:{"data-aos":"fade-up","data-aos-offset":"10","data-aos-delay":"30","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("div",{staticClass:"bg-div"},[a("i",{class:e.icon})]),a("div",{staticClass:"title2 pt-2"},[t._v(t._s(e.title))]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("span",{staticClass:"title3"},[t._v(t._s(e.info.join(", ")))])])})),0)])])},W=[],K={name:"Skills",props:{nightMode:{type:Boolean}},data:function(){return{skills:u.skills}}},R=K,X=(a("b1c7"),Object(g["a"])(R,U,W,!1,null,"45ce4cb0",null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("项目")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("vue-tabs",{attrs:{activeTextColor:t.nightMode?"#dfdfdf":"#535A5E"}},[a("br"),a("div",{staticClass:"row"},t._l(t.portfolio_info,(function(e,i){return a("div",{key:e.name,staticClass:"col-xl-4 col-bg-4 col-md-6 col-sm-12"},[a("Card",{style:{"transition-delay":i%3/4.2+"s"},attrs:{portfolio:e,"data-aos":"fade-up",nightMode:t.nightMode,"data-aos-offset":"100","data-aos-delay":"10","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"},on:{show:t.showModalFn}})],1)})),0),"显示更少"!==t.showBtn?a("div",{staticClass:"text-center py-3"},[a("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),t.showMore(e)}}},[t._v(t._s(t.showBtn))])]):t._e()])],1),a("transition",{attrs:{name:"modal"}},[t.showModal?a("Modal",{attrs:{showModal:t.showModal,portfolio:t.modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1),a("transition",{attrs:{name:"modal"}},[t.showDesignModal?a("DesignModal",{attrs:{showModal:t.showDesignModal,portfolio:t.design_modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1)],1)},Q=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"my-3 mx-3"},[a("div",{staticClass:"card smcard",class:{"pcard-dark":t.nightMode,pcard:!t.nightMode,"bg-dark3":t.nightMode}},[a("div",{staticStyle:{height:"160px"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.portfolio.pictures[0].img,alt:"Card image cap"}})]),a("div",{staticClass:"card-body pborder-top"},[a("h5",{staticClass:"title2"},[t._v(t._s(t.portfolio.name))]),a("div",[a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2 ",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0)]),a("div",{staticClass:"text-center mt-2"},[a("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.showModal(e)}}},[t._v(" 更多 ")]),t.portfolio.visit?a("button",{staticClass:"btn-sm btn btn-outline-secondary no-outline ml-4",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(" 访问 ")]):t._e()])])])])},tt=[],et={name:"Card",props:{portfolio:{type:Object},nightMode:{type:Boolean}},methods:{open:function(t){window.open(t,"_blank")},showModal:function(){this.$emit("show",this.portfolio)}}},at=et,it=(a("04de"),Object(g["a"])(at,q,tt,!1,null,"871c7666",null)),ot=it.exports,st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"title1 px-4 pt-3"},[a("span",[a("a",{class:{"text-light":t.nightMode},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.open(t.portfolio.visit)}}},[t._v(t._s(t.portfolio.name))])]),a("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fas fa-times"})]),a("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),a("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[a("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}}),a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("div",{staticStyle:{"text-align":"justify"}},[a("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),a("hr"),a("div",[a("iframe",{attrs:{id:"videoId",width:"600",height:"400",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",src:t.link}})]),a("div",[a("Gallery",{attrs:{images:t.portfolio.pictures}})],1)]),a("div",{staticClass:"text-center pb-3"},[a("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),a("button",{staticClass:"btn w-25 mr-3",on:{click:function(e){return t.open(t.portfolio.github)}}},[t._v(" 访问 ")]),a("button",{staticClass:"btn w-25",on:{click:function(e){return t.$emit("close")}}},[t._v("关闭")])])])])])])},nt=[],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"carousel slide",staticStyle:{height:"200px"},attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},t._l(t.images,(function(t){return a("div",{key:t,staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://picsum.photos/id/237/200/300",alt:"Second slide"}})])})),0),t._m(0),t._m(1)])])},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[a("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[a("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),a("span",{staticClass:"sr-only"},[t._v("Next")])])}],ct={name:"Carousel",props:{images:{type:Array},name:{type:String}},mounted:function(){}},dt=ct,ut=Object(g["a"])(dt,lt,rt,!1,null,"2682f26c",null),pt=ut.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{overflow:"auto"}},[a("div",{staticClass:"prow"},t._l(t.images,(function(e,i){return a("div",{key:e.title,staticClass:"pcolumn",class:{flex:t.design?"100%":"50%","-ms-flex":t.design?"100%":"50%","max-width":t.design?"100%":"50%"}},[a("img",{staticClass:"g-img",staticStyle:{width:"70%"},attrs:{src:e.img,id:"gi"+i},on:{click:function(e){return t.showImg(i)}}}),a("div",{staticClass:"mt-1"},[a("p",{staticStyle:{"font-weight":"500"}},[t._v(t._s(e.title))])])])})),0),t._m(0)])},gt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal",attrs:{id:"myModal"}},[a("span",{staticClass:"close"},[t._v("×")]),a("img",{staticClass:"modal-content",attrs:{id:"modalImg"}}),a("div",{attrs:{id:"caption"}})])}],mt={name:"Gallery",props:{images:{type:Array},design:{type:Boolean}},data:function(){return{modal:null}},methods:{showImg:function(t){var e=document.getElementById("myModal"),a=document.getElementById("gi".concat(t)),i=document.getElementById("modalImg");e.style.display="block",i.src=a.src;var o=document.getElementsByClassName("close")[0];o.onclick=function(){i.classList.add("closeModal"),e.classList.add("modalClose"),setTimeout((function(){e.style.display="none",i.classList.remove("closeModal"),e.classList.remove("modalClose")}),200)}}}},ft=mt,bt=(a("2011"),Object(g["a"])(ft,ht,gt,!1,null,"2aedc63e",null)),vt=bt.exports,Mt={name:"Modal",components:{Carousel:pt,Gallery:vt},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean},videoId:{type:String,required:!0}},data:function(){return{link:this.portfolio.video}},created:function(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open:function(t){window.open(t,"_blank")}}},yt=Mt,_t=(a("c5b4"),Object(g["a"])(yt,st,nt,!1,null,"7ace8cde",null)),Ct=_t.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"modal-mask"},[a("div",{staticClass:"modal-wrapper"},[a("div",{staticClass:"modal-container",class:{"bg-light":!t.nightMode,"bg-dark":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"title1 px-4 pt-3"},[a("span",{class:{"text-light":t.nightMode}},[t._v(t._s(t.portfolio.name))]),a("a",{staticClass:"pull-right",staticStyle:{"font-size":"18px"},on:{click:function(e){return t.$emit("close")}}},[a("i",{staticClass:"fas fa-times"})]),a("hr",{staticClass:"my-1",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}})]),a("div",{staticClass:"modal-body my-0 pb-0 px-4 pt-0"},[a("div",{staticClass:"mb-2 date",class:{"text-light":t.nightMode,pbgray:t.nightMode}},[a("span",[t._v(t._s(t.portfolio.date)+" • "+t._s(t.portfolio.category))])]),a("div",{staticClass:"pb-1 bheight"},t._l(t.portfolio.technologies,(function(e){return a("span",{key:e,staticClass:"badge mr-2 mb-2",class:{"bg-dark4":t.nightMode}},[t._v(t._s(e))])})),0),a("div",{staticStyle:{"text-align":"justify"}},[a("span",{domProps:{innerHTML:t._s(t.portfolio.description)}})]),a("hr"),a("div",[a("Gallery",{attrs:{images:t.portfolio.pictures,design:!0}})],1)]),a("div",{staticClass:"text-center pb-3"},[a("hr",{staticClass:"mt-1 mb-3",class:{pgray:!t.nightMode,"bg-secondary":t.nightMode}}),a("button",{staticClass:"btn w-25",on:{click:function(e){return t.$emit("close")}}},[t._v("close")])])])])])])},wt=[],xt={name:"Modal",components:{Carousel:pt,Gallery:vt},props:{showModal:{type:Boolean},portfolio:{type:Object},nightMode:{type:Boolean}},created:function(){document.getElementsByTagName("body")[0].classList.add("modal-open")},methods:{open:function(t){window.open(t,"_blank")}}},St=xt,Tt=(a("468c"),Object(g["a"])(St,kt,wt,!1,null,"921496ce",null)),Et=Tt.exports,Bt=a("4d48"),jt=(a("4bf4"),a("b1b5")),$t=(a("2ec8"),{name:"Portfolio",components:{Card:ot,Modal:Ct,VueTabs:Bt["VueTabs"],VTab:Bt["VTab"],VueperSlides:jt["VueperSlides"],VueperSlide:jt["VueperSlide"],DesignModal:Et},props:{nightMode:{type:Boolean}},data:function(){return{all_info:u.portfolio,desgin_info:u.portfolio_design,portfolio_info:[],showModal:!1,showDesignModal:!1,modal_info:{},design_modal_info:{},number:3,showBtn:"显示更多",shower:0,data:['<div class="example-slide">Slide 1</div>','<div class="example-slide">Slide 2</div>','<div class="example-slide">Slide 3</div>']}},created:function(){for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])},watch:{number:function(){this.portfolio_info=[];for(var t=0;t<this.number;t++)this.portfolio_info.push(this.all_info[t])}},methods:{next:function(){this.$refs.flickity.next()},previous:function(){this.$refs.flickity.previous()},closeModal:function(){this.showModal=!1,this.showDesignModal=!1,document.getElementsByTagName("body")[0].classList.remove("modal-open")},showModalFn:function(t){this.modal_info=t,this.showModal=!0},showDesignModalFn:function(t){this.design_modal_info=t,this.showDesignModal=!0},showMore:function(){if(this.number!=this.all_info.length&&(this.number+=3,window.scrollBy({top:document.getElementsByClassName("smcard")[0].clientHeight,behavior:"smooth"}),this.number>this.all_info.length&&(this.number=this.all_info.length)),this.number==this.all_info.length&&0==this.shower)this.shower=1,this.showBtn="显示更少";else if(this.number==this.all_info.length&&1==this.shower){var t=document.getElementById("portfolio").offsetTop;window.scrollTo({top:t+5,behavior:"smooth"}),this.shower=0,this.number=3,this.showBtn="显示更多"}}}}),Dt=$t,Ot=(a("50ab"),Object(g["a"])(Dt,Z,Q,!1,null,"953f72cc",null)),Pt=Ot.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("学术")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("vue-tabs",{attrs:{activeTextColor:t.nightMode?"#dfdfdf":"#535A5E"}},[a("br"),a("div",{staticClass:"row"},t._l(t.portfolio_info,(function(e,i){return a("div",{key:e.name,staticClass:"col-xl-4 col-bg-4 col-md-6 col-sm-12"},[a("Card",{style:{"transition-delay":i%3/4.2+"s"},attrs:{portfolio:e,"data-aos":"fade-up",nightMode:t.nightMode,"data-aos-offset":"100","data-aos-delay":"10","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"},on:{show:t.showModalFn}})],1)})),0)])],1),a("transition",{attrs:{name:"modal"}},[t.showModal?a("Modal",{attrs:{showModal:t.showModal,portfolio:t.modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1),a("transition",{attrs:{name:"modal"}},[t.showDesignModal?a("DesignModal",{attrs:{showModal:t.showDesignModal,portfolio:t.design_modal_info,nightMode:t.nightMode},on:{close:t.closeModal}}):t._e()],1)],1)},Gt=[],At={name:"Portfolio",components:{Card:ot,Modal:Ct,VueTabs:Bt["VueTabs"],VTab:Bt["VTab"],VueperSlides:jt["VueperSlides"],VueperSlide:jt["VueperSlide"],DesignModal:Et},props:{nightMode:{type:Boolean}},data:function(){return{all_info:u.paper,desgin_info:u.portfolio_design,portfolio_info:[],showModal:!1,showDesignModal:!1,modal_info:{},design_modal_info:{},number:3,showBtn:"显示更多",shower:0,data:['<div class="example-slide">Slide 1</div>','<div class="example-slide">Slide 2</div>','<div class="example-slide">Slide 3</div>']}},created:function(){this.portfolio_info.push(this.all_info[0])},watch:{number:function(){this.portfolio_info=[],this.portfolio_info.push(this.all_info[0])}},methods:{next:function(){this.$refs.flickity.next()},previous:function(){this.$refs.flickity.previous()},closeModal:function(){this.showModal=!1,this.showDesignModal=!1,document.getElementsByTagName("body")[0].classList.remove("modal-open")},showModalFn:function(t){this.modal_info=t,this.showModal=!0},showDesignModalFn:function(t){this.design_modal_info=t,this.showDesignModal=!0},showMore:function(){if(this.number!=this.all_info.length&&(this.number+=3,window.scrollBy({top:document.getElementsByClassName("smcard")[0].clientHeight,behavior:"smooth"}),this.number>this.all_info.length&&(this.number=this.all_info.length)),this.number==this.all_info.length&&0==this.shower)this.shower=1,this.showBtn="显示更少";else if(this.number==this.all_info.length&&1==this.shower){var t=document.getElementById("portfolio").offsetTop;window.scrollTo({top:t+5,behavior:"smooth"}),this.shower=0,this.number=3,this.showBtn="显示更多"}}}},Vt=At,Lt=(a("13cc"),Object(g["a"])(Vt,Nt,Gt,!1,null,"2ac5fc88",null)),It=Lt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-4 p-st",class:{"bg-light":!t.nightMode,"bg-dark2":t.nightMode,"text-light":t.nightMode}},[a("div",{staticClass:"container"},[a("div",{staticClass:"text-center",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000"}},[a("span",{staticClass:"title text-center",class:{pgray:!t.nightMode,"text-light":t.nightMode}},[t._v("Contact.")])]),a("hr",{class:{pgray:!t.nightMode,"bg-secondary":t.nightMode},attrs:{width:"50%"}}),a("br"),a("div",{staticClass:"text-center"},[a("div",{staticClass:"mb-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.2s"},attrs:{type:"text",name:"user_name",placeholder:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),a("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.4s"},attrs:{type:"email",name:"user_email",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"my-3",attrs:{"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"pinput",class:{pgray:!t.nightMode,"pgray-dark":t.nightMode,"text-light":t.nightMode},staticStyle:{"transition-delay":"0.6s"},attrs:{name:"message",placeholder:"message",rows:"4"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),a("button",{staticClass:"mt-1 btn mb-3",attrs:{"data-aos":"fade","data-aos-once":"true","data-aos-duration":"1000","data-aos-offset":"50"},on:{click:function(e){return e.preventDefault(),t.sendEmail(e)}}},[t._v(" Send ")])]),a("Snackbar",{attrs:{showSnackbar:t.showSnackbar,snackbarMessage:t.snackbarMessage,snackbarColor:t.snackbarColor},on:{close:t.closeSnackbar}})],1)])},Ft=[],Jt={emailjs:{serviceID:"gmail",templateID:"template_zHretJ0d",userID:"user_8g0rh3d6Qj1QZBEU8USls"}},zt=Jt,Ut=a("0f91"),Wt=a.n(Ut),Kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{class:{show:t.showSnackbar},style:{"background-color":t.snackbarColor},attrs:{id:"snackbar"}},[t._v(" "+t._s(t.snackbarMessage)+" ")])])},Rt=[],Xt={name:"Snackbar",props:{showSnackbar:{type:Boolean},snackbarMessage:{type:String},snackbarColor:{type:String}},watch:{showSnackbar:function(t){var e=this;t&&setTimeout((function(){e.$emit("close",!1)}),1900)}}},Yt=Xt,Zt=(a("fdf8"),Object(g["a"])(Yt,Kt,Rt,!1,null,"13e93b43",null)),Qt=Zt.exports,qt={name:"Contact",components:{Snackbar:Qt},props:{nightMode:{type:Boolean}},data:function(){return{email:"",name:"",text:"",showSnackbar:!1,snackbarMessage:"",snackbarColor:""}},methods:{closeSnackbar:function(t){var e=this;t||setTimeout((function(){e.showSnackbar=t}),1e3)},sendEmail:function(){var t=this;if(this.email&&this.name&&this.text){var e={user_email:this.email,from_name:this.name,message_html:this.text,to_name:"Mahy Mohab"};Wt.a.send(zt.emailjs.serviceID,zt.emailjs.templateID,e,zt.emailjs.userID).then((function(e){t.showSnackbar=!0,t.snackbarMessage="Thanks! Message recieved.",t.snackbarColor="#1aa260",t.email="",t.text="",t.name=""}),(function(e){t.showSnackbar=!0,t.snackbarMessage="Oops! Something went wrong.",t.snackbarColor="#64808E"}))}else this.showSnackbar=!0,this.snackbarMessage="Please all the fields",this.snackbarColor="#64808E"}}},te=qt,ee=(a("fdeb"),Object(g["a"])(te,Ht,Ft,!1,null,"689a4a1d",null)),ae=(ee.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-secondary"},[a("div",{staticClass:"container py-3"},[a("div",{staticClass:"row pt-1 align-items-center"},[t._m(0),a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12"},[a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-outline-secondary mx-2 ",on:{click:function(e){return t.open("linkedin")}}},[a("i",{staticClass:"fab fa-linkedin"})]),a("button",{staticClass:"btn btn-outline-secondary mx-2",on:{click:function(e){return t.open("github")}}},[a("i",{staticClass:"fab fa-github"})])])])])])])}),ie=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-xl-6 col-bg-6 col-md-6 col-sm-12 pbelow",staticStyle:{color:"white"}},[a("span",[t._v("maGnet1C")])])}],oe={name:"Footer",data:function(){return{linkedin:u.links.linkedin,github:u.links.github,behance:u.links.behance,resume:u.links.resume}},methods:{open:function(t){switch(t){case"linkedin":window.open(this.linkedin,"_blank");break;case"github":window.open(this.github,"_blank");break;case"behance":window.open(this.behance,"_blank");break;case"resume":window.open(this.resume,"_blank");break}}}},se=oe,ne=(a("5e6f"),Object(g["a"])(se,ae,ie,!1,null,"4403965e",null)),le=ne.exports,re={name:"App",components:{Navbar:y,Home:D,About:z,Skills:Y,Portfolio:Pt,Paper:It,Footer:le},data:function(){return{nightMode:!1,config:u.config}},created:function(){this.config.use_cookies&&(this.nightMode="true"===this.$cookie.get("nightMode"))},mounted:function(){["about","contact","skills","portfolio"].forEach((function(t){if(window.location.href.includes(t)){var e=document.getElementById(t).offsetTop;window.scrollTo({top:e-35,behavior:"smooth"})}}))},methods:{switchMode:function(t){this.config.use_cookies&&this.$cookie.set("nightMode",t),this.nightMode=t},scrollTo:function(t){if("home"==t)this.$router.push("/").catch((function(){})),window.scrollTo({top:-80,behavior:"smooth"});else{var e=document.getElementById(t).offsetTop;window.scrollTo({top:e-35,behavior:"smooth"}),this.$router.history.current.path!=="/".concat(t)&&this.$router.push("/".concat(t))}}}},ce=re,de=(a("034f"),Object(g["a"])(ce,o,s,!1,null,null,null)),ue=de.exports,pe=a("f5af"),he=a.n(pe),ge=(a("e829"),a("b3b5")),me=a("f13c"),fe=a.n(me),be=a("8c4f"),ve=a("e37d"),Me=a("00e7");i["a"].use(ve["a"]),i["a"].use(be["a"]),i["a"].use(fe.a),i["a"].use(Me),i["a"].use(ge["a"]),i["a"].config.productionTip=!1;var ye=[{path:"/"}],_e=new be["a"]({mode:"history",routes:ye});new i["a"]({created:function(){he.a.init()},router:_e,render:function(t){return t(ue)}}).$mount("#app")},"5c2c":function(t,e,a){t.exports=a.p+"img/4.5ad7087c.png"},"5e6f":function(t,e,a){"use strict";var i=a("4c52"),o=a.n(i);o.a},6223:function(t,e,a){t.exports=a.p+"img/1.7b07e26d.png"},6559:function(t,e,a){t.exports=a.p+"img/3.6a0545ce.png"},"66b7":function(t,e,a){},"6e96":function(t,e,a){},"72a5":function(t,e,a){},7388:function(t,e,a){"use strict";var i=a("bbf7"),o=a.n(i);o.a},"77f9":function(t,e,a){},"7c53":function(t,e,a){t.exports=a.p+"img/2.61066aef.png"},"7f79":function(t,e,a){},"84c7":function(t,e,a){t.exports=a.p+"img/1.a9720136.png"},"85ec":function(t,e,a){},8748:function(t,e,a){t.exports=a.p+"img/4.55ae0ad1.jpg"},9388:function(t,e,a){t.exports=a.p+"img/1.47fb516c.png"},a261:function(t,e,a){t.exports=a.p+"img/3.e3ed20a4.png"},b0df:function(t,e,a){t.exports=a.p+"img/me.35b26871.jpg"},b1c7:function(t,e,a){"use strict";var i=a("273d"),o=a.n(i);o.a},b2a9:function(t,e,a){},b509:function(t,e,a){},b635:function(t,e,a){t.exports=a.p+"img/3.4b68c78b.png"},bbf7:function(t,e,a){},c5b4:function(t,e,a){"use strict";var i=a("f3a6"),o=a.n(i);o.a},cb05:function(t,e,a){t.exports=a.p+"img/2.e38ce389.jpg"},d372:function(t,e,a){t.exports=a.p+"img/1.b5ed5d14.png"},dbee:function(t,e,a){t.exports=a.p+"img/5.c73dbf88.png"},dc73:function(t,e,a){},dcce:function(t,e,a){t.exports=a.p+"img/2.68e4c090.jpg"},ddb3:function(t,e,a){"use strict";var i=a("0442"),o=a.n(i);o.a},e544:function(t,e,a){},e5e8:function(t,e,a){t.exports=a.p+"img/1.7a896d3e.png"},e8e7:function(t,e,a){"use strict";var i=a("6e96"),o=a.n(i);o.a},f08f:function(t,e,a){},f3a6:function(t,e,a){},f75d:function(t,e,a){t.exports=a.p+"img/3.18fdd265.jpg"},fcde:function(t,e,a){t.exports=a.p+"img/2.d2500842.png"},fdeb:function(t,e,a){"use strict";var i=a("66b7"),o=a.n(i);o.a},fdf8:function(t,e,a){"use strict";var i=a("77f9"),o=a.n(i);o.a}});
//# sourceMappingURL=app.6df73faa.js.map