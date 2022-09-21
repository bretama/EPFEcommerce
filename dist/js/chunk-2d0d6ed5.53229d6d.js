(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6ed5"],{7545:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"tooltip-demo"}},[e("tooltip-default"),e("tooltip-position"),e("tooltip-delay"),e("tooltip-color"),e("tooltip-title")],1)},l=[],r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vx-card",{attrs:{title:"Default","code-toggler":""}},[e("p",[t._v("To add a tooltip we have the component "),e("code",[t._v("vx-tooltip")])]),e("div",{staticClass:"demo-alignment"},[e("vx-tooltip",{attrs:{text:"Tooltip Default"}},[e("vs-switch",{model:{value:t.switch1,callback:function(o){t.switch1=o},expression:"switch1"}})],1),e("vx-tooltip",{attrs:{text:"Tooltip Default"}},[e("vs-input-number",{model:{value:t.number1,callback:function(o){t.number1=o},expression:"number1"}})],1),e("vx-tooltip",{attrs:{text:"Tooltip Default"}},[e("vs-button",{attrs:{color:"primary",type:"border"}},[t._v("Button")])],1)],1),e("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vx-tooltip text="Tooltip Default">\n    <vs-switch v-model="switch1" />\n  </vx-tooltip>\n\n  <vx-tooltip text="Tooltip Default">\n    <vs-input-number v-model="number1" />\n  </vx-tooltip>\n\n  <vx-tooltip text="Tooltip Default">\n    <vs-button color="primary" type="border">Button</vs-button>\n  </vx-tooltip>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switch1:true,\n      number1:10,\n    }\n  }\n}\n<\/script>\n        ')])],2)},i=[],s={data:function(){return{switch1:!0,number1:10}}},a=s,p=e("2877"),v=Object(p["a"])(a,r,i,!1,null,null,null),u=v.exports,c=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vx-card",{attrs:{title:"Position","code-toggler":""}},[e("p",[t._v("You can change the position at which the tooltip appears with the property "),e("code",[t._v("position")])]),e("div",{staticClass:"demo-alignment"},[e("vx-tooltip",{attrs:{text:"Tooltip position Left",position:"left"}},[e("vs-button",{attrs:{type:"gradient"}},[t._v("Left")])],1),e("vx-tooltip",{attrs:{text:"Tooltip position Top",position:"top"}},[e("vs-button",{attrs:{type:"gradient"}},[t._v("Top")])],1),e("vx-tooltip",{attrs:{text:"Tooltip position Bottom",position:"bottom"}},[e("vs-button",{attrs:{type:"gradient"}},[t._v("Bottom")])],1),e("vx-tooltip",{attrs:{text:"Tooltip position Right",position:"right"}},[e("vs-button",{attrs:{type:"gradient"}},[t._v("Right")])],1)],1),e("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vx-tooltip text="Tooltip position Left" position="left">\n    <vs-button type="gradient">Left</vs-button>\n  </vx-tooltip>\n\n  <vx-tooltip text="Tooltip position Top" position="top">\n    <vs-button type="gradient">Top</vs-button>\n  </vx-tooltip>\n\n  <vx-tooltip text="Tooltip position Bottom" position="bottom">\n    <vs-button type="gradient">Bottom</vs-button>\n  </vx-tooltip>\n\n  <vx-tooltip text="Tooltip position Right" position="right">\n    <vs-button type="gradient">Right</vs-button>\n  </vx-tooltip>\n</template>\n        ')])],2)},d=[],x={},b=Object(p["a"])(x,c,d,!1,null,null,null),g=b.exports,m=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vx-card",{attrs:{title:"Delay","code-toggler":""}},[e("p",[t._v("You can change the delay in appearing the tooltip with the property "),e("code",[t._v("delay")])]),e("div",{staticClass:"demo-alignment"},[e("vx-tooltip",{attrs:{text:"Tooltip default delay"}},[e("vs-button",[t._v("Delay default")])],1),e("vx-tooltip",{attrs:{delay:".5s",text:"Tooltip delay 0.5s"}},[e("vs-button",[t._v("Delay 0.5s")])],1),e("vx-tooltip",{attrs:{delay:"2s",text:"Tooltip delay 2s"}},[e("vs-button",[t._v("Delay 2s")])],1)],1),e("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vx-tooltip text="Tooltip default delay">\n    <vs-button>Delay default</vs-button>\n  </vx-tooltip>\n\n  <vx-tooltip delay=".5s" text="Tooltip delay 0.5s">\n    <vs-button>Delay 0.5s</vs-button>\n  </vx-tooltip>\n  \n  <vx-tooltip delay="2s" text="Tooltip delay 2s">\n    <vs-button>Delay 2s</vs-button>\n  </vx-tooltip>\n</template>\n        ')])],2)},y=[],T={},_=Object(p["a"])(T,m,y,!1,null,null,null),f=_.exports,h=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vx-card",{attrs:{title:"Color","code-toggler":""}},[e("p",[t._v("To change the color of the tooltip, use the property color. You are able to use the Main Colors or "),e("strong",[t._v("RGB")]),t._v(" and "),e("strong",[t._v("HEX")]),t._v(" colors")]),e("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[e("span",[t._v("Only "),e("strong",[t._v("RGB")]),t._v(" and "),e("strong",[t._v("HEX")]),t._v(" colors are supported.")])]),e("div",{staticClass:"demo-alignment"},[e("vx-tooltip",{attrs:{text:"Tooltip default"}},[e("vs-button",{attrs:{type:"gradient"}},[t._v("Default Color")])],1),e("vx-tooltip",{attrs:{color:"primary",text:"Tooltip Primary"}},[e("vs-button",{attrs:{type:"border"}},[t._v("Color primary")])],1),e("vx-tooltip",{attrs:{color:"success",text:"Tooltip Success"}},[e("vs-button",{attrs:{color:"success",type:"border"}},[t._v("Color success")])],1),e("vx-tooltip",{attrs:{color:"danger",text:"Tooltip Danger"}},[e("vs-button",{attrs:{color:"danger",type:"border"}},[t._v("Color danger")])],1),e("vx-tooltip",{attrs:{color:"warning",text:"Tooltip Warning"}},[e("vs-button",{attrs:{color:"warning",type:"border"}},[t._v("Color warning")])],1),e("vx-tooltip",{attrs:{color:"dark",text:"Tooltip Dark"}},[e("vs-button",{attrs:{color:"dark",type:"border"}},[t._v("Color dark")])],1),e("vx-tooltip",{attrs:{color:"rgb(42, 207, 133)",text:"Tooltip RGB"}},[e("vs-button",{attrs:{color:"rgb(42, 207, 133)",type:"border"}},[t._v("Color RGB")])],1),e("vx-tooltip",{attrs:{color:"#4a0d6b",text:"Tooltip HEX"}},[e("vs-button",{attrs:{color:"#4a0d6b",type:"border"}},[t._v("Color HEX")])],1)],1),e("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vx-tooltip text="Tooltip default">\n    <vs-button type="gradient">Default Color</vs-button>\n  </vx-tooltip>\n\n  <vx-tooltip color="primary" text="Tooltip Primary">\n    <vs-button type="border">Color primary</vs-button>\n  </vx-tooltip>\n\n  <vx-tooltip color="success" text="Tooltip Success">\n    <vs-button color="success" type="border">Color success</vs-button>\n  </vx-tooltip>\n\n  <vx-tooltip color="danger" text="Tooltip Danger">\n    <vs-button color="danger" type="border">Color danger</vs-button>\n  </vx-tooltip>\n\n  <vx-tooltip color="warning" text="Tooltip Warning">\n    <vs-button color="warning" type="border">Color warning</vs-button>\n  </vx-tooltip>\n\n  <vx-tooltip color="dark" text="Tooltip Dark">\n    <vs-button color="dark" type="border">Color dark</vs-button>\n  </vx-tooltip>\n\n  <vx-tooltip color="rgb(42, 207, 133)" text="Tooltip RGB">\n    <vs-button color="rgb(42, 207, 133)" type="border">Color RGB</vs-button>\n  </vx-tooltip>\n  \n  <vx-tooltip color="#4a0d6b" text="Tooltip HEX">\n    <vs-button color="#4a0d6b" type="border">Color HEX</vs-button>\n  </vx-tooltip>\n</template>\n        ')])],2)},C=[],w={},D=Object(p["a"])(w,h,C,!1,null,null,null),k=D.exports,B=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("vx-card",{attrs:{title:"Title","code-toggler":""}},[e("p",[t._v("If necessary, you can add a title to the tooltip with the property "),e("code",[t._v("title")])]),e("div",{staticClass:"demo-alignment"},[e("vx-tooltip",{attrs:{title:"Are you sure?",color:"warning",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet."}},[e("vs-button",{attrs:{color:"warning",type:"flat"}},[t._v("Title Tooltip")])],1)],1),e("template",{slot:"codeContainer"},[t._v('\n<template>\n  <vx-tooltip\n    title="Are you sure?"\n    color="warning"\n    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque non neque sed aliquet.">\n    \n    <vs-button color="warning" type="flat">Title Tooltip</vs-button>\n  </vx-tooltip>\n</template>\n        ')])],2)},E=[],R={},O=Object(p["a"])(R,B,E,!1,null,null,null),j=O.exports,q={components:{TooltipDefault:u,TooltipPosition:g,TooltipDelay:f,TooltipTitle:j,TooltipColor:k}},G=q,H=Object(p["a"])(G,n,l,!1,null,null,null);o["default"]=H.exports}}]);
//# sourceMappingURL=chunk-2d0d6ed5.53229d6d.js.map