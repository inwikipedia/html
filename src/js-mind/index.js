!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["simple-chart"]=e():t["simple-chart"]=e()}(self,(function(){return(()=>{var t={357:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var n=i(645),o=i.n(n)()((function(t){return t[1]}));o.push([t.id,".node-adder{position:absolute;box-sizing:border-box;z-index:998}.node-adder .adder-handle{display:block;position:absolute;width:5px;height:5px;border-radius:5px;border:1px solid #aaa;background-color:#fff;cursor:pointer}.node-adder .adder-handle.handle-left{left:-4px;top:50%;margin-top:-4px}.node-adder .adder-handle.handle-top{top:-4px;left:50%;margin-left:-4px}.node-adder .adder-handle.handle-right{right:-4px;top:50%;margin-top:-4px}.node-adder .adder-handle.handle-bottom{bottom:-4px;left:50%;margin-left:-4px}.node-editer{position:absolute;box-sizing:border-box;z-index:999;display:flex;justify-content:center;align-items:center}.node-editer input{background:#fff;border:0;width:100%;text-align:center;line-height:28px}.js-mind-tools{position:absolute;right:0px;top:4px;z-index:9}.js-mind-tools .js-mind-tool-button{cursor:pointer;margin-right:8px;display:inline-block}.js-mind-tools .js-mind-tool-button:hover{opacity:0.8}.js-mind-dialog{display:block;position:fixed;top:100px;left:50%;margin-left:-340px;min-width:680px;text-align:left;background-color:#FFFFFF;border:0;border-radius:5px;box-shadow:0 0 40px rgba(0,0,0,0.2);z-index:999;-webkit-animation:0.3s modal-animate ease-out 1 forwards;animation:0.3s modal-animate ease-out 1 forwards}.js-mind-dialog .mind-dialog-header{box-sizing:border-box;margin:0;width:100%;padding:16px 32px;font-size:16px;line-height:18px;font-weight:bold;border-radius:5px;display:flex;justify-content:space-between}.js-mind-dialog .mind-dialog-header .mind-dialog-close{cursor:pointer;z-index:1;font-size:14px;margin-top:10px;font-family:inherit;display:block;width:20px;height:20px;font-size:24px;line-height:18px;text-align:center;color:#000;transition:all .3s ease-out}.js-mind-dialog .mind-dialog-header .mind-dialog-close:hover{transform:rotate(180deg)}.js-mind-dialog .mind-dialog-body{width:100%;height:480px;padding:20px;overflow-y:auto;background-color:#F4F4F4;box-sizing:border-box}\n",""]);const r=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=t(e);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var l=[].concat(t[s]);n&&o[l[0]]||(i&&(l[2]?l[2]="".concat(i," and ").concat(l[2]):l[2]=i),e.push(l))}},e}},283:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>v});var n=i(379),o=i.n(n),r=i(795),a=i.n(r),s=i(569),l=i.n(s),d=i(565),c=i.n(d),h=i(216),u=i.n(h),p=i(589),f=i.n(p),m=i(357),g={};g.styleTagTransform=f(),g.setAttributes=c(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=u(),o()(m.Z,g);const v=m.Z&&m.Z.locals?m.Z.locals:void 0},379:t=>{"use strict";var e=[];function i(t){for(var i=-1,n=0;n<e.length;n++)if(e[n].identifier===t){i=n;break}return i}function n(t,n){for(var r={},a=[],s=0;s<t.length;s++){var l=t[s],d=n.base?l[0]+n.base:l[0],c=r[d]||0,h="".concat(d," ").concat(c);r[d]=c+1;var u=i(h),p={css:l[1],media:l[2],sourceMap:l[3]};-1!==u?(e[u].references++,e[u].updater(p)):e.push({identifier:h,updater:o(p,n),references:1}),a.push(h)}return a}function o(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i.update(t=e)}else i.remove()}}t.exports=function(t,o){var r=n(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<r.length;a++){var s=i(r[a]);e[s].references--}for(var l=n(t,o),d=0;d<r.length;d++){var c=i(r[d]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,i){var n=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(i)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,i)=>{"use strict";t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var n=i.css,o=i.media,r=i.sourceMap;o?t.setAttribute("media",o):t.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(n,t)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},658:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MOUSESCROLL=e.MOUSEUP=e.MOUSEOUT=e.MOUSEMOVE=e.MOUSEDOWN=e.CLICK=void 0,e.CLICK=Symbol("click"),e.MOUSEDOWN=Symbol("mousedown"),e.MOUSEMOVE=Symbol("mousemove"),e.MOUSEOUT=Symbol("mouseout"),e.MOUSEUP=Symbol("mouseup"),e.MOUSESCROLL=Symbol("mousescroll")},675:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){var i=this;this.node=t,this.editer=e,["left","top","right","bottom"].forEach((function(e){var n=document.createElement("div");n.classList.add("adder-handle","handle-"+e),n.onclick=function(){i.callback(e)},t.appendChild(n)}));var n=document.createElement("input");e.appendChild(n),n.onkeydown=function(t){t.stopPropagation()},this.node.ondblclick=function(){i.editer.style.display="flex",i.editCallback(n)}}return t.prototype.show=function(t,e,i,n){this.node.style.left=t-i/2+"px",this.node.style.top=e-n/2+"px",this.node.style.width=i+"px",this.node.style.height=n+"px",this.node.style.display="block",this.editer.style.left=t-i/2+3+"px",this.editer.style.top=e-n/2+3+"px",this.editer.style.width=i-6+"px",this.editer.style.height=n-6+"px"},t.prototype.hide=function(){this.node.style.display="none",this.editer.style.display="none"},t.prototype.onAdd=function(t){this.callback=t},t.prototype.onEdit=function(t){this.editCallback=t},t.init=function(e){var i=document.createElement("div");i.style.display="none",i.classList.add("node-adder"),e.appendChild(i);var n=document.createElement("div");return n.style.display="none",n.classList.add("node-editer"),e.appendChild(n),new t(i,n)},t}();e.default=i},123:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){this.eventType=t,this.callback=e}},72:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Mind=void 0;var o=n(i(471)),r=n(i(675)),a=i(402),s=function(){function t(t){if(this.id="mind",this.nodes=[],this.recoverAnimateList=[],this.data=[],this.nodeTree=[],this.space={width:100,height:100},t){this.id=t.id||"mind",this.stage2d=new o.default(t),this.initTool(t);var e=localStorage.getItem(this.id+"-data");this.data=e?JSON.parse(e):null}}return t.prototype.init=function(t){var e=this;this.initAdder(),Array.isArray(this.data)||(this.data=t,localStorage.setItem(this.id+"-data",JSON.stringify(t))),this.initNode(this.data),this.initPosition(!0),this.stage2d.addEventListener("click",(function(t){t.target?(e.selected=t.target,t.target.actived=!0,e.adder.show(t.target.x+e.stage2d.translateX,t.target.y+e.stage2d.translateY,t.target.width,t.target.height)):(e.selected=null,e.adder.hide())})),this.render()},t.prototype.initTool=function(t){var e=this,i=document.createElement("div");i.classList.add("js-mind-tools"),t.appendChild(i);var n=document.createElement("div");n.classList.add("js-mind-tool-button"),n.title="清空节点",n.innerHTML='\n      <svg t="1629865129898" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8065" width="22" height="22">\n        <path d="M340.88 839.624L155.76 659.722l129.921-133.803L571.05 819.852l-19.196 19.772H340.88z m552.795-352.045L621.453 767.947l-285.4-293.932 272.232-280.368 285.39 293.932z m100.796 0L608.285 89.838 53.45 661.263l259.305 251.969h555.424v-73.608H652.65l341.821-352.045z" fill="#707070" p-id="8066" data-spm-anchor-id="a313x.7781069.0.i0" class="selected"></path>\n      </svg>\n    ',n.onclick=function(){window.confirm("你确定要清除所有节点吗？")},i.appendChild(n);var o=document.createElement("div");n.title="保存 Json Data",o.classList.add("js-mind-tool-button"),o.innerHTML='\n      <svg t="1629866123722" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8949" width="22" height="22">\n        <path d="M62.848 60.992h704v64h-704zM62.848 640.832h543.936v64H62.848z" p-id="8950" fill="#707070"></path>\n        <path d="M702.848 60.992h64v320h-64zM62.848 113.536h64v527.296h-64z" p-id="8951" fill="#707070"></path>\n        <path d="M70.528 498.304l218.24-117.312 30.4 56.32-218.304 117.376z" p-id="8952" fill="#707070"></path>\n        <path d="M298.432 375.04l144.896 274.176-56.576 29.888L241.92 404.928zM512 194.176h126.592v127.168H512zM663.296 448.448h128v320h-128z" p-id="8953" fill="#707070"></path>\n        <path d="M599.36 764.992l127.936 128 128.064-128z" p-id="8954" fill="#707070"></path>\n      </svg>\n    ',o.onclick=function(){};var r=document.createElement("div");r.classList.add("js-mind-tool-button"),r.innerHTML='\n      <svg t="1629869742720" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14016" width="22" height="22"><path d="M742.4 755.456H564.770133c-14.4384 0-26.112 12.475733-26.112 27.869867v168.618666h28.433067L742.4 760.439467v-4.983467zM742.4 699.733333v-88.183466c0-15.189333 11.4688-27.477333 25.6-27.477334s25.6 12.288 25.6 27.477334v160.136533c0 7.2192-2.645333 14.1312-7.338667 19.285333L596.087467 998.7072a24.746667 24.746667 0 0 1-18.261334 8.226133H194.56C129.536 1006.933333 76.8 950.306133 76.8 880.452267V143.530667C76.8 73.693867 129.536 17.066667 194.56 17.066667h481.28C740.864 17.066667 793.6 73.693867 793.6 143.547733v48.930134c0 15.189333-11.4688 27.477333-25.6 27.477333s-25.6-12.288-25.6-27.477333V143.530667c0-39.4752-29.7984-71.492267-66.56-71.492267H194.56c-36.7616 0-66.56 32.017067-66.56 71.509333v736.887467c0 39.4752 29.7984 71.492267 66.56 71.492267H486.4v-168.618667C486.4 737.160533 521.489067 699.733333 564.770133 699.733333H742.4zM289.058133 294.570667h33.3824l-15.581866 153.275733c-2.645333 26.026667-9.437867 45.056-20.4288 57.7536-12.1856 13.329067-29.986133 20.002133-53.674667 20.002133-20.548267 0-35.601067-6.3488-44.868267-19.0464-9.557333-12.6976-13.192533-30.139733-10.939733-52.360533l0.733867-7.304533h33.399466l-0.7168 6.997333c-2.645333 26.0096 6.024533 39.0144 26.282667 39.0144 11.127467 0 19.797333-3.805867 25.668267-11.093333 5.888-7.304533 9.642667-19.0464 11.281066-35.2256l15.4624-152.0128z m144.128-4.437334c23.978667 0 42.257067 5.393067 54.545067 16.503467 13.073067 11.741867 19.473067 30.139733 18.944 54.903467H473.6c-1.4336-13.9776-5.819733-24.132267-12.629333-30.1568-6.775467-6.3488-17.902933-9.198933-32.733867-9.198934-12.8512 0-22.7328 1.911467-30.0032 6.024534-9.045333 4.778667-13.858133 12.6976-14.9504 23.483733-0.9728 9.5232 2.798933 17.4592 11.912533 23.176533 4.027733 2.525867 15.240533 7.287467 33.399467 13.960534 26.709333 9.506133 43.6224 17.134933 51.0976 22.203733 16.503467 11.741867 23.7056 27.938133 21.572267 48.878933-2.048 20.309333-10.837333 36.488533-26.299734 48.2304-15.428267 11.434667-36.3008 17.4592-62.276266 17.4592-25.105067 0-44.253867-5.393067-57.1392-16.196266-15.7696-13.312-23.04-34.269867-21.538134-63.146667h33.109334c0.512 17.134933 4.693333 29.525333 12.8 36.8128 7.338667 6.3488 19.2512 9.8304 36.096 9.8304 14.848 0 27.101867-2.850133 36.215466-8.2432 9.147733-5.717333 14.455467-13.0048 15.428267-22.528 1.211733-12.066133-4.369067-21.589333-16.213333-28.5696-3.771733-2.218667-16.384-7.287467-38.161067-14.916267-24.200533-8.874667-39.253333-15.223467-44.868267-19.029333-14.626133-10.478933-20.7872-25.7024-18.7392-45.704533 2.030933-19.985067 11.0592-35.84 27.630934-47.274667 15.394133-11.093333 33.928533-16.503467 55.893333-16.503467z m207.223467 0c31.112533 0 54.528 11.093333 70.212267 33.621334 14.9504 21.282133 20.650667 49.527467 17.1008 84.4288-3.549867 34.901333-14.9504 62.8224-34.235734 84.087466-20.241067 22.2208-45.909333 33.3312-77.0048 33.3312-31.402667 0-54.784-11.434667-70.212266-33.6384-14.933333-21.589333-20.360533-49.5104-16.878934-83.797333 3.515733-34.577067 14.626133-62.498133 33.962667-84.0704C583.338667 301.226667 609.006933 290.133333 640.392533 290.133333z m-3.242667 32.682667c-21.128533 0-38.1952 7.936-51.5072 23.808-12.680533 15.223467-20.1728 35.5328-22.818133 61.559467-2.6112 25.7024 0.750933 46.011733 10.325333 61.252266 9.847467 15.530667 25.582933 23.466667 46.6944 23.466667 21.128533 0 38.161067-7.611733 51.0976-22.528 12.629333-14.916267 20.445867-35.5328 23.159467-62.190933 2.7136-26.658133-0.8704-47.616-10.4448-62.839467-9.864533-15.223467-25.3952-22.528-46.506667-22.528z m131.84-28.245333h33.3824l84.1216 163.4304h1.143467l16.605867-163.4304h33.672533l-23.04 226.577066h-32.529067L797.354667 355.498667h-1.143467l-16.8448 165.649066H745.984l23.04-226.577066z" p-id="14017" fill="#707070"></path></svg>\n    ',r.onclick=function(){var t=e.toJsonString(),i=document.createElement("div");i.classList.add("js-mind-dialog"),i.innerHTML='\n        <div class="mind-dialog-header">\n          <h3>Json Data</h3>\n          <div class="mind-dialog-close">×</div>\n        </div>\n        <div class="mind-dialog-body"><pre>'+t+"</pre></div>\n      ",document.body.appendChild(i);var n=i.querySelector(".mind-dialog-close");n&&(n.onclick=function(){document.body.removeChild(i)})},i.appendChild(r)},t.prototype.createNode=function(t){switch(t){case"rect":return new a.Rect;case"circle":return new a.Circle;case"diamond":return new a.Diamond;default:return new a.Rect}},t.prototype.initNode=function(t){var e=this;this.nodes=[];var i=function(t,n,o){if(!t||t.length<=0)return[];for(var r=[],a=0;a<t.length;a++){var s=t[a],l=e.createNode(s.type);l.stage2d=e.stage2d,l.name=s.title,s.color&&l.initColor(s.color),l.datahandle=s,e.nodes.push(l),n&&l.links.push({orient:o,node:n});var d=void 0,c=void 0,h=void 0,u=void 0;s.children&&(d=i(s.children.top,l,"top"),c=i(s.children.right,l,"right"),h=i(s.children.bottom,l,"bottom"),u=i(s.children.left,l,"left"));var p={node:l,spaceWidth:0,spaceHeight:0};(u||c||d||h)&&Object.defineProperty(p,"children",{enumerable:!0,writable:!0,configurable:!0,value:{top:d,right:c,bottom:h,left:u}}),r.push(p)}return r};this.nodeTree=i(t,null,"")},t.prototype.initPosition=function(t){var e=100,i=100,n=function(t,o){for(var r=0,a=0,s=0;s<t.length;s++){var l=t[s];if(l.spaceWidth=e,l.spaceHeight=i,l.children){var d=n(l.children.top,!0),c=n(l.children.right,!1),h=n(l.children.bottom,!0),u=n(l.children.left,!1);l.spaceWidth+=Math.max(u.width+c.width,d.width-e,h.width-e),l.spaceHeight+=Math.max(d.height+h.height,u.height-i,c.height-i)}o?(r+=l.spaceWidth,a=Math.max(l.spaceHeight,a)):(r=Math.max(l.spaceWidth,r),a+=l.spaceHeight)}return{width:r,height:a}},o=n(this.nodeTree,!0);0===this.stage2d.translateX&&0===this.stage2d.translateY&&this.stage2d.initTranslate(o.width,o.height);var r=function(n,o,a,s){for(var l=o,d=a,c=0,h=0,u=0;u<n.length;u++){var p=n[u];if(s?(c=l+p.spaceWidth/2,h=d):(c=l,h=d+p.spaceHeight/2),p.children){var f=p.children.top.reduce((function(t,e){return t+e.spaceWidth}),0),m=p.children.bottom.reduce((function(t,e){return t+e.spaceWidth}),0),g=p.children.left.reduce((function(t,e){return Math.max(t,e.spaceWidth)}),0),v=p.children.left.reduce((function(t,e){return t+e.spaceHeight}),0),y=p.children.right.reduce((function(t,e){return t+e.spaceHeight}),0);g>0&&s&&(c=l+g+50),r(p.children.top,c-f/2,h-i,!0),r(p.children.right,c+e,h-y/2,!1),r(p.children.bottom,c-m/2,h+i,!0),r(p.children.left,c-e,h-v/2,!1)}t?p.node.animate({x:c,y:h}):(p.node.x=c,p.node.y=h),s?l+=p.spaceWidth:d+=p.spaceHeight}};r(this.nodeTree,0,0,!0)},t.prototype.addNode=function(t,e,i){t.datahandle.children||(t.datahandle.children={}),t.datahandle.children[e]||(t.datahandle.children[e]=[]),t.datahandle.children[e].push(i),this.initNode(this.updateData()),this.initPosition(!1),localStorage.setItem(this.id+"-data",JSON.stringify(this.data))},t.prototype.editNode=function(t,e){t.datahandle.title=e,this.initNode(this.updateData()),this.initPosition(!1),localStorage.setItem(this.id+"-data",JSON.stringify(this.data))},t.prototype.deleteNode=function(t){t.datahandle.deleted=!0,this.initNode(this.updateData()),this.initPosition(!1),localStorage.setItem(this.id+"-data",JSON.stringify(this.data))},t.prototype.render=function(){var t=this,e=this.stage2d.getScene();e.initContext(),e.paint((function(){e.context.beginPath(),e.context.moveTo(0,0),t.nodes.forEach((function(i){i.links.length>0&&i.links.forEach((function(n){t.paintLine(e.context,n.orient,n.node,i)}))})),e.context.moveTo(0,0),e.context.closePath(),e.context.strokeStyle="#999",e.context.lineWidth=1,e.context.stroke(),e.context.lineWidth=1,t.nodes.forEach((function(t){t.paint(e.context)})),e.context.fillStyle="#333",t.nodes.forEach((function(t){t.paintTitle(e.context)}))}))},t.prototype.paintLine=function(t,e,i,n){if("bottom"===e){var o=i.x,r=i.y+i.height/2+2,a=n.x,s=n.y-n.height/2-2;t.moveTo(o,r),t.bezierCurveTo(o,r+(s-r)/2,a,s-(s-r)/2,a,s)}"top"===e&&(o=i.x,r=i.y-i.height/2-2,a=n.x,s=n.y+n.height/2+2,t.moveTo(o,r),t.bezierCurveTo(o,r+(s-r)/2,a,s-(s-r)/2,a,s)),"right"===e&&(o=i.x+i.width/2+2,r=i.y,a=n.x-n.width/2-2,s=n.y,t.moveTo(o,r),t.bezierCurveTo(o+(a-o)/2,r,a-(a-o)/2,s,a,s)),"left"===e&&(o=i.x-i.width/2-2,r=i.y,a=n.x+n.width/2+2,s=n.y,t.moveTo(o,r),t.bezierCurveTo(o+(a-o)/2,r,a-(a-o)/2,s,a,s))},t.prototype.initAdder=function(){var t=this;this.adder=r.default.init(this.stage2d.container),this.adder.onAdd((function(e){t.selected&&t.addNode(t.selected,e,{title:"new node"})})),this.adder.onEdit((function(e){t.selected&&(e.value=t.selected.name,e.onblur=function(){t.selected&&t.editNode(t.selected,e.value)})})),document.addEventListener("keydown",(function(e){46!==e.keyCode&&8!==e.keyCode||t.selected&&(t.deleteNode(t.selected),t.adder.hide())}))},t.prototype.toJsonString=function(){return JSON.stringify(this.data,null,2)},t.prototype.updateData=function(){var t=function(e){return e.filter((function(t){return!t.deleted})).map((function(e){return e.children&&(e.children.top&&(e.children.top=t(e.children.top)),e.children.right&&(e.children.right=t(e.children.right)),e.children.bottom&&(e.children.bottom=t(e.children.bottom)),e.children.left&&(e.children.left=t(e.children.left))),e}))};return this.data=t(this.data),this.data},t.prototype.addEventListener=function(t,e){this.stage2d.addEventListener(t,e)},t}();e.Mind=s},242:function(t,e,i){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.radius=6,e.width=60,e.height=60,e.type="circle",e}return o(e,t),e.prototype.clickAnimate=function(){},e.prototype.paintTitle=function(t){t.fillText(this.name,this.x,this.y)},e.prototype.paint=function(t){this.width<2*this.radius&&(this.radius=this.width/2),this.height<2*this.radius&&(this.radius=this.height/2),this.x,this.width,this.y,this.height,t.beginPath(),t.arc(this.x,this.y,this.width/2,0,2*Math.PI),t.closePath(),t.isPointInPath(this.stage2d.mouseX,this.stage2d.mouseY)?(t.fillStyle=this.mouseOverPattern,this.triggerEvent()):t.fillStyle=this.pattern,t.fillStyle=this.areaPattern,t.strokeStyle=this.pattern,t.fill(),t.stroke()},e}(r(i(91)).default);e.default=a},889:function(t,e,i){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.radius=6,e.type="diamond",e}return o(e,t),e.prototype.clickAnimate=function(){},e.prototype.paintTitle=function(t){t.fillText(this.name,this.x,this.y)},e.prototype.paint=function(t){t.beginPath(),t.moveTo(this.x,this.y-this.height/2),t.lineTo(this.x+this.width/2,this.y),t.lineTo(this.x,this.y+this.height/2),t.lineTo(this.x-this.width/2,this.y),t.closePath(),t.isPointInPath(this.stage2d.mouseX,this.stage2d.mouseY)?(t.fillStyle=this.mouseOverPattern,this.triggerEvent()):t.fillStyle=this.pattern,t.fillStyle=this.areaPattern,t.strokeStyle=this.pattern,t.fill(),t.stroke()},e}(r(i(91)).default);e.default=a},402:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.Diamond=e.Circle=e.Rect=void 0;var o=n(i(567));e.Rect=o.default;var r=n(i(242));e.Circle=r.default;var a=n(i(889));e.Diamond=a.default},91:(t,e,i)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(494),o=i(658),r=n.lighten("#2185d0",100),a=n.lighten("#2185d0",120),s=function(){function t(){this.x=0,this.y=0,this.customPosition=null,this.width=80,this.height=32,this.name="",this.pattern="#2185d0",this.mouseOverPattern=r,this.areaPattern=a,this.actived=!1,this.disabled=!1,this.recoverAnimateIng=!1,this.links=[]}return t.prototype.clickAnimate=function(){},t.prototype.easeOut=function(t,e,i,n){return-i*(t/=n)*(t-2)+e},t.prototype.animate=function(t,e){var i=this;void 0===e&&(e=400);var n={},o={};for(var r in t)"eAngle"===r?(n[r]=100*this[r],o[r]=100*t[r]-n[r]):(n[r]=this[r],o[r]=t[r]-this[r]);var a=0,s=e/1e3,l=function(){for(var t in(a+=i.stage2d.interval)>e&&(a=e),o)i[t]="eAngle"===t?i.easeOut(a/1e3,n[t],o[t],s)/100:i.easeOut(a/1e3,n[t],o[t],s);a<e&&requestAnimationFrame(l)};requestAnimationFrame(l)},t.prototype.triggerEvent=function(){var t=this,e=this.stage2d.events;e.length>0&&e.forEach((function(e,i){switch(e.eventType){case o.CLICK:var n=t.stage2d.clickPointQueue;n.isEmpty()||(n.dequeue(),e.callback(t.getStageEvent()),t.recoverAnimateIng?t.recoverAnimateIng=!1:t.clickAnimate());break;case o.MOUSEMOVE:var r=t.stage2d.mousemovePointQueue;r.isEmpty()||(r.clear(),e.callback(t.getStageEvent()))}}))},t.prototype.initColor=function(t){/^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/.test(t)?(this.pattern=t,this.mouseOverPattern=n.lighten(t),this.areaPattern=n.lighten(t,50)):console.error("Only hex colors are supported")},t.prototype.getStageEvent=function(){return{mouseX:Math.round(this.stage2d.mouseX/this.stage2d.pixelRatio),mouseY:Math.round(this.stage2d.mouseY/this.stage2d.pixelRatio),pageX:this.stage2d.pageX,pageY:this.stage2d.pageY,target:this}},t}();e.default=s},567:function(t,e,i){"use strict";var n,o=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(){var e=t.call(this)||this;return e.radius=6,e.type="rect",e}return o(e,t),e.prototype.clickAnimate=function(){},e.prototype.paintTitle=function(t){t.fillText(this.name,this.x,this.y)},e.prototype.paint=function(t){this.width<2*this.radius&&(this.radius=this.width/2),this.height<2*this.radius&&(this.radius=this.height/2);var e=this.x-this.width/2,i=this.y-this.height/2;t.beginPath(),t.moveTo(e+this.radius,i),t.arcTo(e+this.width,i,e+this.width,i+this.height,this.radius),t.arcTo(e+this.width,i+this.height,e,i+this.height,this.radius),t.arcTo(e,i+this.height,e,i,this.radius),t.arcTo(e,i,e+this.width,i,this.radius),t.closePath(),t.isPointInPath(this.stage2d.mouseX,this.stage2d.mouseY)?(t.fillStyle=this.mouseOverPattern,this.triggerEvent()):t.fillStyle=this.pattern,t.fillStyle=this.areaPattern,t.strokeStyle=this.pattern,t.fill(),t.stroke()},e}(r(i(91)).default);e.default=a},655:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){this.x=t,this.y=e}},137:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this.items=[]}return t.prototype.enqueue=function(t){this.items.push(t)},t.prototype.dequeue=function(){return this.items.shift()},t.prototype.front=function(){return this.items[0]},t.prototype.isEmpty=function(){return 0==this.items.length},t.prototype.size=function(){return this.items.length},t.prototype.clear=function(){this.items=[]},t}();e.default=i},475:(t,e)=>{"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t){this.stage2d=t;var e=document.createElement("canvas");e.width=t.width,e.height=t.height,e.style.position="absolute",this.stage2d.container.appendChild(e);var i=e.getContext("2d");i&&(this.context=i)}return t.prototype.initContext=function(){this.context.strokeStyle="#ffffff",this.context.lineJoin="bevel",this.context.lineCap="round",this.context.miterLimit=1,this.context.textAlign="center",this.context.textBaseline="middle",this.context.fillStyle="#ffffff"},t.prototype.paint=function(t){var e=this,i=function(){if(e.stage2d.isVisibility){var n=e.stage2d,o=n.width,r=n.height,a=n.translateX,s=n.translateY,l=n.scale;e.context.clearRect(0,0,o,r),e.context.globalAlpha=1,e.context.save(),e.context.translate(a,s),e.context.scale(l,l),t(e.context),e.context.restore(),e.stage2d.clearEventPoint()}requestAnimationFrame(i)};requestAnimationFrame(i)},t.prototype.paintGrid=function(){this.context.fillStyle="rgba(0, 0, 0, 0.05)";for(var t=-10;t<10;t++)for(var e=-10;e<10;e++)this.context.fillRect(200*e,200*t,100,100);for(t=-10;t<10;t++)for(e=-10;e<10;e++)this.context.fillRect(200*e+100,200*t+100,100,100);this.context.fillStyle="red",this.context.fillRect(-1,-1,2,2)},t.prototype.paintOnce=function(t){var e=this;requestAnimationFrame((function(){if(e.stage2d.isVisibility){var i=e.stage2d,n=i.width,o=i.height,r=i.translateX,a=i.translateY,s=i.scale;e.context.clearRect(0,0,n,o),e.context.globalAlpha=1,e.context.save(),e.context.translate(r,a),e.context.scale(s,s),t(e.context),e.context.restore()}}))},t}();e.default=i},471:function(t,e,i){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(i(137)),r=n(i(475)),a=n(i(655)),s=n(i(123)),l=i(658),d=i(494),c=0,h=function(){function t(t){var e=this;this.id="mind",this.scenes=[],this.scale=1,this.translateX=0,this.translateY=0,this.drawing=!1,this.pixelRatio=1,this.mouseX=0,this.mouseY=0,this.pageX=0,this.pageY=0,this.interval=0,this.isVisibility=!0,this.clickPointQueue=new o.default,this.mouseupPointQueue=new o.default,this.mousedownPointQueue=new o.default,this.mousemovePointQueue=new o.default,this.container=t,this.width=t.clientWidth,this.height=t.clientHeight,this.container.style.position="relative",this.id=t.id||"mind";var i=t.getBoundingClientRect();this.offsetX=i.x,this.offsetY=i.y,console.log("localStorage.getItem(`${this.id}-translateX`)",localStorage.getItem(this.id+"-translateX"),this.id+"translateX"),console.log("localStorage.getItem(`${this.id}-translateY`)",localStorage.getItem(this.id+"-translateY"),this.id+"translateY"),this.translateX=parseInt(localStorage.getItem(this.id+"-translateX")||"0",10),this.translateY=parseInt(localStorage.getItem(this.id+"-translateY")||"0",10);var n=document.createElement("canvas").getContext("2d");n&&this.setPixelRatio(n),this.events=[],this.initEventListener(),document.addEventListener("visibilitychange",(function(){e.isVisibility="visible"===document.visibilityState})),this.requestAnimationFrame();var r=0,a=0;this.addEventListener("mousedown",(function(t){console.log("e, this.drawing",t,e.drawing,t.target),t.target||(e.drawing=!0,e.container.style.cursor="grab",r=t.mouseX,a=t.mouseY)})),this.addEventListener("mouseup",(function(t){t.target||(e.drawing=!1,e.container.style.cursor="auto",localStorage.setItem(e.id+"-translateX",e.translateX.toString()),localStorage.setItem(e.id+"-translateY",e.translateY.toString()))})),this.addEventListener("mousemove",(function(t){e.drawing&&(e.translateX=e.translateX+(t.mouseX-r),e.translateY=e.translateY+(t.mouseY-a)),r=t.mouseX,a=t.mouseY}))}return t.prototype.initTranslate=function(t,e){this.translateX=this.width/2-t/2,this.translateY=this.height/2-e/2},t.prototype.initEventListener=function(){var t=this;document.addEventListener("mouseup",(function(e){t.mouseupPointQueue.enqueue(new a.default(t.mouseX,t.mouseY))}),!1),this.container.addEventListener("mousedown",(function(e){t.mousedownPointQueue.enqueue(new a.default(t.mouseX,t.mouseY))}),!1),this.container.addEventListener("click",(function(e){t.clickPointQueue.enqueue(new a.default(t.mouseX,t.mouseY))}),!1),this.container.addEventListener("mousemove",(function(e){t.pageX=e.pageX,t.pageY=e.pageY,t.mouseX=(e.pageX-t.offsetX)*t.pixelRatio,t.mouseY=(e.pageY-t.offsetY)*t.pixelRatio,t.mousemovePointQueue.enqueue(new a.default(t.mouseX,t.mouseY))}),!1),this.container.addEventListener("DOMMouseScroll",(function(t){}),!1)},t.prototype.getScene=function(){var t=new r.default(this);return this.scenes.push(t),t},t.prototype.setPixelRatio=function(t){this.pixelRatio=d.getPixelRatio(t)},t.prototype.addEventListener=function(t,e){var i;switch(t){case"click":i=l.CLICK;break;case"mouseup":i=l.MOUSEUP;break;case"mousedown":i=l.MOUSEDOWN;break;case"mousemove":i=l.MOUSEMOVE;break;case"mouseout":i=l.MOUSEOUT;break;case"DOMMouseScroll":i=l.MOUSESCROLL;break;default:i=l.CLICK}this.events.push(new s.default(i,e))},t.prototype.clearEventPoint=function(){var t=this;this.mouseupPointQueue.isEmpty()||(this.events.forEach((function(e){e.eventType===l.MOUSEUP&&e.callback({mouseX:Math.round(t.mouseX/t.pixelRatio),mouseY:Math.round(t.mouseY/t.pixelRatio),pageX:t.pageX,pageY:t.pageY,target:null})})),this.mouseupPointQueue.clear()),this.mousedownPointQueue.isEmpty()||(this.events.forEach((function(e){e.eventType===l.MOUSEDOWN&&e.callback({mouseX:Math.round(t.mouseX/t.pixelRatio),mouseY:Math.round(t.mouseY/t.pixelRatio),pageX:t.pageX,pageY:t.pageY,target:null})})),this.mousedownPointQueue.clear()),this.mousemovePointQueue.isEmpty()||(console.log("1",1),this.events.forEach((function(e){e.eventType===l.MOUSEMOVE&&e.callback({mouseX:Math.round(t.mouseX/t.pixelRatio),mouseY:Math.round(t.mouseY/t.pixelRatio),pageX:t.pageX,pageY:t.pageY,target:null})})),this.mousemovePointQueue.clear()),this.clickPointQueue.isEmpty()||(this.events.forEach((function(e){e.eventType===l.CLICK&&e.callback({mouseX:Math.round(t.mouseX/t.pixelRatio),mouseY:Math.round(t.mouseY/t.pixelRatio),pageX:t.pageX,pageY:t.pageY,target:null})})),this.clickPointQueue.clear())},t.prototype.requestAnimationFrame=function(){var t=this,e=function(i){t.interval=i-c,c=i,requestAnimationFrame(e)};requestAnimationFrame(e)},t}();e.default=h},494:(t,e)=>{"use strict";function i(t,e,i){var n=(t<<16|e<<8|i).toString(16);return"#"+new Array(Math.abs(n.length-7)).join("0")+n}function n(t){for(var e=[],i=1;i<7;i+=2)e.push(parseInt("0x"+t.slice(i,i+2),16));return e}Object.defineProperty(e,"__esModule",{value:!0}),e.getPixelRatio=e.alpha=e.darken=e.lighten=void 0,e.lighten=function(t,e){void 0===e&&(e=10);var o=n(t).map((function(t){return Math.min(t+e,255)}));return i(o[0],o[1],o[2])},e.darken=function(t,e){void 0===e&&(e=10);var o=n(t).map((function(t){return Math.max(t-e,0)}));return i(o[0],o[1],o[2])},e.alpha=function(t,e){var i=n(t);return"rgba("+i[0]+", "+i[1]+", "+i[2]+", "+e+")"},e.getPixelRatio=function(t){return(window.devicePixelRatio||1)/1}}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={id:n,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n,o,r={};return n=CanvasRenderingContext2D.prototype,1!==(o=function(){var t=document.createElement("canvas").getContext("2d"),e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/e}())&&(function(t,e){for(var i in t)t.hasOwnProperty(i)&&e(t[i],i)}({fillRect:"all",clearRect:"all",strokeRect:"all",moveTo:"all",lineTo:"all",arc:[0,1,2],arcTo:"all",bezierCurveTo:"all",isPointinPath:"all",isPointinStroke:"all",quadraticCurveTo:"all",rect:"all",translate:"all",createRadialGradient:"all",createLinearGradient:"all"},(function(t,e){n[e]=function(e){return function(){var i,n,r=Array.prototype.slice.call(arguments);if("all"===t)r=r.map((function(t){return t*o}));else if(Array.isArray(t))for(i=0,n=t.length;n>i;i++)r[t[i]]*=o;return e.apply(this,r)}}(n[e])})),n.stroke=function(t){return function(){this.lineWidth*=o,t.apply(this,arguments),this.lineWidth/=o}}(n.stroke),n.fillText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=o,e[2]*=o,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,i){return e*o+i})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,i){return e/o+i}))}}(n.fillText),n.strokeText=function(t){return function(){var e=Array.prototype.slice.call(arguments);e[1]*=o,e[2]*=o,this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,i){return e*o+i})),t.apply(this,e),this.font=this.font.replace(/(\d+)(px|em|rem|pt)/g,(function(t,e,i){return e/o+i}))}}(n.strokeText)),function(t){t.getContext=function(t){return function(e){var i,n,o=t.call(this,e);return"2d"===e&&(i=o.backingStorePixelRatio||o.webkitBackingStorePixelRatio||o.mozBackingStorePixelRatio||o.msBackingStorePixelRatio||o.oBackingStorePixelRatio||o.backingStorePixelRatio||1,(n=(window.devicePixelRatio||1)/i)>1&&(this.style.height=this.height+"px",this.style.width=this.width+"px",this.width*=n,this.height*=n)),o}}(t.getContext)}(HTMLCanvasElement.prototype),(()=>{"use strict";var t=r;Object.defineProperty(t,"__esModule",{value:!0});var e=i(72);i(283),t.default=e.Mind})(),r})()}));