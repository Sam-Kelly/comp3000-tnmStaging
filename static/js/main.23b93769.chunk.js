(window.webpackJsonptnm=window.webpackJsonptnm||[]).push([[0],{19:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/T_cancer.79be7f99.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/mucosa.85c01dd3.png"},34:function(e,t,a){e.exports=a.p+"static/media/submucosa.8a88a541.png"},35:function(e,t,a){e.exports=a.p+"static/media/muscularis.d18111dc.png"},36:function(e,t,a){e.exports=a.p+"static/media/serosa.66a91a21.png"},37:function(e,t,a){e.exports=a.p+"static/media/endstage.5c625fe3.png"},40:function(e,t,a){e.exports=a.p+"static/media/metastasisCT.02ba303e.png"},42:function(e,t,a){e.exports=a(74)},73:function(e,t,a){e.exports=a.p+"static/media/n.41bfa8f6.gif"},74:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(9),c=a(11),i=a(10),r=a(12),o=a(0),s=a.n(o),m=a(15),d=a.n(m),h=(a(19),a(4)),u=a(16),p=(a(47),a(21)),g=a.n(p),b=a(41),E=a(25),v=a.n(E),y=a(33),f=a.n(y),x=a(34),w=a.n(x),S=a(35),k=a.n(S),C=a(36),N=a.n(C),T=a(37),O=a.n(T),j=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={ans:0},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"handleChoice",value:function(e){console.log(e.target.value),this.setState({ans:e.target.value}),this.updateResponse()}},{key:"updateResponse",value:function(){var e;return 0==this.state.ans&&(e=s.a.createElement("p",null,"Select a choice from the list shown")),"t0"==this.state.ans&&(e=s.a.createElement("div",{style:{border:"2px solid red",padding:"15px"}}," Tis is not correct. A tumour that is \u201cTis\u201d has invaded into the mucosa, which is the layer highlighted below.",s.a.createElement("br",null),s.a.createElement("img",{src:f.a,style:{padding:"15px",width:"500px",height:"500px"}}))),"t1"==this.state.ans&&(e=s.a.createElement("div",{style:{border:"2px solid green",padding:"15px"}},"T1 is correct. A tumour that is \u201cT1\u201d has invaded into the submucosa, which is the layer highlighted below.",s.a.createElement("br",null),s.a.createElement("img",{src:w.a,style:{padding:"15px",width:"500px",height:"500px"}}))),"t2"==this.state.ans&&(e=s.a.createElement("div",{style:{border:"2px solid red",padding:"15px"}},"T2 is not correct. A tumour that is \u201cT2\u201d has invaded into the muscularis propria, which is the layer highlighted below.",s.a.createElement("br",null),s.a.createElement("img",{src:k.a,style:{padding:"15px",width:"500px",height:"500px"}}))),"t3"==this.state.ans&&(e=s.a.createElement("div",{style:{border:"2px solid red",padding:"15px"}},"T3 is not correct. A tumour that is \u201cT3\u201d has invaded into the serosa / adventitia, which is the layer highlighted below.",s.a.createElement("br",null),s.a.createElement("img",{src:N.a,style:{padding:"15px",width:"500px",height:"500px"}}))),"t4"==this.state.ans&&(e=s.a.createElement("div",{style:{border:"2px solid red",padding:"15px"}},'T4 is not correct. A tumour that is "T4" has grown through all the layers of the colon.',s.a.createElement("br",null),s.a.createElement("img",{src:O.a,style:{padding:"15px",width:"500px",height:"500px"}}))),e}},{key:"render",value:function(){var e;return e=this.updateResponse(),s.a.createElement("div",null,s.a.createElement("div",{className:"nav"},s.a.createElement(h.b,{to:"/comp3000-tnmStaging/intro"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Intro")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/t"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Tumour Stage (T)")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/n"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Nodes Stage (N)")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/m"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Metastasis Stage (M)")," ")),s.a.createElement("h3",null,"Tumour Stage (T)"),s.a.createElement("p",{className:"col-sm-12"},"The histopathology for a cancer is shown below. What is the value of \u201cT\u201d?"),s.a.createElement("div",{class:"row"},s.a.createElement("div",{className:"fluid col-sm-6"},s.a.createElement("div",{className:"fluid__image-container"},s.a.createElement(b.a,{smallImage:{alt:"CT Scan of Patient",isFluidWidth:!0,src:v.a},largeImage:{src:v.a,width:2560,height:1900}}))),s.a.createElement("div",{className:"col-sm-12"},s.a.createElement("div",null,s.a.createElement("p",null,"Image from ",s.a.createElement("a",{href:"https://www.best.edu.au/s/zi4ce6h3"},"https://www.best.edu.au/s/zi4ce6h3")," "),s.a.createElement("div",null,s.a.createElement(g.a,null,s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"t0"},s.a.createElement("input",{type:"radio",name:"schedule-weekly-option",value:"t0",id:"t0",onChange:this.handleChoice.bind(this)}),"Tis")),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"t1"},s.a.createElement("input",{type:"radio",name:"schedule-weekly-option",value:"t1",id:"t1",onChange:this.handleChoice.bind(this)}),"T1")),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"t2"},s.a.createElement("input",{type:"radio",name:"schedule-weekly-option",value:"t2",id:"t2",onChange:this.handleChoice.bind(this)}),"T2")),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"t3"},s.a.createElement("input",{type:"radio",name:"schedule-weekly-option",value:"t3",id:"t3",onChange:this.handleChoice.bind(this)}),"T3")),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"t4"},s.a.createElement("input",{type:"radio",name:"schedule-weekly-option",value:"t4",id:"t4",onChange:this.handleChoice.bind(this)}),"T4"))))),s.a.createElement("div",null,e))))}}]),t}(s.a.Component),M=a(40),A=a.n(M),I=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={ans:0},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"handleChoice",value:function(e){console.log(e.target.value),this.setState({ans:e.target.value}),this.updateResponse()}},{key:"updateResponse",value:function(){var e;return 0==this.state.ans&&(e=s.a.createElement("p",null,"Select a choice from the list above")),"m0"==this.state.ans&&(e=s.a.createElement("div",{style:{border:"2px solid green",margin:"2px",padding:"15px",clear:"left"}},"Good job! The abdominal CT is unremarkable \u2013 there is no indication of metastatic disease. M0 is correct. ",s.a.createElement("br",null),s.a.createElement("br",null),"Now that we know that T, N, and M, what is the overall stage of the cancer?")),"m1"==this.state.ans&&(e=s.a.createElement("div",{style:{border:"2px solid red",margin:"2px",padding:"15px",clear:"left"}},"Good try! The abdominal CT is unremarkable \u2013 there is no indication of metastatic disease. M1 is incorrect.")),e}},{key:"render",value:function(){var e;return e=this.updateResponse(),console.log("render"),console.log(this.state.ans),s.a.createElement("div",null,s.a.createElement("div",{className:"nav"},s.a.createElement(h.b,{to:"/comp3000-tnmStaging/intro"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Intro")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/t"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Tumour Stage (T)")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/n"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Nodes Stage (N)")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/m"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Metastasis Stage (M)")," ")),s.a.createElement("h3",null,"Metastasis Stage (M)"),s.a.createElement("p",{className:"col-sm-12"},"An abdominal CT is shown below. What is the value of \u201cM\u201d? Consider what the most common site of metastasis for colon cancer is. "),s.a.createElement("div",null,s.a.createElement("img",{src:A.a,style:{height:"500px"}})),s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement(g.a,null,s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"m0"},s.a.createElement("input",{type:"radio",name:"option",value:"m0",id:"m0",onChange:this.handleChoice.bind(this)}),"M0")),s.a.createElement("div",null,s.a.createElement("label",{htmlFor:"m1"},s.a.createElement("input",{type:"radio",name:"option",value:"m1",id:"m1",onChange:this.handleChoice.bind(this)}),"M1")))),s.a.createElement("div",null,e))}}]),t}(s.a.Component),F=a(17),R=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={nodesSelected:0,answer:s.a.createElement("p",null)},a.handleClick=a.handleClick.bind(Object(F.a)(a)),a.checkAnswer=a.checkAnswer.bind(Object(F.a)(a)),a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){this.setState({nodesSelected:this.state.nodesSelected+=e}),console.log(this.state.nodesSelected)}},{key:"checkAnswer",value:function(){var e;e=this.state.nodesSelected>=1&&this.state.nodesSelected<=3?s.a.createElement("div",{style:{border:"2px solid green",margin:"2px",padding:"15px",clear:"left"}},"Correct! N1 is 1 - 3 regional lymph nodes."):s.a.createElement("div",{style:{border:"2px solid red",margin:"2px",padding:"15px",clear:"left"}},"Incorrect! N1 is 1 - 3 regional lymph nodes."),this.setState({answer:e})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{className:"nav"},s.a.createElement(h.b,{to:"/comp3000-tnmStaging/intro"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Intro")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/t"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Tumour Stage (T)")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/n"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Nodes Stage (N)")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/m"}," ",s.a.createElement("button",{type:"button",className:"col-sm-3"},"Metastasis Stage (M)")," ")),s.a.createElement("div",null,s.a.createElement("h3",null,"Node Stage (N)"),s.a.createElement("p",null,"It was found that the value for \u201cN\u201d is 1. Please select the correct amount of lymph nodes that corresponds to N1 in the diagram below. ")),s.a.createElement("div",{id:"n-id"},s.a.createElement("img",{id:"n-img",src:a(73),alt:"lymph node image"}),s.a.createElement("svg",{id:"n-svg",width:"470",height:"543"},s.a.createElement(W,{handler:this.handleClick,id:"n1",cx:"163",cy:"270",r:"5"}),s.a.createElement(W,{handler:this.handleClick,id:"n2",cx:"152",cy:"272",r:"5"}),s.a.createElement(W,{handler:this.handleClick,id:"n3",cx:"140",cy:"285",r:"6"}),s.a.createElement(W,{handler:this.handleClick,id:"n4",cx:"141",cy:"307",r:"5"}),s.a.createElement(W,{handler:this.handleClick,id:"n5",cx:"142",cy:"318",r:"5"}),s.a.createElement(W,{handler:this.handleClick,id:"n6",cx:"152",cy:"314",r:"5"}),s.a.createElement(W,{handler:this.handleClick,id:"n7",cx:"146",cy:"340",r:"6"}),s.a.createElement(W,{handler:this.handleClick,id:"n8",cx:"140",cy:"356",r:"6"}))),s.a.createElement("button",{className:"col-sm-4",onClick:this.checkAnswer},"Submit answer"),this.state.answer)}}]),t}(s.a.Component),W=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={isToggleOn:!1,colour:"transparent"},a.handleClick=a.handleClick.bind(Object(F.a)(a)),a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(){var e,t;e=!this.state.isToggleOn,"transparent"==this.state.colour?(t="red",this.props.handler(1)):(t="transparent",this.props.handler(-1)),this.setState({isToggleOn:e,colour:t})}},{key:"render",value:function(){return s.a.createElement("circle",{id:this.props.id,className:"n-circle",cx:this.props.cx,cy:this.props.cy,r:this.props.r,strokeWidth:"1",fill:this.state.colour,onClick:this.handleClick})}}]),t}(s.a.Component),_=R,z=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"The goal is to identify the TNM Stage of a cancer by working through T, N and M. Click on the following to continue."),s.a.createElement("div",{className:"buttons"},s.a.createElement(h.b,{to:"/comp3000-tnmStaging/t"}," ",s.a.createElement("button",{type:"button"},"Tumour (T)")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/n"}," ",s.a.createElement("button",{type:"button"},"Nodes (N)")," "),s.a.createElement(h.b,{to:"/comp3000-tnmStaging/m"}," ",s.a.createElement("button",{type:"button"},"Metastasis (M)")," ")))}}]),t}(s.a.Component),G=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(u.c,null,s.a.createElement(u.a,{exact:!0,path:"/comp3000-tnmStaging/",component:J}),s.a.createElement(u.a,{exact:!0,path:"/comp3000-tnmStaging/intro",component:z}),s.a.createElement(u.a,{exact:!0,path:"/comp3000-tnmStaging/t",component:j}),s.a.createElement(u.a,{exact:!0,path:"/comp3000-tnmStaging/n",component:_}),s.a.createElement(u.a,{exact:!0,path:"/comp3000-tnmStaging/m",component:I})))))}}]),t}(s.a.Component),J=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("p",null,"Welcome to the TNM Staging App!",s.a.createElement("br",null),s.a.createElement("br",null)),s.a.createElement("div",{className:"buttons"},s.a.createElement(h.b,{to:"/comp3000-tnmStaging/intro"},s.a.createElement("button",{type:"button"},"click to begin"))))}}]),t}(s.a.Component);d.a.render(s.a.createElement(h.a,{basename:"/comp3000-tnmStaging"},s.a.createElement(G,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.23b93769.chunk.js.map