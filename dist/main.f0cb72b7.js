parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#html"),r=document.querySelector("#style"),e=0,d="/*你好,我叫小张,\n*接下来我演示一下我的项目,\n*首先是一个方框\n*/\nbody{\n    color: #000;\n}\n/*\n*接下来我要开始制作一个八卦图了,\n*看好了\n**/\n#div1{\n    border:1px solid red;\n    width:200px;\n    height:200px;\n}\n/*接下来变成一个圆形\n*加上一点的阴影\n*/\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 3px rgba(34,0,0,0.3);\n    border:none;\n}\n/*八卦是阴阳现成的的\n*一黑一白\n*/\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n/*加两个神秘的球*/\n#div1::before{\n    width:100px;\n    height:100px;\n    // border:1px solid red;\n    top:0px;\n    left:50%;\n    transform:translateX(-50%);\n    border-radius:50%;\n    background:#FFF;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n#div1::after{\n    width:100px;\n    height:100px;\n    // border:1px solid red;\n    bottom:0px;\n    left:50%;\n    transform:translateX(-50%);\n    border-radius:50%;\n    // background:#000;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);\n\n}\n\n",a="",o=function o(){setTimeout(function(){"\n"===d[e]&&(a+="<br>")," "===d[e]?a+="&nbsp":a+=d[e],window.scrollTo(0,999900),n.scrollTo(0,999900),n.innerHTML=a,r.innerHTML=d.substring(0,e),e<d.length-1&&(e+=1,o())},1)};o();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.f0cb72b7.js.map