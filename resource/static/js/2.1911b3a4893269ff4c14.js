webpackJsonp([2],{"8Fvx":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("uwLk"),a={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("nav-g"),t._v(" "),i("CalculatorItem",{staticClass:"input-box",attrs:{"input-show":t.inputShow}}),t._v(" "),i("div",{attrs:{id:"btn-list"}},[i("div",{staticClass:" btn-30 btn-radius color-red clear-marginleft",on:{click:function(n){return t.clearValue()}}},[t._v("C")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius color-blue",on:{click:function(n){return t.oppositeValue()}}},[t._v("+/-")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius color-blue",on:{click:function(n){return t.inputValue("%")}}},[t._v("%")]),t._v(" "),i("div",{staticClass:" btn-70 btn-radius color-red font-14",on:{click:function(n){return t.backValue()}}},[t._v("←")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius clear-marginleft",on:{click:function(n){return t.inputValue("7")}}},[t._v("7")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius",on:{click:function(n){return t.inputValue("8")}}},[t._v("8")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius",on:{click:function(n){return t.inputValue("9")}}},[t._v("9")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius color-blue font-14",on:{click:function(n){return t.squareValue()}}},[t._v("×²")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius color-blue font-12",on:{click:function(n){return t.radicalValue()}}},[t._v("√")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius clear-marginleft",on:{click:function(n){return t.inputValue("4")}}},[t._v("4")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius",on:{click:function(n){return t.inputValue("5")}}},[t._v("5")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius",on:{click:function(n){return t.inputValue("6")}}},[t._v("6")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius color-blue font-14",on:{click:function(n){return t.inputValue("×")}}},[t._v("×")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius color-blue font-12",on:{click:function(n){return t.inputValue("÷")}}},[t._v("÷")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius clear-marginleft",on:{click:function(n){return t.inputValue("1")}}},[t._v("1")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius",on:{click:function(n){return t.inputValue("2")}}},[t._v("2")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius",on:{click:function(n){return t.inputValue("3")}}},[t._v("3")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius color-blue font-14",on:{click:function(n){return t.inputValue("+")}}},[t._v("+")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius color-blue font-14",on:{click:function(n){return t.inputValue("-")}}},[t._v("-")]),t._v(" "),i("div",{staticClass:" btn-70 btn-radius clear-marginleft",on:{click:function(n){return t.inputValue("0")}}},[t._v("0")]),t._v(" "),i("div",{staticClass:" btn-30 btn-radius",on:{click:function(n){return t.inputValue(".")}}},[t._v(".")]),t._v(" "),i("div",{staticClass:" btn-70 btn-radius color-red font-14",on:{click:function(n){return t.calValue()}}},[t._v("=")])])],1)},staticRenderFns:[]};var u=function(t){i("G/1N")},r=i("VU/8")(e.a,a,!1,u,null,null);n.default=r.exports},"G/1N":function(t,n){},RNah:function(t,n,i){"use strict";var e={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],attrs:{type:"text",size:"21",maxlength:"21",readonly:"readonly"},domProps:{value:t.value},on:{input:function(n){n.target.composing||(t.value=n.target.value)}}})])},staticRenderFns:[]};var a=i("VU/8")({props:["inputShow"],components:{},computed:{value:function(){return this.inputShow.value}},methods:{}},e,!1,function(t){i("tZzU")},"data-v-88d3c4aa",null);n.a=a.exports},tZzU:function(t,n){},uwLk:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0__pages_Home_Children_CalculatorItem__=__webpack_require__("RNah"),__WEBPACK_IMPORTED_MODULE_1__components_front_navG__=__webpack_require__("WoDE");__webpack_exports__.a={data:function(){return{inputShow:{value:"0"}}},methods:{inputValue:function(t){"[object Number]"==Object.prototype.toString.call(this.inputShow.value)&&(this.inputShow.value="0");var n=""+this.inputShow.value,i=n.length,e=["+","-","×","÷"],a=(""+parseFloat(n.split("").reverse().join(""))).split("").reverse().join(""),u=a.length;if("0"!=a&&"."!=t||"."==t&&-1==a.indexOf(".")){if(-1!=e.indexOf(n.charAt(i-1))&&-1!=e.indexOf(t))return;this.inputShow.value+=t}else{if(e.push("%"),"."==t)return;-1==e.indexOf(t)&&(this.inputShow.value=n.substring(0,n.length-u)+t)}},clearValue:function(){this.inputShow.value="0"},calValue:function calValue(){var str=this.inputShow.value;str=str.replace("×","*").replace("÷","/").replace("%","*0.01");try{this.inputShow.value=eval(str)}catch(t){return}},squareValue:function squareValue(){var str=this.inputShow.value;this.inputShow.value=Math.pow(eval(str),2)},radicalValue:function radicalValue(){var str=this.inputShow.value;this.inputShow.value=Math.sqrt(eval(str))},backValue:function(){var t=this.inputShow.value;1==t.length?this.inputShow.value="0":this.inputShow.value=t.slice(0,t.length-1)},oppositeValue:function(){var t=this.inputShow.value,n=(""+parseInt(t.split("").reverse().join(""))).split("").reverse().join(""),i=n.length;isNaN(parseInt(t.charAt(t.length-1)))||0==n||(this.inputShow.value=t.substring(0,t.length-i)+"-"+n)}},components:{CalculatorItem:__WEBPACK_IMPORTED_MODULE_0__pages_Home_Children_CalculatorItem__.a,navG:__WEBPACK_IMPORTED_MODULE_1__components_front_navG__.a}}}});
//# sourceMappingURL=2.1911b3a4893269ff4c14.js.map