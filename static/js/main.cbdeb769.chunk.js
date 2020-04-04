(this["webpackJsonpjulia-frontend"]=this["webpackJsonpjulia-frontend"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(5),c=n.n(o),i=(n(11),n(12),r.a.createContext()),l=i.Provider,u=(i.Consumer,function(e){return Array.isArray(e)&&2===e.length&&function(e){return"function"===typeof e[1]&&e[1].name.startsWith("bound ")}(e)});var s=function(e){var t=e.children,n={canvasRef:Object(a.useState)(null),gl:Object(a.useState)(null),julia:{c:{x:Object(a.useState)("-0.2"),y:Object(a.useState)("0.4*cos(u_time) + sin(u_time)")},coefficients:Object(a.useState)("1/2, 2/3, 0 , 0, 1"),escapeRadius:Object(a.useState)("20"),maxIterations:Object(a.useState)("50"),useSmoothing:Object(a.useState)(!0)},viewport:{width:Object(a.useState)("7"),height:Object(a.useState)("7"),translate:{x:Object(a.useState)("0"),y:Object(a.useState)("0")},lockAspectRatio:Object(a.useState)(!0)},color:{colorPoints:Object(a.useState)([{hex:"#000000",position:"0"},{hex:"#FF0000",position:"1.0"}]),curve:Object(a.useState)("linear"),colorModel:Object(a.useState)("RGB"),textureData:Object(a.useState)([255,255,255])},time:{startedAt:Object(a.useState)(Date.now()),paused:Object(a.useState)(!1),lastPausedAt:Object(a.useState)(0),pauseDuration:Object(a.useState)(0),timeScale:Object(a.useState)("0.5")}};return r.a.createElement(l,{value:n},t)},f=n(1),m="\n".concat("\n#define PI 3.14159265359\n#define TAU 6.28318530718\n","\n").concat("\nvec2 complexConjug(in vec2 c) { \n  return vec2(c.x, -c.y); \n}\n","\n").concat("\nvec2 complexMult(in vec2 a, in vec2 b) {\n  return vec2(a.x * b.x - a.y * b.y, a.y * b.x + a.x * b.y);\n}\n","\n").concat("\nvec2 complexDiv(in vec2 a, in vec2 b) {\n  return complexMult(a, complexConjug(b));\n}\n","\n").concat("\nfloat complexMag(in vec2 c) { \n  return sqrt(c.x * c.x + c.y * c.y); \n}\n","\n").concat("\nvec2 complexPower(vec2 z1, vec2 z2) {\n  float a2b2 = z1.x * z1.x + z1.y * z1.y;\n  float t1 = pow(a2b2, z2.x / 2.) * exp(-z2.y * atan(z1.y, z1.x));\n  float t2 = z2.x * atan(z1.y, z1.x) + .5 * z2.y * log(a2b2);\n  return vec2(t1 * cos(t2), t1 * sin(t2));\n}\n","\n").concat("\nvec2 complexAdd(vec2 z1, vec2 z2) { \n  return vec2(z1.x + z2.x, z1.y + z2.y); \n}\n","\n"),v="\n".concat("\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1., 2. / 3., 1. / 3., 3.);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6. - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0., 1.), c.y);\n}\n","\n").concat("\nfloat huefn(float iterations) {\n  float max_iter = float(maxIterations);\n  return .1 + .3*(iterations / max_iter);\n}\n","\n").concat("\nfloat satfn(float iterations) {\n  float max_iter = float(maxIterations);\n  return .5 + .5*(iterations / max_iter);\n}\n","\n").concat("\nfloat valfn(float iterations) {\n  float max_iter = float(maxIterations);\n  return .5 + 2.*(iterations / max_iter);\n}\n","\n");function h(e){var t=e.children;return r.a.createElement("li",{className:"item"},t)}function p(e){var t=e.text;return r.a.createElement("div",{className:"tooltip"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t}}))}function d(e){var t=e.htmlFor,n=e.text,a=e.tooltip;return a=a||null,r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:t},n," ",a?r.a.createElement(p,{text:a}):null))}function g(e){var t=e.type,n=e.label,a=e.name,o=e.tooltip,c=e.id,i=e.value,l=e.onChange;return t=t||"text",a=a||c,n=n||null,o=o||null,r.a.createElement(h,null,n?r.a.createElement(d,{htmlFor:c,text:n,tooltip:o}):null,r.a.createElement("input",{type:t,name:a,id:c,value:i,checked:i,onChange:l}))}function b(e,t){for(var n=0;n<e.length;n++){var a=e[n],r=e[n+1];if(a<=t&&r>t)return[n,n+1]}}function x(e){return e.trim().toLowerCase()}function E(){var e=Object(a.useContext)(i),t=Object(f.a)(e.julia.escapeRadius,2),n=t[0],o=t[1],c=x("Escape Radius");return r.a.createElement(g,{label:"Escape Radius",id:c,tooltip:"When an iterates' magnitude is greater than the square root of this number, consider it as tending towards infinity",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function j(e){for(var t,n=e,a=new RegExp(/\d+[.]\d+|(\d+[.])+|(\d+)/g),r=[];null!==(t=a.exec(e));)r.push(t);r=r.filter((function(e){return!e[0].includes(".")}));var o=0;for(var c in r){var i=r[c],l=i.index+i[0].length+o;n=n.slice(0,l)+"."+n.slice(l,n.length),o+=1}return n}var O=function(e){return"\nvec4 julia(vec2 z, vec2 c) {\n  float result;\n  int iters = 0;\n  vec2 zPrev = z;\n  z = vec2(0.);\n\n  for (int i = 0; i <= maxIterations; i++) {\n    ".concat(function(e){for(var t=function(e,t){return 0!==parseFloat(t)?0===e?"z = complexAdd(z, ".concat(t,"*c);"):1===e?"z = complexAdd(z, ".concat(t,"*zPrev);"):"z = complexAdd(z, complexPower(".concat(t,"*zPrev, vec2(").concat(e,", 0.)));"):""},n=e.replace(/\s/g,"").split(","),a="",r=0;r<n.length;r++){var o=t(n.length-(r+1),n[r]);""!==o&&(a=a.concat(o,"\n"))}return a}(j(e.julia.coefficients)),"\n    iters = i;\n    zPrev = z;\n    if (complexMag(z) > u_escapeRadius) break;\n  }\n\n  if (iters == maxIterations) {\n    return vec4(0,0,0,1);\n  } else {\n    ").concat(e.julia.useSmoothing?"result = smoothIterations(z, iters);":"result = float(iters);","\n  }\n\n  float percent = result/float(maxIterations);\n\n  return texture2D(u_colormap, vec2(percent));\n\n  // float hue = huefn(result);\n  // float sat = satfn(result);\n  // float val = valfn(result);\n\n  // return hsv2rgb(vec3(hue, sat, val, 1.0));\n}\n")};var C=function(e){return"\nvoid main(void) {\n  ".concat(function(e){var t=e.width,n=e.height,a=e.translate;return"\n  float XSIZE = ".concat(j(t),";\n  float YSIZE = ").concat(j(n),";\n  float XT = ").concat(j(a.x),";\n  float YT = ").concat(j(a.y),";\n  ")}(e.viewport),"\n\n  ").concat(function(e){var t=e.x,n=e.y;return"vec2 c = vec2(".concat(j(t),", ").concat(j(n),");")}(e.julia.c),"\n\n  // Normalized pixel coordinates (from 0 to 1)\n  vec2 uv = gl_FragCoord.xy / u_resolution.xy;\n\n  vec2 z;\n  z.x = (XSIZE * (uv.x - .5)) + XT;\n  z.y = (YSIZE * (uv.y - .5)) + YT;\n\n  vec4 col = julia(z, c);\n  gl_FragColor = col;\n}\n")},w=function(e){return"\n".concat("\nprecision highp float;\n","\n").concat((t=e.julia.maxIterations,"#define maxIterations ".concat(t)),"\n").concat("\nuniform float u_escapeRadius;\n\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_width;\nuniform float u_height;\nuniform float u_translatex;\nuniform float u_translatey;\n\nuniform sampler2D u_colormap;\n","\n").concat(m,"\n").concat(v,"\n").concat(function(e){var t=e.coefficients,n=e.escapeRadius,a=(t.match(/,/g)||[]).length.toString();return"\n  float smoothIterations(vec2 z, int iterations) {\n    float mag = complexMag(z);\n    float logmag = log(mag);\n    float logbound = log(".concat(j(n),");\n    float top = log(logmag/logbound);\n    float f = top/log(").concat(j(a),");\n\n    return float(iterations) - f;\n  }\n  ")}(e.julia),"\n").concat(O(e),"\n").concat(C(e),"\n");var t},y="\nattribute vec3 coordinates;\n\nvoid main(void) {\n  gl_Position = vec4(coordinates, 1.0);\n}\n",_=n(3),R=n(2);function S(e,t,n,a){var r=a(n);return e*(1-r)+t*r}var A={linear:{name:"Linear",value:"linear",fn:function(e,t,n){var a=function(e){return e};return S(e,t,n,a)}},quadratic:{name:"Quadratic",value:"quadratic",fn:function(e,t,n){var a=function(e){return Math.pow(e,2)};return S(e,t,n,a)}},cubic:{name:"Cubic",value:"cubic",fn:function(e,t,n){var a=function(e){return Math.pow(e,3)};return S(e,t,n,a)}},squareroot:{name:"Square root",value:"squareroot",fn:function(e,t,n){var a=function(e){return Math.pow(e,.5)};return S(e,t,n,a)}},cuberoot:{name:"Cube root",value:"cuberoot",fn:function(e,t,n){var a=function(e){return Math.pow(e,1/3)};return S(e,t,n,a)}},cosine:{name:"Cosine",value:"cosine",fn:function(e,t,n){var a=function(e){return-.5*Math.cos(Math.PI*e)+.5};return S(e,t,n,a)}},logarithmic:{name:"Logarithmic",value:"logarithmic",fn:function(e,t,n){var a=function(e){return 1/Math.log(2)*Math.log(e+1)};return S(e,t,n,a)}},exponential:{name:"Exponential",value:"exponential",fn:function(e,t,n){var a=function(e){return Math.pow(2,e)-1};return S(e,t,n,a)}}},T=[{name:"RGB",channels:[{name:"red",min:0,max:255},{name:"green",min:0,max:255},{name:"blue",min:0,max:255}]},{name:"HSV",channels:[{name:"hue",min:0,max:360},{name:"saturation",min:0,max:1},{name:"value",min:0,max:1}]}];function z(e){var t,n=e.map((function(e){return e/255})),a=Object(f.a)(n,3),r=a[0],o=a[1],c=a[2];if(r+o+c===3)return[-1,0,1];if(r+o+c===0)return[-1,0,0];var i=Math.min(r,o,c),l=Math.max(r,o,c),u=l-i;return t=r===l?(o-c)/u:o===l?2+(c-r)/u:4+(r-o)/u,(t*=60)<0&&(t+=360),[t,0!==l?u/l:0,l]}var F=2048,M=4;function I(e){var t=e.trim();t.startsWith("#")&&(t=t.slice(1,t.length));return null!=parseInt(t)?[parseInt("0x".concat(t.slice(0,2))),parseInt("0x".concat(t.slice(2,4))),parseInt("0x".concat(t.slice(4,6)))]:[0,0,0]}function P(e,t,n){for(var a=A[t].fn,r=e.sort((function(e,t){return parseFloat(e.position)-parseFloat(t.position)})),o=r.map((function(e){return parseFloat(e.position)})),c="RGB"!==n?r.map((function(e){return Object(R.a)({},e,{color:z(e.color)})})):r,i=[],l=0;l<F;l++){var u=l/F,s=b(o,u),m=c[s[0]],v=parseFloat(m.position),h=c[s[1]],p=parseFloat(h.position),d=(u-v)/Math.abs(v-p);-1===h.color[0]&&(h.color[0]=m.color[0]);for(var g=[],x=0;x<m.color.length;x++)g[x]=a(m.color[x],h.color[x],d);i[l]=g}for(var E=function e(t,n){for(var a in t){var r=t[a];null!=r&&Array.isArray(r)?t[a]=e(t[a],n):t[a]=n(t[a])}return t}(("RGB"!==n?i.map((function(e){return function(e){var t,n,a,r,o,c,i,l,u=Object(f.a)(e,3),s=u[0],m=u[1],v=u[2];if(0===m)return[255*(t=n=a=v),255*n,255*a];switch(c=v*(1-m),i=v*(1-m*(o=(s/=60)-(r=Math.floor(s)))),l=v*(1-m*(1-o)),r){case 0:t=v,n=l,a=c;break;case 1:t=i,n=v,a=c;break;case 2:t=c,n=v,a=l;break;case 3:t=c,n=i,a=v;break;case 4:t=l,n=c,a=v;break;default:t=v,n=c,a=i}return[255*t,255*n,255*a]}(e)})):i).map((function(e){return[].concat(Object(_.a)(e),[255])})),(function(e){return Math.round(e)})),j=F*M,O=new Uint8Array(j),C=0;C<j;C++){var w=Math.floor(C/M),y=C%M;O[C]=E[w][y]}return O}var U=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],L=[3,2,1,3,1,0];function B(e,t){var n=t.canvasRef,a=t.gl,r=t.julia,o=t.time,c=t.viewport,i=r.escapeRadius,l=r.maxIterations,u=a.getUniformLocation(e,"u_escapeRadius");a.uniform1f(u,i);var s=a.getUniformLocation(e,"u_maxIterations");a.uniform1i(s,l);var f=a.getUniformLocation(e,"u_resolution");a.uniform2fv(f,[n.width,n.height]);var m,v,h=a.getUniformLocation(e,"u_time"),p=(m=o.startedAt,v=o.pauseDuration,(Date.now()-m-v)/1e3*o.timeScale);a.uniform1f(h,p);var d=a.getUniformLocation(e,"u_width");a.uniform1f(d,c.width);var g=a.getUniformLocation(e,"u_height");a.uniform1f(g,c.height);var b=a.getUniformLocation(e,"u_translatex");a.uniform1f(b,c.translate.x);var x=a.getUniformLocation(e,"u_translatey");a.uniform1f(x,c.translate.y);var E=a.getUniformLocation(e,"u_colormap"),j=function(e,t){var n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,F,1,0,e.RGBA,e.UNSIGNED_BYTE,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),n}(a,t.color.textureData);a.uniform1i(E,j)}function D(e){var t=e.canvasRef,n=e.gl;if(null!==n){var a=w(e),r=function(e){var t=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array(U),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),t}(n),o=function(e){var t=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(L),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),t}(n),c=function(e,t){var n=e.createShader(e.VERTEX_SHADER);e.shaderSource(n,y),e.compileShader(n);var a=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(a,t),e.compileShader(a);var r=e.createProgram();if(e.attachShader(r,n),e.attachShader(r,a),e.linkProgram(r),e.useProgram(r),!e.getShaderParameter(a,e.COMPILE_STATUS)){for(var o=e.getShaderInfoLog(a),c=[],i=0;i<o.length;i++)":"===o[i]&&c.push(i);var l=o.substring(c[1]+1,c[2]);console.log(t.split("\n")[l-1])}return e.getShaderParameter(n,e.COMPILE_STATUS)||console.log(e.getShaderInfoLog(n)),r}(n,a);B(c,e),n.bindBuffer(n.ARRAY_BUFFER,r),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,o);var i=n.getAttribLocation(c,"coordinates");n.vertexAttribPointer(i,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(i),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.COLOR_BUFFER_BIT),n.viewport(0,0,t.width,t.height),n.drawElements(n.TRIANGLES,L.length,n.UNSIGNED_SHORT,0)}else alert("Unable to initialize WebGL. Your browser or machine may not support it.")}function k(e){var t=e.children;return r.a.createElement("ul",{className:"gui-container"},t)}function N(e){var t=e.title,n=e.children,o=Object(a.useState)(!1),c=Object(f.a)(o,2),i=c[0],l=c[1];return r.a.createElement("li",{className:"folder"},r.a.createElement("div",{className:"group"},r.a.createElement("ul",{className:i?"closed":""},r.a.createElement("li",{className:"title",onClick:function(e){l(!i)}},t),n)))}function Y(){var e=Object(a.useContext)(i),t=Object(f.a)(e.julia.coefficients,2),n=t[0],o=t[1],c=x("Coefficients");return r.a.createElement(g,{label:"Coefficients",id:c,tooltip:"Comma-seperated values for the coefficients of each polynomial term. \n\n    N values applied in the order Z<sup>n-1</sup> + Z<sup>n-2</sup> + ... + Z, C",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function X(){var e=Object(a.useContext)(i),t=Object(f.a)(e.julia.c.x,2),n=t[0],o=t[1],c=x("Constant X");return r.a.createElement(g,{label:"Constant X",id:c,tooltip:"X (real) component of the constant point of the Julia Set function",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function W(){var e=Object(a.useContext)(i),t=Object(f.a)(e.julia.c.y,2),n=t[0],o=t[1],c=x("Constant Y");return r.a.createElement(g,{label:"Constant Y",id:c,tooltip:"Y (imaginary) component of the constant point of the Julia Set function",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function H(){var e=Object(a.useContext)(i),t=Object(f.a)(e.julia.maxIterations,2),n=t[0],o=t[1],c=x("Max Iterations");return r.a.createElement(g,{id:c,label:"Max Iterations",tooltip:"Maximum number of times to iterate a point before it is considered to be part of the bounded set",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function G(){var e=Object(a.useContext)(i),t=Object(f.a)(e.julia.useSmoothing,2),n=t[0],o=t[1],c=x("Julia smoothing");return r.a.createElement(g,{type:"checkbox",id:c,label:"Julia smoothing",tooltip:"Toggle Julia escape iteration renormalisation\n\nWhen on, produces smooth gradients between the boundry of n and n+1 iterations before escape. May behave unexpectedly for coefficents != 1, 0, 1",value:n,onChange:function(e){var t=e.target.checked;o(t)}})}function V(){var e=Object(a.useContext)(i),t=Object(f.a)(e.time.timeScale,2),n=t[0],o=t[1],c=x("Time Scale");return r.a.createElement(g,{id:c,label:"Time Scale",tooltip:"Scale the speed at which time passes for functions reliant on u_time",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function q(){var e=Object(a.useContext)(i),t=Object(f.a)(e.viewport.width,2),n=t[0],o=t[1],c=x("Viewport width");return r.a.createElement(g,{label:"Viewport width",id:c,tooltip:"Width of the complex plane",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function J(){var e=Object(a.useContext)(i),t=Object(f.a)(e.viewport.height,2),n=t[0],o=t[1],c=x("Viewport height");return r.a.createElement(g,{label:"Viewport height",id:c,tooltip:"Height of the complex plane",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function Z(){var e=Object(a.useContext)(i),t=Object(f.a)(e.viewport.translate.x,2),n=t[0],o=t[1],c=x("Translate X");return r.a.createElement(g,{label:"Translate X",id:c,tooltip:"Horizontal translation of the complex plane",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function K(){var e=Object(a.useContext)(i),t=Object(f.a)(e.viewport.translate.y,2),n=t[0],o=t[1],c=x("Translate Y");return r.a.createElement(g,{label:"Translate Y",id:c,tooltip:"Vertical translation of the complex plane",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function Q(){var e=Object(a.useContext)(i),t=Object(f.a)(e.viewport.lockAspectRatio,2),n=t[0],o=t[1],c="Lock aspect ratio",l=x(c);return r.a.createElement(g,{type:"checkbox",id:l,label:c,tooltip:"Lock the aspect ratio of the complex plane to match that of the canvas",value:n,onChange:function(e){var t=e.target.checked;o(t)}})}function $(e){var t=e.item;return r.a.createElement("option",{key:t,value:t},t)}function ee(e){var t=e.label,n=e.tooltip,a=e.id,o=e.options,c=e.value,i=e.onChange;return t=t||null,n=n||null,r.a.createElement(h,null,t?r.a.createElement(d,{htmlFor:a,text:t,tooltip:n}):null,r.a.createElement("select",{id:a,name:a,value:c,onChange:i},o.map((function(e,t){return r.a.createElement($,{key:t,item:e})}))))}function te(){var e=Object(a.useContext)(i),t=Object(f.a)(e.color.curve,2),n=t[0],o=t[1],c=A[n].name,l=Object.keys(A).map((function(e){return A[e].name})),u=x("Mapping curve");return r.a.createElement(ee,{label:"Mapping curve",id:u,tooltip:"Curve used to shape the colour mapping",options:l,value:c,onChange:function(e){var t=e.target.value,n=Object.keys(A).find((function(e){return A[e].name===t}));o(n)}})}function ne(){var e=Object(a.useContext)(i),t=Object(f.a)(e.color.colorModel,2),n=t[0],o=t[1],c=T.map((function(e){return e.name})),l=x("Colour model");return r.a.createElement(ee,{label:"Colour model",id:l,tooltip:"Colour model used for interpolation between each colour specified in the colour map",options:c,value:n,onChange:function(e){var t=e.target.value;o(t)}})}function ae(){return r.a.createElement("div",null)}function re(e){var t=e.item,n=e.idx,a=e.handleChange,o=t.hex,c="".concat(x("Colour")).concat(n);return r.a.createElement(g,{type:"color",label:"Colour",name:"color",id:c,value:o,onChange:function(e){a(e,n)}})}function oe(e){var t=e.item,n=e.idx,a=e.handleChange,o=t.position,c="".concat(x("Position")).concat(n);return r.a.createElement(g,{type:"text",label:"Position",name:"position",id:c,tooltip:"Value in range [0, 1] representing the colour's position on the colour mapping",value:o,onChange:function(e){a(e,n)}})}function ce(e){var t=e.item,n=e.idx,a=e.handleChange;return r.a.createElement(N,{title:"Colour ".concat(n+1)},r.a.createElement(re,{item:t,idx:n,handleChange:a}),r.a.createElement(oe,{item:t,idx:n,handleChange:a}))}function ie(){var e=Object(a.useContext)(i),t=Object(f.a)(e.color.colorPoints,2),n=t[0],o=t[1];function c(e,t){var a=e.target.value,r=n[t],c=function(){switch(e.target.name){case"color":return Object(R.a)({},r,{hex:a});case"position":return Object(R.a)({},r,{position:a});default:return r}}.call(),i=Object(_.a)(n);i[t]=c,o(i)}return r.a.createElement(N,{title:"Colour Points"},r.a.createElement(ae,null),n.map((function(e,t){return r.a.createElement(ce,{item:e,key:t,idx:t,handleChange:c})})))}function le(){return r.a.createElement(k,null,r.a.createElement(N,{title:"Julia Variables"},r.a.createElement(Y,null),r.a.createElement(N,{title:"Constant Point"},r.a.createElement(X,null),r.a.createElement(W,null)),r.a.createElement(H,null),r.a.createElement(E,null),r.a.createElement(G,null),r.a.createElement(V,null)),r.a.createElement(N,{title:"Viewport"},r.a.createElement(N,{title:"Dimensions"},r.a.createElement(q,null),r.a.createElement(J,null)),r.a.createElement(N,{title:"Translate"},r.a.createElement(Z,null),r.a.createElement(K,null)),r.a.createElement(Q,null)),r.a.createElement(N,{title:"Colour Mapping"},r.a.createElement(ie,null),r.a.createElement(te,null),r.a.createElement(ne,null)),r.a.createElement(N,{title:"Presets"}))}function ue(e){var t=e.width,n=e.height;var a=function(){var e=document.getElementsByClassName("glcanvas")[0],t=[e.offsetWidth,e.offsetHeight];return t[0]>t[1]?"landscape":"portrait"}(),r=function(e){var t=document.getElementsByClassName("glcanvas")[0],n=[t.offsetWidth,t.offsetHeight],a=n[0],r=n[1];return 0===r||0===a?1:"landscape"===e?a/r:"portrait"===e?r/a:1}(a);return"landscape"===a?n*=1/r:"portrait"===a&&(t*=1/r),{width:t,height:n}}function se(){var e=Object(a.useContext)(i),t=Object(a.useRef)(),n=Object(a.useState)(0),r=Object(f.a)(n,2),o=r[0],c=r[1],l=Object(a.useState)(0),s=Object(f.a)(l,2),m=s[0],v=s[1],h=e.time.paused[0],p=e.gl[0];return Object(a.useEffect)((function(){return t.current=requestAnimationFrame((function n(){!1===h&&null!==p&&(v(Date.now()),D(function e(t){var n={};for(var a in t)u(t[a])?n[a]=t[a][0]:n[a]=e(t[a]);return n}(e)),c((function(e){return e+1})));t.current=requestAnimationFrame(n)})),function(){return cancelAnimationFrame(t.current)}}),[e,h,p]),[o,m]}function fe(){var e=Object(a.useContext)(i),t=Object(f.a)(e.viewport.lockAspectRatio,1)[0],n=Object(a.useState)(),o=Object(f.a)(n,2),c=o[0],l=o[1],u=function(){var e=Object(a.useContext)(i),t=Object(a.useRef)(),n=e.canvasRef[1],r=e.gl[1];return Object(a.useEffect)((function(){n(t.current),r(t.current.getContext("webgl"))}),[n,r,t]),t}();!function(){var e=Object(a.useContext)(i),t=Object(f.a)(e.color.colorPoints,1)[0],n=Object(f.a)(e.color.curve,1)[0],r=Object(f.a)(e.color.colorModel,1)[0],o=Object(f.a)(e.color.textureData,2)[1];Object(a.useEffect)((function(){var e=P(t.map((function(e){return{color:I(e.hex),position:e.position}})),n,r);o(e)}),[t,n,r,o])}();var s=se(),m=Object(f.a)(s,2);m[0],m[1];return function(){var e=Object(a.useContext)(i),t=Object(f.a)(e.viewport.width,2),n=t[0],r=t[1],o=Object(f.a)(e.viewport.height,2),c=o[0],l=o[1];Object(a.useEffect)((function(){var e=ue({width:n,height:c});r(e.width),l(e.height)}),[])}(),r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{className:"glcanvas",width:"1000",height:"1000",onMouseDown:function(e){var t=[e.clientX,e.clientY];l(t)},onMouseUp:function(n){var a=e.viewport.translate.x[1],r=e.viewport.translate.y[1],o=e.viewport.width[1],i=e.viewport.height[1],l=[n.clientX,n.clientY],u=document.getElementsByClassName("glcanvas")[0],s=[u.offsetWidth,u.offsetHeight],f=s[0],m=s[1],v={x1:c[0],x2:l[0],y1:u.offsetHeight-c[1],y2:u.offsetHeight-l[1]};if(!function(e){var t=e.x1,n=e.x2,a=e.y1,r=e.y2,o=Math.abs(t-n),c=Math.abs(a-r);return o<1||c<1}(v)){var h=function(t){var n=t.x,a=t.y,r=document.getElementsByClassName("glcanvas")[0],o=[r.offsetWidth,r.offsetHeight],c=o[0],i=o[1],l=parseFloat(e.viewport.width[0]),u=parseFloat(e.viewport.height[0]),s=u/i;return{x:-l/2+n*(l/c)+parseFloat(e.viewport.translate.x[0]),y:-u/2+a*s+parseFloat(e.viewport.translate.y[0])}}({x:(v.x1+v.x2)/2,y:(v.y1+v.y2)/2});a(h.x),r(h.y);var p=parseFloat(e.viewport.width),d=parseFloat(e.viewport.height),g={width:p*(Math.abs(v.x1-v.x2)/f),height:d*(Math.abs(v.y1-v.y2)/m)};if(!0===t){var b=ue(g);o(b.width),i(b.height)}else o(g.width),i(g.height)}},ref:u}),r.a.createElement(le,null))}var me=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null,r.a.createElement(fe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.cbdeb769.chunk.js.map