(this["webpackJsonpjulia-frontend"]=this["webpackJsonpjulia-frontend"]||[]).push([[0],{14:function(e,t,n){e.exports=n(30)},19:function(e,t,n){},20:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),c=n.n(o);n(19),n(20);function i(e,t){for(var n=0;n<e.length;n++){var a=e[n],r=e[n+1];if(a<=t&&r>t)return[n,n+1]}}function l(e){return e.replace(/ /g,"").toLowerCase()}var u=function(e){return Array.isArray(e)&&2===e.length&&function(e){return"function"===typeof e[1]&&e[1].name.startsWith("bound ")}(e)};function s(e){for(var t,n=e,a=new RegExp(/\d+[.]\d+|(\d+[.])+|(\d+)/g),r=[];null!==(t=a.exec(e));)r.push(t);r=r.filter((function(e){return!e[0].includes(".")}));var o=0;try{for(var c in r){var i=r[c],l=i.index+i[0].length+o;n=n.slice(0,l)+"."+n.slice(l,n.length),o+=1}}catch(u){return e}return n}var f=r.a.createContext(),m=f.Provider;f.Consumer;function v(e){var t={};for(var n in e)u(e[n])?t[n]=e[n][0]:t[n]=v(e[n]);return t}var h=function(e){var t=e.children,n={canvasRef:Object(a.useState)(null),gl:Object(a.useState)(null),julia:{coefficients:Object(a.useState)("c, 2/3, -4*c/3, 0 , 0, 1"),c:{x:Object(a.useState)("0.1-cos(u_time)"),y:Object(a.useState)("0.4-sin(u_time/2)")},maxIterations:Object(a.useState)("20"),escapeRadius:Object(a.useState)("200"),useSmoothing:Object(a.useState)(!0),msaa:Object(a.useState)("2x")},viewport:{width:Object(a.useState)("7"),height:Object(a.useState)("7"),translate:{x:Object(a.useState)("0"),y:Object(a.useState)("0")},lockAspectRatio:Object(a.useState)(!0)},color:{colorPoints:Object(a.useState)([{hex:"#000000",position:"0"},{hex:"#FF0000",position:"0.3"},{hex:"#FFFF00",position:"1.0"}]),curve:Object(a.useState)("linear"),colorModel:Object(a.useState)("RGB"),textureData:Object(a.useState)([255,255,255])},time:{startedAt:Object(a.useState)(Date.now()),lastFrameTime:Object(a.useState)(Date.now()),paused:Object(a.useState)(!1),elapsed:Object(a.useState)(0),timeScale:Object(a.useState)("1")}};return r.a.createElement(m,{value:n},t)},p=n(1),d=n(4),g=n(3);function b(e,t,n,a){var r=a(n);return e*(1-r)+t*r}var x={linear:{name:"Linear",value:"linear",fn:function(e,t,n){var a=function(e){return e};return b(e,t,n,a)}},quadratic:{name:"Quadratic",value:"quadratic",fn:function(e,t,n){var a=function(e){return Math.pow(e,2)};return b(e,t,n,a)}},cubic:{name:"Cubic",value:"cubic",fn:function(e,t,n){var a=function(e){return Math.pow(e,3)};return b(e,t,n,a)}},squareroot:{name:"Square root",value:"squareroot",fn:function(e,t,n){var a=function(e){return Math.pow(e,.5)};return b(e,t,n,a)}},cuberoot:{name:"Cube root",value:"cuberoot",fn:function(e,t,n){var a=function(e){return Math.pow(e,1/3)};return b(e,t,n,a)}},cosine:{name:"Cosine",value:"cosine",fn:function(e,t,n){var a=function(e){return-.5*Math.cos(Math.PI*e)+.5};return b(e,t,n,a)}},logarithmic:{name:"Logarithmic",value:"logarithmic",fn:function(e,t,n){var a=function(e){return 1/Math.log(2)*Math.log(e+1)};return b(e,t,n,a)}},exponential:{name:"Exponential",value:"exponential",fn:function(e,t,n){var a=function(e){return Math.pow(2,e)-1};return b(e,t,n,a)}}},E=[{name:"RGB",channels:[{name:"red",min:0,max:255},{name:"green",min:0,max:255},{name:"blue",min:0,max:255}]},{name:"HSV",channels:[{name:"hue",min:0,max:360},{name:"saturation",min:0,max:1},{name:"value",min:0,max:1}]}];function j(e){var t,n,a=e.map((function(e){return e/255})),r=Object(p.a)(a,3),o=r[0],c=r[1],i=r[2];if(o+c+i===3)return[-1,0,1];if(o+c+i===0)return[-1,0,0];var l=Math.min(o,c,i),u=Math.max(o,c,i),s=u-l;return 0!==(n=0!==u?s/u:0)?(t=o===u?(c-i)/s:c===u?2+(i-o)/s:4+(o-c)/s,(t*=60)<0&&(t+=360)):t=-1,[t,n,u]}var O=2048,w=1,C=4;function y(e){var t=e.trim();t.startsWith("#")&&(t=t.slice(1,t.length));return null!=parseInt(t)?[parseInt("0x".concat(t.slice(0,2))),parseInt("0x".concat(t.slice(2,4))),parseInt("0x".concat(t.slice(4,6)))]:[0,0,0]}function S(e,t,n){for(var a=x[t].fn,r=e.sort((function(e,t){return parseFloat(e.position)-parseFloat(t.position)})),o=r.map((function(e){return parseFloat(e.position)})),c="RGB"!==n?r.map((function(e){return Object(g.a)({},e,{color:j(e.color)})})):r,l=[],u=0;u<O;u++){var s=u/O,f=i(o,s),m=c[f[0]],v=parseFloat(m.position),h=c[f[1]],b=parseFloat(h.position),E=(s-v)/Math.abs(v-b);-1===h.color[0]&&(h.color[0]=m.color[0]),-1===m.color[0]&&(m.color[0]=h.color[0]);for(var w=[],y=0;y<m.color.length;y++)w[y]=a(m.color[y],h.color[y],E);l[u]=w}for(var S=function e(t,n){for(var a in t){var r=t[a];null!=r&&Array.isArray(r)?t[a]=e(t[a],n):t[a]=n(t[a])}return t}("RGB"!==n?l.map((function(e){return function(e){var t,n,a,r,o,c,i,l,u=Object(p.a)(e,3),s=u[0],f=u[1],m=u[2];if(0===f)return[255*(t=n=a=m),255*n,255*a];switch(c=m*(1-f),i=m*(1-f*(o=(s/=60)-(r=Math.floor(s)))),l=m*(1-f*(1-o)),r){case 0:t=m,n=l,a=c;break;case 1:t=i,n=m,a=c;break;case 2:t=c,n=m,a=l;break;case 3:t=c,n=i,a=m;break;case 4:t=l,n=c,a=m;break;default:t=m,n=c,a=i}return[255*t,255*n,255*a]}(e)})):l,(function(e){return Math.round(e)})).map((function(e){return[].concat(Object(d.a)(e),[255])})),R=O*C,_=new Uint8Array(R),A=0;A<R;A++){var F=Math.floor(A/C),T=A%C;_[A]=S[F][T]}return _}function R(e){var t=e.children;return r.a.createElement("li",{className:"item"},t)}function _(e){var t=e.text;return r.a.createElement("div",{className:"tooltip"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t}}))}function A(e){var t=e.htmlFor,n=e.text,a=e.tooltip;return a=a||null,r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:t},n," ",a?r.a.createElement(_,{text:a}):null))}function F(e){var t=e.item;return r.a.createElement("option",{value:t},t)}function T(e){var t=e.label,n=e.tooltip,a=e.id,o=e.options,c=e.value,i=e.onChange;return t=t||null,n=n||null,r.a.createElement(R,null,t?r.a.createElement(A,{htmlFor:a,text:t,tooltip:n}):null,r.a.createElement("select",{id:a,name:a,value:c,onChange:i},o.map((function(e,t){return r.a.createElement(F,{key:t,item:e})}))))}var k=[{name:"1x",aaFrac:1},{name:"2x",aaFrac:.5},{name:"4x",aaFrac:.25},{name:"8x",aaFrac:1/8},{name:"16x",aaFrac:1/16}];function M(){var e=Object(a.useContext)(f),t=Object(p.a)(e.julia.msaa,2),n=t[0],o=t[1],c=k.map((function(e){return e.name}));return r.a.createElement(T,{label:"Anti-aliasing",id:"msaa",tooltip:"Level of supersample anti-aliasing applied to render. High levels may result in considerable slowdown",options:c,value:n,onChange:function(e){var t=e.target.value;o(t)}})}var z="\n".concat("\nvec3 hsv2rgb(vec3 c) {\n  vec4 K = vec4(1., 2. / 3., 1. / 3., 3.);\n  vec3 p = abs(fract(c.xxx + K.xyz) * 6. - K.www);\n  return c.z * mix(K.xxx, clamp(p - K.xxx, 0., 1.), c.y);\n}\n","\n").concat("\nfloat huefn(float iterations) {\n  float max_iter = float(maxIterations);\n  return .1 + .3*(iterations / max_iter);\n}\n","\n").concat("\nfloat satfn(float iterations) {\n  float max_iter = float(maxIterations);\n  return .5 + .5*(iterations / max_iter);\n}\n","\n").concat("\nfloat valfn(float iterations) {\n  float max_iter = float(maxIterations);\n  return .5 + 2.*(iterations / max_iter);\n}\n","\n"),N="\n".concat("\n#define PI 3.14159265359\n#define TAU 6.28318530718\n","\n").concat("\nvec2 complexConjug(in vec2 c) { \n  return vec2(c.x, -c.y); \n}\n","\n").concat("\nvec2 complexMult(in vec2 a, in vec2 b) {\n  return vec2(a.x * b.x - a.y * b.y, a.y * b.x + a.x * b.y);\n}\n","\n").concat("\nvec2 complexDiv(in vec2 a, in vec2 b) {\n  return complexMult(a, complexConjug(b));\n}\n","\n").concat("\nfloat complexMag(in vec2 c) { \n  return sqrt(c.x * c.x + c.y * c.y); \n}\n","\n").concat("\nvec2 complexPower(vec2 z1, vec2 z2) {\n  float a2b2 = z1.x * z1.x + z1.y * z1.y;\n  float t1 = pow(a2b2, z2.x / 2.) * exp(-z2.y * atan(z1.y, z1.x));\n  float t2 = z2.x * atan(z1.y, z1.x) + .5 * z2.y * log(a2b2);\n  return vec2(t1 * cos(t2), t1 * sin(t2));\n}\n","\n").concat("\nvec2 complexAdd(vec2 z1, vec2 z2) { \n  return vec2(z1.x + z2.x, z1.y + z2.y); \n}\n","\n");var I=function(e){return"\nvec4 julia(vec2 pixel) {\n  ".concat(function(e){var t=e.width,n=e.height,a=e.translate;return"\n  vec2 size = vec2(".concat(s(t),", ").concat(s(n),");\n  vec2 translate = vec2(").concat(s(a.x),", ").concat(s(a.y),");\n  ")}(e.viewport),"\n  ").concat(function(e){var t=e.x,n=e.y;return"vec2 c = vec2(".concat(s(t),", ").concat(s(n),");")}(e.julia.c),"\n\n  // Map pixel value [0, canvasWidth], [0, canvasHeight] into ranges [0, 1]\n  vec2 uv = pixel / u_resolution;\n\n  vec2 zPrev = (size * (uv - 0.5)) + translate;\n  vec2 z = vec2(0.);\n\n  float result;\n  int iters = 0;\n  for (int i = 0; i <= maxIterations; i++) {\n    ").concat(function(e){function t(e,t){return 0!==parseFloat(t)?0===e?"z = complexAdd(z, ".concat(t,"*c);"):1===e?"z = complexAdd(z, ".concat(t,"*zPrev);"):"z = complexAdd(z, complexPower(".concat(t,"*zPrev, vec2(").concat(e,", 0.)));"):""}for(var n=e.replace(/\s/g,"").split(","),a="",r=0;r<n.length;r++){var o=t(n.length-(r+1),n[r]);""!==o&&(a=a.concat(o,"\n"))}return a}(s(e.julia.coefficients)),"\n    iters = i;\n    zPrev = z;\n    if (complexMag(z) > u_escapeRadius) break;\n  }\n\n  if (iters == maxIterations) {\n    return vec4(0,0,0,1);\n  } else {\n    ").concat(e.julia.useSmoothing?"result = smoothIterations(z, iters);":"result = float(iters);","\n  }\n\n  float percent = result/float(maxIterations);\n  return texture2D(u_colormap, vec2(percent));;\n}\n")};var P=function(e){return"\n".concat("\nprecision highp float;\n","\n").concat(function(e){var t=k.find((function(t){return t.name===e})).aaFrac;return 1!==t?"#define AA ".concat(t):""}(e.julia.msaa),"\n").concat((t=e.julia.maxIterations,"#define maxIterations ".concat(t)),"\n").concat("\nuniform float u_escapeRadius;\n\nuniform vec2 u_resolution;\nuniform float u_time;\nuniform float u_width;\nuniform float u_height;\nuniform float u_translatex;\nuniform float u_translatey;\n\nuniform sampler2D u_colormap;\n","\n").concat(N,"\n").concat(z,"\n").concat(function(e){var t=e.coefficients,n=(e.escapeRadius,(t.match(/,/g)||[]).length.toString());return"\n  float smoothIterations(vec2 z, int iterations) {\n    float mag = complexMag(z);\n    float logmag = log(mag);\n    float logbound = log(u_escapeRadius);\n    float top = log(logmag/logbound);\n    float f = top/log(".concat(s(n),");\n\n    return float(iterations) - f;\n  }\n  ")}(e.julia),"\n").concat(I(e),"\n").concat("\nvoid main(void) {\n  vec4 color;\n\n  #ifdef AA\n    float n; // Number of loops\n    for (float x = 0.; x < 1.; x += AA) {\n        for (float y = 0.; y < 1.; y += AA) {\n            color += julia(gl_FragCoord.xy + vec2(x, y));\n            n += 1.0;\n        }\n    }\n    // Normalise colour\n    color /= n; \n  #else\n    color = julia(gl_FragCoord.xy);\n  #endif\n\n  gl_FragColor = color;\n}\n","\n");var t},L="\nattribute vec3 coordinates;\n\nvoid main(void) {\n  gl_Position = vec4(coordinates, 1.0);\n}\n",U=[-1,1,0,-1,-1,0,1,-1,0,1,1,0],B=[3,2,1,3,1,0];function D(e,t){var n=t.canvasRef,a=t.gl,r=t.julia,o=t.time,c=t.viewport,i=r.escapeRadius,l=r.maxIterations,u=o.elapsed,s=a.getUniformLocation(e,"u_escapeRadius");a.uniform1f(s,i);var f=a.getUniformLocation(e,"u_maxIterations");a.uniform1i(f,l);var m=a.getUniformLocation(e,"u_resolution");a.uniform2fv(m,[n.width,n.height]);var v=a.getUniformLocation(e,"u_time");a.uniform1f(v,u/5e3);var h=a.getUniformLocation(e,"u_width");a.uniform1f(h,c.width);var p=a.getUniformLocation(e,"u_height");a.uniform1f(p,c.height);var d=a.getUniformLocation(e,"u_translatex");a.uniform1f(d,c.translate.x);var g=a.getUniformLocation(e,"u_translatey");a.uniform1f(g,c.translate.y);var b=a.getUniformLocation(e,"u_colormap"),x=function(e,t){var n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,O,1,0,e.RGBA,e.UNSIGNED_BYTE,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),n}(a,t.color.textureData);a.uniform1i(b,x)}function H(e){var t=e.canvasRef,n=e.gl;if(null!==n){var a=P(e),r=function(e){var t=e.createBuffer();return e.bindBuffer(e.ARRAY_BUFFER,t),e.bufferData(e.ARRAY_BUFFER,new Float32Array(U),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),t}(n),o=function(e){var t=e.createBuffer();return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t),e.bufferData(e.ELEMENT_ARRAY_BUFFER,new Uint16Array(B),e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),t}(n),c=function(e,t){var n=e.createShader(e.VERTEX_SHADER);e.shaderSource(n,L),e.compileShader(n);var a=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(a,t),e.compileShader(a);var r=e.createProgram();if(e.attachShader(r,n),e.attachShader(r,a),e.linkProgram(r),e.useProgram(r),!e.getShaderParameter(a,e.COMPILE_STATUS)){var o=e.getShaderInfoLog(a);console.log(o);for(var c=[],i=0;i<o.length;i++)":"===o[i]&&c.push(i);var l=o.substring(c[1]+1,c[2]);console.log(t.split("\n")[l-1])}return e.getShaderParameter(n,e.COMPILE_STATUS)||console.log(e.getShaderInfoLog(n)),r}(n,a);console.log(a),D(c,e),n.bindBuffer(n.ARRAY_BUFFER,r),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,o);var i=n.getAttribLocation(c,"coordinates");n.vertexAttribPointer(i,3,n.FLOAT,!1,0,0),n.enableVertexAttribArray(i),n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.clear(n.DEPTH_BUFFER_BIT),n.viewport(0,0,t.width,t.height),n.drawElements(n.TRIANGLES,B.length,n.UNSIGNED_SHORT,0)}else alert("Unable to initialize WebGL. Your browser or machine may not support it.")}function W(){var e="object"===typeof window;function t(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}}var n=Object(a.useState)(t),r=Object(p.a)(n,2),o=r[0],c=r[1];return Object(a.useEffect)((function(){if(!e)return!1;function n(){c(t())}return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),o}function Y(e,t,n){if(t=t||null,n=n||null,"boolean"!==typeof e)throw new Error("Non-boolean supplied for useToggle initial value");var r=Object(a.useState)(e),o=Object(p.a)(r,2),c=o[0],i=o[1];return[c,function(e){if(!0===c){if(i(!1),null!==n){if("function"!==typeof n)throw new Error("whenSetToFalseCb not a function");n(e)}}else if(i(!0),null!==t){if("function"!==typeof t)throw new Error("whenSetToTrueCb not a function");t(e)}}]}function X(e){var t=e.width,n=e.height,a=e.anchor;var r=function(e){var t=document.getElementsByClassName("glcanvas"),n=Object(p.a)(t,1)[0],a=[n.offsetWidth,n.offsetHeight],r=a[0],o=a[1];return 0===o||0===r?1:"landscape"===e?o/r:"portrait"===e?r/o:1}(a=a||function(){var e=document.getElementsByClassName("glcanvas"),t=Object(p.a)(e,1)[0],n=[t.offsetWidth,t.offsetHeight];return n[0]>n[1]?"landscape":"portrait"}());return"landscape"===a?n=t*r:"portrait"===a&&(t=n*r),{width:t,height:n}}function G(){var e=Object(a.useContext)(f),t=W(),n=Object(p.a)(e.viewport.lockAspectRatio,1)[0],o=Object(a.useState)(),c=Object(p.a)(o,2),i=c[0],l=c[1],u=function(){var e=Object(a.useContext)(f),t=Object(a.useRef)(),n=Object(p.a)(e.canvasRef,2)[1],r=Object(p.a)(e.gl,2)[1];return Object(a.useEffect)((function(){n(t.current),r(t.current.getContext("webgl",{preserveDrawingBuffer:!0}))}),[n,r,t]),t}();return function(){var e=Object(a.useContext)(f),t=Object(p.a)(e.color.colorPoints,1)[0],n=Object(p.a)(e.color.curve,1)[0],r=Object(p.a)(e.color.colorModel,1)[0],o=Object(p.a)(e.color.textureData,2)[1];Object(a.useEffect)((function(){var e=S(t.map((function(e){return{color:y(e.hex),position:e.position}})),n,r);o(e)}),[t,n,r,o])}(),function(){var e=Object(a.useContext)(f),t=Object(p.a)(e.viewport.width,2),n=t[0],r=t[1],o=Object(p.a)(e.viewport.height,2),c=o[0],i=o[1];Object(a.useEffect)((function(){var e=X({width:n,height:c});r(e.width),i(e.height)}),[])}(),function(){var e=Object(a.useContext)(f),t=Object(a.useRef)(),n=Object(p.a)(e.time.lastFrameTime,2),r=n[0],o=n[1],c=Object(p.a)(e.time.elapsed,2),i=c[0],l=c[1],u=Object(p.a)(e.time.timeScale,1)[0],s=Object(p.a)(e.time.paused,1)[0],m=Object(p.a)(e.gl,1)[0],h=function(){if(null!==m){if(!s){var t=Date.now()-r,n=parseFloat(t*u);parseFloat(n)&&l(i+n)}H(v(e)),o(Date.now())}};Object(a.useEffect)((function(){return t.current=requestAnimationFrame(h),function(){return cancelAnimationFrame(t.current)}}),[e])}(),function(){function e(e){if("enter"===e.key.toLowerCase()){var t=document.getElementsByClassName("glcanvas"),n=Object(p.a)(t,1)[0].toDataURL("image/png"),a=document.createElement("a");a.href=n,a.setAttribute("download","image.png"),a.click()}}Object(a.useEffect)((function(){return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[])}(),r.a.createElement(r.a.Fragment,null,r.a.createElement("canvas",{className:"glcanvas",width:t.width,height:t.height,onMouseDown:function(e){var t=[e.clientX,e.clientY];l(t)},onMouseUp:function(t){var a=e.viewport.translate.x[1],r=e.viewport.translate.y[1],o=e.viewport.width[1],c=e.viewport.height[1],l=[t.clientX,t.clientY],u=document.getElementsByClassName("glcanvas")[0],s=[u.offsetWidth,u.offsetHeight],f=s[0],m=s[1];if(void 0!==i&&void 0!==l){var v={x1:i[0],x2:l[0],y1:u.offsetHeight-i[1],y2:u.offsetHeight-l[1]};if(!function(e){var t=e.x1,n=e.x2,a=e.y1,r=e.y2,o=Math.abs(t-n),c=Math.abs(a-r);return o<1||c<1}(v)){var h=function(t){var n=t.x,a=t.y,r=document.getElementsByClassName("glcanvas"),o=Object(p.a)(r,1)[0],c=[o.offsetWidth,o.offsetHeight],i=c[0],l=c[1],u=parseFloat(e.viewport.width[0]),s=parseFloat(e.viewport.height[0]),f=s/l;return{x:-u/2+n*(u/i)+parseFloat(e.viewport.translate.x[0]),y:-s/2+a*f+parseFloat(e.viewport.translate.y[0])}}({x:(v.x1+v.x2)/2,y:(v.y1+v.y2)/2});a(h.x),r(h.y);var d=parseFloat(e.viewport.width),g=parseFloat(e.viewport.height),b={width:d*(Math.abs(v.x1-v.x2)/f),height:g*(Math.abs(v.y1-v.y2)/m)};if(!0===n){var x=X(b);o(x.width),c(x.height)}else o(b.width),c(b.height)}}},ref:u}))}function J(e){var t=e.children,n=Object(a.useRef)(),o=W().height,c=function(e,t){var n=Object(a.useState)(!1),r=Object(p.a)(n,2),o=r[0],c=r[1],i=e.current?e.current.getBoundingClientRect().height:0;return Object(a.useEffect)((function(){c(i>=t)}),[i,t]),o}(n,o),i="gui-container ".concat(c?"scrollable":"");return r.a.createElement("ul",{ref:n,style:{height:o},className:i},t)}function q(e){var t=e.title,n=e.children,a=e.startClosed,o=Y(a=!!a),c=Object(p.a)(o,2),i=c[0],l=c[1];return r.a.createElement("li",{className:"folder"},r.a.createElement("div",{className:"group"},r.a.createElement("ul",{className:i?"closed":""},r.a.createElement("li",{className:"title",onClick:l},t),n)))}function V(e){var t=e.type,n=e.label,a=e.name,o=e.tooltip,c=e.id,i=e.value,l=e.onChange;return t=t||"text",a=a||c,n=n||null,o=o||null,r.a.createElement(R,null,n?r.a.createElement(A,{htmlFor:c,text:n,tooltip:o}):null,r.a.createElement("input",{type:t,name:a,id:c,value:i,checked:i,onChange:l,onClick:function(e){e.stopPropagation()}}))}function K(){var e=Object(a.useContext)(f),t=Object(p.a)(e.julia.coefficients,2),n=t[0],o=t[1],c=l("Coefficients");return r.a.createElement(V,{label:"Coefficients",id:c,tooltip:"Comma-seperated values for the coefficients of each polynomial term. <br><br>\n    N values applied in the order Z<sup>n-1</sup> + Z<sup>n-2</sup> + ... + Z, C <br><br>\n    It is recommended to keep the coefficient of the highest term \u22641",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function Z(){var e=Object(a.useContext)(f),t=Object(p.a)(e.julia.c.x,2),n=t[0],o=t[1];return r.a.createElement(V,{label:"X",id:"constantx",tooltip:"X (real) component of the constant point C",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function Q(){var e=Object(a.useContext)(f),t=Object(p.a)(e.julia.c.y,2),n=t[0],o=t[1];return r.a.createElement(V,{label:"Y",id:"constanty",tooltip:"Y (imaginary) component of the constant point C",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function $(){var e=Object(a.useContext)(f),t=Object(p.a)(e.julia.maxIterations,2),n=t[0],o=t[1],c=l("Max Iterations");return r.a.createElement(V,{id:c,label:"Max Iterations",tooltip:"Maximum number of times to iterate a point before it is considered to be part of the bounded set",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function ee(){var e=Object(a.useContext)(f),t=Object(p.a)(e.julia.escapeRadius,2),n=t[0],o=t[1],c=l("Escape Radius");return r.a.createElement(V,{label:"Escape Radius",id:c,tooltip:"When an iterates' magnitude is greater than the square root of this number, consider it as tending towards infinity",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function te(){var e=Object(a.useContext)(f),t=Object(p.a)(e.julia.useSmoothing,2),n=t[0],o=t[1],c=l("Julia smoothing");return r.a.createElement(V,{type:"checkbox",id:c,label:"Julia smoothing",tooltip:"Toggle Julia escape iteration renormalisation. Produces smooth gradients between the boundries of n and n+1 iterations before escape",value:n,onChange:function(e){var t=e.target.checked;o(t)}})}function ne(){var e=Object(a.useContext)(f),t=Object(p.a)(e.time.timeScale,2),n=t[0],o=t[1],c=l("Time Scale");return r.a.createElement(V,{id:c,label:"Time Scale",tooltip:"Scale the speed at which time passes for functions reliant on u_time",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function ae(){var e=Object(a.useContext)(f),t=Object(p.a)(e.viewport.width,2),n=t[0],o=t[1],c=Object(p.a)(e.viewport.height,2),i=c[0],l=c[1],u=Object(p.a)(e.viewport.lockAspectRatio,1)[0];function s(e){var t;switch(e.target.name){case"viewportwidth":var a=e.target.value;t=u?X({width:a,height:i,anchor:"landscape"}):{width:a,height:i},o(t.width),l(t.height);break;case"viewportheight":var r=e.target.value;t=u?X({width:n,height:r,anchor:"portrait"}):{width:n,height:r},o(t.width),l(t.height)}}return r.a.createElement(q,{title:"Dimensions"},r.a.createElement(re,{value:n,onChange:s}),r.a.createElement(oe,{value:i,onChange:s}))}function re(e){var t=e.value,n=e.onChange;return r.a.createElement(V,{label:"Width",id:"viewportwidth",tooltip:"Width of the complex plane",value:t,onChange:n})}function oe(e){var t=e.value,n=e.onChange;return r.a.createElement(V,{label:"Height",id:"viewportheight",tooltip:"Height of the complex plane",value:t,onChange:n})}function ce(){var e=Object(a.useContext)(f),t=Object(p.a)(e.viewport.translate.x,2),n=t[0],o=t[1];return r.a.createElement(V,{label:"X",id:"translatex",tooltip:"Horizontal translation of the complex plane",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function ie(){var e=Object(a.useContext)(f),t=Object(p.a)(e.viewport.translate.y,2),n=t[0],o=t[1];return r.a.createElement(V,{label:"Y",id:"translatey",tooltip:"Vertical translation of the complex plane",value:n,onChange:function(e){var t=e.target.value;o(t)}})}function le(){var e=Object(a.useContext)(f),t=Object(p.a)(e.viewport.lockAspectRatio,2),n=t[0],o=t[1],c="Lock aspect ratio",i=l(c);return r.a.createElement(V,{type:"checkbox",id:i,label:c,tooltip:"Lock the aspect ratio of the complex plane to match that of the canvas",value:n,onChange:function(e){var t=e.target.checked;o(t)}})}function ue(){var e=Object(a.useContext)(f),t=Object(p.a)(e.color.curve,2),n=t[0],o=t[1],c=x[n].name,i=Object.keys(x).map((function(e){return x[e].name})),u=l("Mapping curve");return r.a.createElement(T,{label:"Mapping curve",id:u,tooltip:"Curve used to shape the colour mapping",options:i,value:c,onChange:function(e){var t=e.target.value,n=Object.keys(x).find((function(e){return x[e].name===t}));o(n)}})}function se(){var e=Object(a.useContext)(f),t=Object(p.a)(e.color.colorModel,2),n=t[0],o=t[1],c=E.map((function(e){return e.name})),i=l("Colour model");return r.a.createElement(T,{label:"Colour model",id:i,tooltip:"Colour model used for interpolation between each colour specified in the colour map",options:c,value:n,onChange:function(e){var t=e.target.value;o(t)}})}function fe(){return r.a.createElement("div",null)}function me(e){var t=e.item,n=e.idx,a=e.handleChange,o=t.hex,c="".concat(l("Colour")).concat(n);return r.a.createElement(V,{type:"color",label:"Colour",name:"color",id:c,value:o,onChange:function(e){a(e,n)}})}function ve(e){var t=e.item,n=e.idx,a=e.handleChange,o=t.position,c="".concat(l("Position")).concat(n);return r.a.createElement(V,{type:"text",label:"Position",name:"position",id:c,tooltip:"Value in range [0, 1] representing the colour's position on the colour mapping",value:o,onChange:function(e){a(e,n)}})}function he(e){var t=e.item,n=e.idx,a=e.handleChange;return r.a.createElement(q,{title:"Colour ".concat(n+1)},r.a.createElement(me,{item:t,idx:n,handleChange:a}),r.a.createElement(ve,{item:t,idx:n,handleChange:a}))}function pe(e){var t=e.data,n=e.encoding,a=e.alt,o=e.className;return a=a||"",r.a.createElement("img",{className:o,src:"data:image/".concat(n,";base64,").concat(t),alt:a})}var de=n(13),ge=n.n(de);function be(){var e=function(){var e=Object(a.useContext)(f),t=Object(p.a)(e.color.textureData,1)[0];if(t.length>=4){var n=ge.a.encode(t,O,w,0,[]);return btoa(String.fromCharCode.apply(null,new Uint8Array(n)))}return null}();return null!==e?r.a.createElement(R,null,r.a.createElement(pe,{className:"colormap",data:e,encoding:"png"})):null}function xe(){var e=Object(a.useContext)(f),t=Object(p.a)(e.color.colorPoints,2),n=t[0],o=t[1];function c(e,t){var a=e.target.value,r=n[t],c=function(){switch(e.target.name){case"color":return Object(g.a)({},r,{hex:a});case"position":return Object(g.a)({},r,{position:a});default:return r}}.call(),i=Object(d.a)(n);i[t]=c,o(i)}return r.a.createElement(q,{title:"Colour Points"},r.a.createElement(fe,null),n.map((function(e,t){return r.a.createElement(he,{item:e,key:t,idx:t,handleChange:c})})))}function Ee(e){var t=e.text,n=e.onClick,a=e.className;return t=t||null,r.a.createElement("button",{className:"btn ".concat(a),onClick:n},t)}function je(){var e=Object(a.useContext)(f),t=Object(p.a)(e.time.paused,2),n=t[0],o=t[1],c=n?"Resume":"Pause";return r.a.createElement(R,null,r.a.createElement(Ee,{text:c,onClick:function(){o(!n)},className:"btn-full"}))}function Oe(e){var t=e.value,n=e.onChange;return r.a.createElement(V,{id:"presetname",label:"Preset name",value:t,onChange:n})}function we(e){var t=e.options,n=e.value,a=e.onChange;return r.a.createElement(T,{id:"presetselector",label:"Presets",options:t,value:n,onChange:a})}function Ce(e){var t=e.text;return""!==t?r.a.createElement(R,null,r.a.createElement("span",{className:"error"},t)):null}function ye(e){var t=e.onClick;return r.a.createElement(Ee,{text:"Save",onClick:t,className:"btn-half"})}function Se(e){var t=e.onClick;return r.a.createElement(Ee,{text:"Load",onClick:t,className:"btn-half"})}function Re(e){var t=e.onClickSave,n=e.onClickLoad;return r.a.createElement(R,null,r.a.createElement(ye,{onClick:t}),r.a.createElement(Se,{onClick:n}))}function _e(){var e=localStorage.getItem("presets");return e?JSON.parse(e):[]}function Ae(){var e=Object(a.useContext)(f),t=Object(a.useState)(""),n=Object(p.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(""),l=Object(p.a)(i,2),s=l[0],m=l[1],h=Object(a.useState)([]),d=Object(p.a)(h,2),g=d[0],b=d[1],x=Object(a.useState)(!1),E=Object(p.a)(x,2),j=E[0],O=E[1],w=Object(a.useState)(""),C=Object(p.a)(w,2),y=C[0],S=C[1],R=g.map((function(e){return e.name})).filter((function(e){return void 0!==e}));function _(){var e=_e();b(e)}function A(){S(""),O(!1)}return Object(a.useEffect)((function(){_()}),[]),Object(a.useEffect)((function(){!function(){var e=0!==g.length?g[0].name:"";c(e)}()}),[g]),r.a.createElement(q,{title:"Presets"},r.a.createElement(we,{options:R,value:o||"",onChange:function(e){c(e.target.value),A()}}),r.a.createElement(Oe,{value:s,onChange:function(e){m(e.target.value),A()}}),r.a.createElement(Re,{onClickSave:function(){if(""!==s){if(t=s,_e().filter((function(e){return e.name===t})).length>0){if(!j)return O(!0),void S("Click save again to overwrite existing preset");!function(e){var t=_e().filter((function(t){return t.name!==e}));localStorage.setItem("presets",JSON.stringify(t))}(s)}var t;!function(e){var t=_e();t.push(e),localStorage.setItem("presets",JSON.stringify(t))}(function(e,t){var n=v(t),a=n.julia,r=n.viewport,o=n.color;return{name:e,julia:a,viewport:r,color:{colorPoints:o.colorPoints,curve:o.curve,colorModel:o.colorModel}}}(s,e)),_(),A()}else S("Cannot save without entering a name")},onClickLoad:function(){var t=_e().find((function(e){return e.name===o}));try{delete t.name,function e(t,n){for(var a in t){if(u(n[a]))(0,n[a][1])(t[a]);else e(t[a],n[a])}}(t,e),m(o),A()}catch(n){return}}}),r.a.createElement(Ce,{text:y}))}function Fe(e){var t=e.onClick;return r.a.createElement(R,null,r.a.createElement(Ee,{text:"Toggle Menu",onClick:t,className:"btn-full"}))}function Te(){var e=Y(!1),t=Object(p.a)(e,2),n=t[0],a=t[1];return r.a.createElement(J,null,r.a.createElement(je,null),r.a.createElement(Fe,{onClick:a}),r.a.createElement("div",{style:{display:n?"none":"inherit"}},r.a.createElement(q,{title:"Julia Variables"},r.a.createElement(K,null),r.a.createElement(q,{title:"Constant Point"},r.a.createElement(Z,null),r.a.createElement(Q,null)),r.a.createElement($,null),r.a.createElement(ee,null),r.a.createElement(te,null),r.a.createElement(M,null),r.a.createElement(ne,null)),r.a.createElement(q,{title:"Viewport",startClosed:!0},r.a.createElement(ae,null),r.a.createElement(q,{title:"Translate"},r.a.createElement(ce,null),r.a.createElement(ie,null)),r.a.createElement(le,null)),r.a.createElement(q,{title:"Colour Mapping",startClosed:!0},r.a.createElement(xe,null),r.a.createElement(ue,null),r.a.createElement(se,null),r.a.createElement(be,null)),r.a.createElement(Ae,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null,r.a.createElement(G,null),r.a.createElement(Te,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.a74438ae.chunk.js.map