(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44696261"],{"40b3":function(t,n,s){},"436b":function(t,n,s){},"5c47":function(t,n,s){},"69e3":function(t,n,s){"use strict";s("40b3")},"9f2c":function(t,n,s){"use strict";s("436b")},bb44:function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"questions"},t._l(t.getQuestions,(function(t){return s("app-question",{attrs:{question:t}})})),1)},a=[],i=s("5530"),o=s("2f62"),u=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"question",on:{click:function(n){return t.onQuestion()}}},[s("span",{staticClass:"head"},[s("h3",[t._v(t._s(t.question.question))]),s("p",{staticClass:"time"},[t._v(t._s(t._f("moment")(t.question.timestamp,"from")))])]),s("span",{staticClass:"user"},[s("app-avatar",{attrs:{avatar:t.question.author}}),s("p",{staticClass:"user-name"},[t._v(t._s(t.question.author.name))])],1),s("p",{staticClass:"description"},[t._v(t._s(t.question.description))]),s("div",{staticClass:"answers"},[t._l(t.slicedAnswers,(function(n){return s("div",{staticClass:"answer"},[s("app-avatar",{attrs:{avatar:{name:n.name}}}),s("p",[t._v(t._s(n.answer))])],1)})),t.question&&t.question.answers&&t.sliceEnd<t.question.answers.length?s("button",{on:{click:function(n){t.sliceEnd=t.sliceEnd+3}}},[t._v(" See more ")]):t._e()],2)])},c=[],r=(s("fb6a"),function(){var t=this,n=t.$createElement,s=t._self._c||n;return t.avatar?s("div",{staticClass:"avatar",style:{backgroundColor:t.avatarBg}},[t._v(" "+t._s(t.avatar.name.charAt(0).toUpperCase())+" ")]):t._e()}),l=[],p=(s("d3b7"),s("25f0"),{name:"avatar",components:{},props:["avatar"],data:function(){return{}},computed:{avatarBg:function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16),"A3")}},mounted:function(){},methods:{}}),d=p,f=(s("69e3"),s("2877")),m=Object(f["a"])(d,r,l,!1,null,"32c32fb1",null),h=m.exports,b={name:"app-question",components:{"app-avatar":h},props:["question"],data:function(){return{sliceEnd:3}},computed:{slicedAnswers:function(){return this.question&&this.question.answers&&this.question.answers.length&&this.question.answers.slice(0,this.sliceEnd)}},mounted:function(){},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["setSelected"])),{},{onQuestion:function(){this.setSelected(this.question),this.$router.push(["questions","".concat(this.question.id)]).catch((function(){return null}))}})},v=b,q=(s("cd90"),Object(f["a"])(v,u,c,!1,null,"1d2446b3",null)),_=q.exports,w={name:"questions",components:{"app-question":_},props:[],data:function(){return{question:{question:"How to build a new Database?",timestamp:160806e4,author:{name:"Mark Antony"}}}},computed:Object(i["a"])({},Object(o["c"])(["getQuestions"])),mounted:function(){this.fetchQuestions()},methods:Object(i["a"])({},Object(o["b"])(["fetchQuestions"]))},C=w,j=(s("9f2c"),Object(f["a"])(C,e,a,!1,null,"68db9f6d",null));n["default"]=j.exports},cd90:function(t,n,s){"use strict";s("5c47")}}]);
//# sourceMappingURL=chunk-44696261.5af4575f.js.map