(this["webpackJsonpjulia-frontend"]=this["webpackJsonpjulia-frontend"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),l=(n(9),n(10),r.a.createContext()),i=l.Provider,u=(l.Consumer,function(e){return Array.isArray(e)&&2===e.length&&function(e){return"function"===typeof e[1]&&e[1].name.startsWith("bound ")}(e)});function s(e){var t={};for(var n in e)u(e[n])?t[n]=e[n][0]:t[n]=s(e[n]);return t}function f(e,t){for(var n in e){if(u(t[n]))(0,t[n][1])(e[n]);else f(e[n],t[n])}}var m=function(e){var t=e.children,n={canvasRef:Object(a.useState)(null),gl:Object(a.useState)(null),julia:{c:{x:Object(a.useState)("0.2"),y:Object(a.useState)("sin(u_time)")},coefficients:Object(a.useState)("1, 0, 1"),escapeRadius:Object(a.useState)("100"),maxIterations:Object(a.useState)("100"),useSmoothing:Object(a.useState)(!0)},viewport:{width:Object(a.useState)("5"),height:Object(a.useState)("5"),translate:{x:Object(a.useState)("0"),y:Object(a.useState)("0")},lockAspectRatio:Object(a.useState)(!0)},time:{startedAt:Object(a.useState)(Date.now()),paused:Object(a.useState)(!1),lastPausedAt:Object(a.useState)(0),pauseDuration:Object(a.useState)(0),timeScale:Object(a.useState)("0.5")}};return r.a.createElement(i,{value:n},t)},p=n(1),v="\n".concat("\n#define PI 3.14159265359\n#define TAU 6.28318530718\n","\n").concat("\nvec2 complexConjug(in vec2 c) { \n  return vec2(c.x, -c.y); \n}\n","\n").concat("\nvec2 complexMult(in vec2 a, in vec2 b) {\n  return vec2(a.x * b.x - a.y * b.y, a.y * b.x + a.x * b.y);\n}\n","\n").concat("\nvec2 complexDiv(in vec2 a, in vec2 b) {\n  return complexMult(a, complexConjug(b));\n}\n","\n").concat("\nfloat complexMag(in vec2 c) { \n  return sqrt(c.x * c.x + c.y * c.y); \n}\n","\n").concat("\nvec2 complexPower(vec2 z1, vec2 z2) {\n  float a2b2 = z1.x * z1.x + z1.y * z1.y;\n  float t1 = pow(a2b2, z2.x / 2.) * exp(-z2.y * atan(z1.y, z1.x));\n  float t2 = z2.x * atan(z1.y, z1.x) + .5 * z2.y * log(a2b2);\n  return vec2(t1 * cos(t2), t1 * sin(t2));\n}\n","\n").concat("\nvec2 complexAdd(vec2 z1, vec2 z2) { \n  return vec2(z1.x + z2.x, z1.y + z2.y); \n}\n","\n");var h="\n".concat("\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1., 2. / 3., 1. / 3., 3.);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6. - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0., 1.), c.y);\n}\n","\n").concat("\nfloat huefn(float iterations) {\n  float max_iter = float(maxIterations);\n  return .1 + .3*(iterations / max_iter);\n}\n","\n").concat("\nfloat satfn(float iterations) {\n  float max_iter = float(maxIterations);\n  return .5 + .5*(iterations / max_iter);\n}\n","\n").concat("\nfloat valfn(float iterations) {\n  float max_iter = float(maxIterations);\n  return .5 + 2.*(iterations / max_iter);\n}\n","\n");function g(e){for(var t,n=e,a=new RegExp(/\d+[.]\d+|(\d+[.])+|(\d+)/g),r=[];null!==(t=a.exec(e));)r.push(t);r=r.filter((function(e){return!e[0].includes(".")}));var c=0;for(var o in r){var l=r[o],i=l.index+l[0].length+c;n=n.slice(0,i)+"."+n.slice(i,n.length),c+=1}return n}var b=function(e){return"\nvec3 julia(vec2 z, vec2 c) {\n  float result;\n  int iters = 0;\n  vec2 zPrev = z;\n  z = vec2(0.);\n\n  for (int i = 0; i <= maxIterations; i++) {\n    ".concat(function(e){for(var t=function(e,t){return 0!==parseFloat(t)?0===e?"z = complexAdd(z, ".concat(t,"*c);"):1===e?"z = complexAdd(z, ".concat(t,"*zPrev);"):"z = complexAdd(z, complexPower(".concat(t,"*zPrev, vec2(").concat(e,", 0.)));"):""},n=e.replace(/\s/g,"").split(","),a="",r=0;r<n.length;r++){var c=t(n.length-(r+1),n[r]);""!==c&&(a=a.concat(c,"\n"))}return console.log(a),a}(g(e.julia.coefficients)),"\n    iters = i;\n    zPrev = z;\n    if (complexMag(z) > u_escapeRadius) break;\n  }\n\n  if (iters == maxIterations) {\n    return vec3(0, 0, 0);\n  } else {\n    ").concat(e.julia.useSmoothing?"result = smoothIterations(z, iters);":"result = float(iters);","\n  }\n\n  float percent = result/float(maxIterations);\n\n  float hue = huefn(result);\n  float sat = satfn(result);\n  float val = valfn(result);\n\n  return hsv2rgb(vec3(hue, sat, val));\n}\n")},d=function(e){return"\nvoid main(void) {\n  ".concat(function(e){var t=e.width,n=e.height,a=e.translate;return"\n  float XSIZE = ".concat(g(t),";\n  float YSIZE = ").concat(g(n),";\n  float XT = ").concat(g(a.x),";\n  float YT = ").concat(g(a.y),";\n  ")}(e.viewport),"\n\n  ").concat(function(e){var t=e.x,n=e.y;return"vec2 c = vec2(".concat(g(t),", ").concat(g(n),");")}(e.julia.c),"\n\n  // Normalized pixel coordinates (from 0 to 1)\n  vec2 uv = gl_FragCoord.xy / u_resolution.xy;\n\n  vec2 z;\n  z.x = (XSIZE * (uv.x - .5)) + XT;\n  z.y = (YSIZE * (uv.y - .5)) + YT;\n\n  vec3 col = julia(z, c);\n  gl_FragColor = vec4(col, 1.);\n}\n")},x=function(e){return"\n".concat("\nprecision highp float;\n","\n").concat((t=e.julia.maxIterations,"#define maxIterations ".concat(t)),"\n").concat("\nuniform float u_escapeRadius;\n\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_width;\nuniform float u_height;\nuniform float u_translatex;\nuniform float u_translatey;\n","\n").concat(v,"\n").concat(h,"\n").concat("\nfloat smoothIterations(vec2 z, int iterations) {\n  // sqrt of inner term removed using log simplification rules.\n  // sqrt is equivilent to raising to power 0.5 therefore dividing\n  // by 2 or multiplying by 0.5 avoids an inefficient sqrt calculation\n  float log_zn = log(z.x * z.x + z.y * z.y) / 2.;\n  float nu = log(log_zn / log(2.)) / log(2.);\n  // Rearranging the potential function.\n  // Dividing log_zn by log(2) instead of log(N = 1<<8)\n  // because we want the entire palette to range from the\n  // center to radius 2, NOT our bailout radius.\n  return float(iterations) + 1. - nu;\n}\n","\n").concat(b(e),"\n").concat(d(e),"\n");var t},E="\nattribute vec3 coordinates;\n\nvoid main(void) {\n  gl_Position = vec4(coordinates, 1.0);\n}\n",j=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],w=[3,2,1,3,1,0];function O(e,t){var n=t.canvasRef,a=t.gl,r=t.julia,c=t.time,o=t.viewport,l=r.escapeRadius,i=r.maxIterations,u=a.getUniformLocation(e,"u_escapeRadius");a.uniform1f(u,l);var s=a.getUniformLocation(e,"u_maxIterations");a.uniform1i(s,i);var f=a.getUniformLocation(e,"u_resolution");a.uniform2fv(f,[n.width,n.height]);var m,p,v=a.getUniformLocation(e,"u_time"),h=(m=c.startedAt,p=c.pauseDuration,(Date.now()-m-p)/1e3*c.timeScale);a.uniform1f(v,h);var g=a.getUniformLocation(e,"u_width");a.uniform1f(g,o.width);var b=a.getUniformLocation(e,"u_height");a.uniform1f(b,o.height);var d=a.getUniformLocation(e,"u_translatex");a.uniform1f(d,o.translate.x);var x=a.getUniformLocation(e,"u_translatey");a.uniform1f(x,o.translate.y)}function y(e){var t=e.canvasRef,n=e.gl;if(null!==n){var a=x(e),r=function(e){var t=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array(j),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),t}(n),c=function(e){var t=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(w),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),t}(n),o=function(e,t){var n=e.createShader(e.VERTEX_SHADER);e.shaderSource(n,E),e.compileShader(n);var a=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(a,t),e.compileShader(a);var r=e.createProgram();if(e.attachShader(r,n),e.attachShader(r,a),e.linkProgram(r),e.useProgram(r),!e.getShaderParameter(a,e.COMPILE_STATUS)){for(var c=e.getShaderInfoLog(a),o=[],l=0;l<c.length;l++)":"===c[l]&&o.push(l);var i=c.substring(o[1]+1,o[2]);console.log(t.split("\n")[i-1])}return e.getShaderParameter(n,e.COMPILE_STATUS)||console.log(e.getShaderInfoLog(n)),r}(n,a);O(o,e),n.bindBuffer(n.ARRAY_BUFFER,r),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,c);var l=n.getAttribLocation(o,"coordinates");n.vertexAttribPointer(l,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(l),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.COLOR_BUFFER_BIT),n.viewport(0,0,t.width,t.height),n.drawElements(n.TRIANGLES,w.length,n.UNSIGNED_SHORT,0)}else alert("Unable to initialize WebGL. Your browser or machine may not support it.")}function S(e){var t=e.frameCount,n=e.frameTime;return r.a.createElement("div",{className:"frametime"},r.a.createElement("p",null,"Frames: ",t),r.a.createElement("p",null,"Frametime: ",n,"ms"))}function z(e){var t=e.hoverText;return r.a.createElement("div",{className:"tooltip"},r.a.createElement("span",{className:"tooltip-text"},t))}function C(e){var t=e.label,n=e.helpText,a=e.inputValue,c=e.setInputValue;return r.a.createElement("div",{className:"field-container"},r.a.createElement("span",{className:"panel-label"},t),n?r.a.createElement(z,{hoverText:n}):null,r.a.createElement("input",{className:"panel-input",type:"checkbox",name:t,checked:a,onChange:function(){c(!1===a)}}))}function T(e){var t=e.label,n=e.helpText,a=e.inputValue,c=e.setInputValue;return r.a.createElement("div",{className:"field-container"},r.a.createElement("span",{className:"panel-label"},t),n?r.a.createElement(z,{hoverText:n}):null,r.a.createElement("input",{className:"panel-input",name:t,value:a,onChange:function(e){c(e.target.value),a=e.target.value}}))}function R(e){var t=e.onClick,n=e.className;return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24",onClick:t,className:n},r.a.createElement("g",null,r.a.createElement("rect",{fill:"none",height:"24",width:"24"})),r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("polygon",{points:"15.5,5 11,5 16,12 11,19 15.5,19 20.5,12"}),r.a.createElement("polygon",{points:"8.5,5 4,5 9,12 4,19 8.5,19 13.5,12"}))))}function _(e){var t=e.open,n=e.setOpen;return r.a.createElement(R,{onClick:function(){!0===t?n(!1):!1===t&&n(!0)},facing:t?"up":"down",className:"group-button"})}function A(e){var t=e.title,n=e.children,c=Object(a.useState)(!0),o=Object(p.a)(c,2),l=o[0],i=o[1],u="group-content ".concat(l?"open":""),s="group-container ".concat(l?"open":"");return r.a.createElement("div",{className:s},r.a.createElement("div",{className:"group-heading"},r.a.createElement("span",{className:"group-title"},t),r.a.createElement(_,{open:l,setOpen:i})),r.a.createElement("div",{className:u}," ",n))}function N(){var e=Object(a.useContext)(l),t=Object(p.a)(e.viewport.width,2),n=t[0],c=t[1];return r.a.createElement(T,{label:"Viewport Width",helpText:"Viewport width",inputValue:n,setInputValue:c})}function I(){var e=Object(a.useContext)(l),t=Object(p.a)(e.viewport.height,2),n=t[0],c=t[1];return r.a.createElement(T,{label:"Viewport Height",helpText:"Viewport height",inputValue:n,setInputValue:c})}function F(){var e=Object(a.useContext)(l),t=Object(p.a)(e.viewport.translate.x,2),n=t[0],c=t[1];return r.a.createElement(T,{label:"Translate X",helpText:"Translate x",inputValue:n,setInputValue:c})}function V(){var e=Object(a.useContext)(l),t=Object(p.a)(e.viewport.translate.y,2),n=t[0],c=t[1];return r.a.createElement(T,{label:"Translate Y",helpText:"Translate y",inputValue:n,setInputValue:c})}function B(){var e=Object(a.useContext)(l),t=Object(p.a)(e.viewport.lockAspectRatio,2),n=t[0],c=t[1];return r.a.createElement(C,{label:"Lock aspect ratio",helpText:"Toggle viewport aspect ratio locking",inputValue:n,setInputValue:c})}function k(){return r.a.createElement(A,{title:"Viewport"},r.a.createElement(N,null),r.a.createElement(I,null),r.a.createElement(F,null),r.a.createElement(V,null),r.a.createElement(B,null))}function U(e){var t=e.open,n=e.setOpen;return r.a.createElement("button",{onClick:function(e){!0===t?n(!1):!1===t&&n(!0)},className:"panel-toggle"},t?"<<<":">>>")}function L(e){var t=e.children,n=e.styleClass,c=Object(a.useState)(!0),o=Object(p.a)(c,2),l=o[0],i=o[1];return r.a.createElement("div",{className:"".concat(n," panel ").concat(l?"panel-open":"panel-closed")},r.a.createElement(U,{open:l,setOpen:i}),t)}function P(){var e=Object(a.useContext)(l),t=Object(p.a)(e.time.paused,2),n=t[0],c=t[1],o=Object(p.a)(e.time.lastPausedAt,2),i=o[0],u=o[1],s=Object(p.a)(e.time.pauseDuration,2)[1];return r.a.createElement("button",{onClick:function(){!0===n?(c(!1),s((function(e){return e+(Date.now()-i)}))):!1===n&&(c(!0),u(Date.now()))},className:"pause-button"},n?"Resume":"Pause")}function D(){var e=localStorage.getItem("presets");return e?JSON.parse(e):[]}function M(){var e=Object(a.useContext)(l),t=Object(a.useState)(""),n=Object(p.a)(t,2),c=n[0],o=n[1],i=Object(a.useState)(""),u=Object(p.a)(i,2),m=u[0],v=u[1],h=Object(a.useState)([]),g=Object(p.a)(h,2),b=g[0],d=g[1],x=function(){var e=D();d(e)};return Object(a.useEffect)((function(){x()}),[]),r.a.createElement(A,{title:"Presets"},r.a.createElement(T,{label:"Preset name",inputValue:m,setInputValue:v}),r.a.createElement("select",{value:c,onChange:function(e){o(e.target.value)},className:"panel-input preset-selector"},0===b.length?r.a.createElement("option",null,"No presets saved"):null,b.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)}))),r.a.createElement("button",{className:"panel-input",onClick:function(){var t=function(e,t){return{name:e,julia:s(t.julia),viewport:s(t.viewport)}}(m,e);!function(e){var t=D();for(var n in t)if(n.name===e)return!0}(t),function(e){var t=D();t.push(e),localStorage.setItem("presets",JSON.stringify(t))}(t),x()}},"Save"),r.a.createElement("button",{className:"panel-input",onClick:function(){var t=D();for(var n in t){var a=t[n];a.name===c&&(f(a.julia,e.julia),f(a.viewport,e.viewport))}}},"Load"))}function Y(){var e=Object(a.useContext)(l),t=Object(p.a)(e.julia.c.x,2),n=t[0],c=t[1];return r.a.createElement(T,{label:"C Y",helpText:"C value x",inputValue:n,setInputValue:c})}function H(){var e=Object(a.useContext)(l),t=Object(p.a)(e.julia.c.y,2),n=t[0],c=t[1];return r.a.createElement(T,{label:"C X",helpText:"C value y",inputValue:n,setInputValue:c})}function W(){var e=Object(a.useContext)(l),t=Object(p.a)(e.julia.coefficients,2),n=t[0],c=t[1];return r.a.createElement(T,{label:"Coefficients",helpText:"Comma-seperated values for the coefficients of each polynomial term. N values applied in the order Z^^n-1 ... Z^^1, C",inputValue:n,setInputValue:c})}function X(){var e=Object(a.useContext)(l),t=function(e){for(var t=e.replace(/\s/g,"").split(","),n=[],a=0;a<t.length;a++){var r=t.length-(a+1),c=parseFloat(t[a]);n.push({exp:r,coeff:c})}return n}(Object(p.a)(e.julia.coefficients,1)[0]);function n(e){var t=e.term,n=e.isFirst,a=t.exp,c=t.coeff;if(0===c)return null;var o=function(e,t){return e<0?"\u2212":t?null:"+"},l=function(e){var t=Math.abs(e);return 1!==t?"".concat(e<0?t:e,"\xb7"):null};switch(a){case 0:return r.a.createElement("span",{className:"poly-term"},o(c,n),l(c),"C");case 1:return r.a.createElement("span",{className:"poly-term"},o(c,n),l(c),"Z");default:return r.a.createElement("span",{className:"poly-term"},o(c,n),l(c),"Z",r.a.createElement("sup",null,a))}}return r.a.createElement("span",{className:"poly-container"},t.map((function(e,t){return r.a.createElement(n,{term:e,isFirst:0===t})})))}function Z(){var e=Object(a.useContext)(l),t=Object(p.a)(e.julia.maxIterations,2),n=t[0],c=t[1];return r.a.createElement(T,{label:"Max Iterations",helpText:"Max iterations",inputValue:n,setInputValue:c})}function q(){var e=Object(a.useContext)(l),t=Object(p.a)(e.julia.escapeRadius,2),n=t[0],c=t[1];return r.a.createElement(T,{label:"Escape radius",helpText:"Escape radius",inputValue:n,setInputValue:c})}function J(){var e=Object(a.useContext)(l),t=Object(p.a)(e.julia.useSmoothing,2),n=t[0],c=t[1];return r.a.createElement(C,{label:"Julia smoothing",helpText:"Toggle Julia iteration smoothing",inputValue:n,setInputValue:c})}function K(){var e=Object(a.useContext)(l),t=Object(p.a)(e.time.timeScale,2),n=t[0],c=t[1];return r.a.createElement(T,{label:"Time scale",helpText:"Time scale",inputValue:n,setInputValue:c})}function G(){return r.a.createElement(A,{title:"Julia Variables"},r.a.createElement(Y,null),r.a.createElement(H,null),r.a.createElement(W,null),r.a.createElement(X,null),r.a.createElement(Z,null),r.a.createElement(q,null),r.a.createElement(J,null),r.a.createElement(K,null))}var $=function(e){var t=e.children;function n(e){var t=e.size;return r.a.createElement("div",{style:{marginBottom:t}})}return r.a.createElement(L,{styleClass:"control-panel"},r.a.createElement(P,null),r.a.createElement(n,{size:"3em"}),r.a.createElement("p",{className:"field-container"},"Drag a box on the canvas to zoom to that area"),r.a.createElement(n,{size:"3em"}),r.a.createElement(G,null),r.a.createElement(n,{size:"3em"}),r.a.createElement(k,null),r.a.createElement(n,{size:"3em"}),r.a.createElement(M,null),r.a.createElement(n,{size:"3em"}),t)};function Q(e){var t=e.width,n=e.height;var a=function(){var e=document.getElementsByClassName("glcanvas")[0],t=[e.offsetWidth,e.offsetHeight];return t[0]>t[1]?"landscape":"portrait"}(),r=function(e){var t=document.getElementsByClassName("glcanvas")[0],n=[t.offsetWidth,t.offsetHeight],a=n[0],r=n[1];return 0===r||0===a?1:"landscape"===e?a/r:"portrait"===e?r/a:1}(a);return"landscape"===a?n*=1/r:"portrait"===a&&(t*=1/r),{width:t,height:n}}function ee(){var e=Object(a.useContext)(l),t=Object(p.a)(e.viewport.lockAspectRatio,1)[0],n=Object(a.useState)(),c=Object(p.a)(n,2),o=c[0],i=c[1],u=function(){var e=Object(a.useContext)(l),t=Object(a.useRef)(),n=e.canvasRef[1],r=e.gl[1];return Object(a.useEffect)((function(){n(t.current),r(t.current.getContext("webgl"))}),[n,r,t]),t}(),f=function(){var e=Object(a.useContext)(l),t=Object(a.useRef)(),n=Object(a.useState)(0),r=Object(p.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)(0),u=Object(p.a)(i,2),f=u[0],m=u[1],v=e.time.paused[0],h=e.gl[0];return Object(a.useEffect)((function(){return t.current=requestAnimationFrame((function n(){!1===v&&null!==h&&(m(Date.now()),y(s(e)),o((function(e){return e+1})));t.current=requestAnimationFrame(n)})),function(){return cancelAnimationFrame(t.current)}}),[e,v,h]),[c,f]}(),m=Object(p.a)(f,2),v=m[0],h=m[1];return function(){var e=Object(a.useContext)(l),t=Object(p.a)(e.viewport.width,2),n=t[0],r=t[1],c=Object(p.a)(e.viewport.height,2),o=c[0],i=c[1];Object(a.useEffect)((function(){var e=Q({width:n,height:o});r(e.width),i(e.height)}),[])}(),r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{className:"glcanvas",width:"1000",height:"1000",onMouseDown:function(e){var t=[e.clientX,e.clientY];console.log("drag start: "+t),i(t)},onMouseUp:function(n){var a=e.viewport.translate.x[1],r=e.viewport.translate.y[1],c=e.viewport.width[1],l=e.viewport.height[1],i=[n.clientX,n.clientY],u=document.getElementsByClassName("glcanvas")[0],s=[u.offsetWidth,u.offsetHeight],f=s[0],m=s[1],p={x1:o[0],x2:i[0],y1:u.offsetHeight-o[1],y2:u.offsetHeight-i[1]};if(!function(e){var t=e.x1,n=e.x2,a=e.y1,r=e.y2,c=Math.abs(t-n),o=Math.abs(a-r);return c<1||o<1}(p)){var v=function(t){var n=t.x,a=t.y,r=document.getElementsByClassName("glcanvas")[0],c=[r.offsetWidth,r.offsetHeight],o=c[0],l=c[1],i=parseFloat(e.viewport.width[0]),u=parseFloat(e.viewport.height[0]),s=u/l;return{x:-i/2+n*(i/o)+parseFloat(e.viewport.translate.x[0]),y:-u/2+a*s+parseFloat(e.viewport.translate.y[0])}}({x:(p.x1+p.x2)/2,y:(p.y1+p.y2)/2});a(v.x),r(v.y);var h=parseFloat(e.viewport.width),g=parseFloat(e.viewport.height),b={width:h*(Math.abs(p.x1-p.x2)/f),height:g*(Math.abs(p.y1-p.y2)/m)};if(!0===t){console.log("scaling with lock");var d=Q(b);c(d.width),l(d.height)}else console.log("scaling without lock"),c(b.width),l(b.height)}},ref:u}),r.a.createElement($,null,r.a.createElement(S,{frameCount:v,frameTime:Date.now()-h})))}var te=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null,r.a.createElement(ee,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.542a7d25.chunk.js.map