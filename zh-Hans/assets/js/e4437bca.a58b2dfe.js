(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[2494],{6962:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var n=r(7294),a=r(6010),o=r(7019),l=r(5999),s=r(1002),c=r(9611),i=r(136);function u(){u=function(e,t){return new r(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function r(e,n,a){var o=new RegExp(e,n);return t.set(o,a||t.get(e)),(0,c.Z)(o,r.prototype)}function n(e,r){var n=t.get(r);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return(0,i.Z)(r,RegExp),r.prototype.exec=function(t){var r=e.exec.call(this,t);return r&&(r.groups=n(r,this)),r},r.prototype[Symbol.replace]=function(r,a){if("string"==typeof a){var o=t.get(this);return e[Symbol.replace].call(this,r,a.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+o[t]})))}if("function"==typeof a){var l=this;return e[Symbol.replace].call(this,r,(function(){var e=arguments;return"object"!==(0,s.Z)(e[e.length-1])&&(e=[].slice.call(e)).push(n(e,l)),a.apply(this,e)}))}return e[Symbol.replace].call(this,r,a)},u.apply(this,arguments)}var h=r(195),g=r(6131),f=r(9122),d=r(6767),b=r.n(d),m="colorBlock_rmzj",p="card_MaQJ";function y(e){try{return b()(e),e}catch(o){if(!e.startsWith("#")&&!e.includes(","))return"#"+e;if(/^\d+,\s*\d+,\s*\d+$/.test(e))return"rgb("+e+")";if(/^hsl\(\d+,\s*\d+%?,\s*\d+%?\)$/.test(e)){var t=e.match(u(/^hsl\(([0-9]+),[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([0-9]+%?),[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([0-9]+%?)\)$/,{h:1,s:2,l:3})).groups,r=t.h,n=t.s,a=t.l;return"hsl("+r+", "+(n.endsWith("%")?n:n+"%")+", "+(a.endsWith("%")?a:a+"%")+")"}return e}}function v(){var e=(0,n.useState)("#39cac4"),t=e[0],r=e[1],a=(0,n.useState)({hex:"#39cac4",rgb:"rgb(57, 202, 196)",hsl:"hsl(177.5, 57.8%, 50.8%)"}),o=a[0],l=a[1],s=(0,n.useState)(!0),c=s[0],i=s[1],u=(0,n.useState)([57,202,196,1]),d=u[0],v=u[1],w=(0,n.useState)([177.5,57.8,50.8,1]),k=w[0],x=w[1];function M(e){l({hex:e.hex(),rgb:e.rgb().string(),hsl:e.hsl().string()}),i(!0)}return(0,n.useEffect)((function(){try{M(b()(y(t)))}catch(e){i(!1)}}),[t]),(0,n.useEffect)((function(){var e=b().rgb(d);r(e.rgb().string()),M(e)}),[d]),(0,n.useEffect)((function(){var e=b().hsl(k);r(e.hsl().string()),M(e)}),[k]),n.createElement("div",{className:p},n.createElement("div",null,n.createElement(g.Z,{error:!c,value:t,variant:"outlined",onChange:function(e){return r(e.target.value)}})),n.createElement("div",{className:"center",style:{display:"flex"}},n.createElement("div",{className:"margin-top--md",style:{flex:1}},n.createElement("div",{className:m,style:{backgroundColor:y(t)}})),n.createElement("div",{className:"margin-top--md",style:{flex:2,textAlign:"left"}},Object.keys(o).map((function(e,t){return n.createElement("div",{style:{cursor:"pointer"},role:"button",key:t,onClick:function(){return(0,h.Z)(o[e])}},e,": ",n.createElement("code",null,o[e]))})))),n.createElement("div",{style:{display:"flex"}},n.createElement("div",{className:"margin--md",style:{flex:1}},b()(o.rgb).rgb().array().map((function(e,t){var r=["R","G","B","A"][t],a=[255,255,255,1][t],l=b()(o.rgb).rgb().array(),s=l[0],c=l[1],i=l[2],u=0===t?"linear-gradient(90deg, rgb(0,"+c+","+i+"), rgb(255,"+c+","+i+"))":1===t?"linear-gradient(90deg, rgb("+s+",0,"+i+"), rgb("+s+",255,"+i+"))":"linear-gradient(90deg, rgb("+s+","+c+",0), rgb("+s+","+c+",255))";return n.createElement("div",null,n.createElement("div",{style:{display:"flex"}},n.createElement("div",{id:"slider-"+r,style:{marginRight:8}},r),n.createElement("div",{style:{flexGrow:100}},n.createElement(f.Z,{id:"slider-"+r,key:t,value:e,min:0,max:a,onChange:function(e,r){var n;return v(Object.assign([],d,((n={})[t]=r,n)))}}))),n.createElement("div",{style:{height:10,backgroundImage:u}}))}))),n.createElement("div",{className:"margin--md",style:{flex:1}},b()(o.hsl).hsl().array().map((function(e,t){var r=["H","S","L","A"][t],a=[359,100,100,1][t],l=b()(o.hsl).hsl().array();l[0],l[1],l[2];return n.createElement("div",{style:{display:"flex"}},n.createElement("div",{style:{flexGrow:100}},n.createElement(f.Z,{id:"slider-"+r,key:t,value:e,min:0,max:a,onChange:function(e,r){var n;return x(Object.assign([],k,((n={})[t]=r,n)))}})),n.createElement("div",{id:"slider-"+r,style:{marginLeft:8}},r))})))))}function w(){return n.createElement(o.Z,{title:"Color converter",description:"A color converter between different models; provides nice visuals"},n.createElement("main",null,n.createElement("div",{className:(0,a.Z)("container margin-vert--lg text--center")},n.createElement("h1",null,n.createElement(l.Z,{id:"colorConvert.title"},"Color converter [WIP]")),n.createElement(v,null))))}},8168:function(e,t,r){const n=r(8874),a={};for(const l of Object.keys(n))a[n[l]]=l;const o={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};e.exports=o;for(const l of Object.keys(o)){if(!("channels"in o[l]))throw new Error("missing channels property: "+l);if(!("labels"in o[l]))throw new Error("missing channel labels property: "+l);if(o[l].labels.length!==o[l].channels)throw new Error("channel and label counts mismatch: "+l);const{channels:e,labels:t}=o[l];delete o[l].channels,delete o[l].labels,Object.defineProperty(o[l],"channels",{value:e}),Object.defineProperty(o[l],"labels",{value:t})}o.rgb.hsl=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(t,r,n),o=Math.max(t,r,n),l=o-a;let s,c;o===a?s=0:t===o?s=(r-n)/l:r===o?s=2+(n-t)/l:n===o&&(s=4+(t-r)/l),s=Math.min(60*s,360),s<0&&(s+=360);const i=(a+o)/2;return c=o===a?0:i<=.5?l/(o+a):l/(2-o-a),[s,100*c,100*i]},o.rgb.hsv=function(e){let t,r,n,a,o;const l=e[0]/255,s=e[1]/255,c=e[2]/255,i=Math.max(l,s,c),u=i-Math.min(l,s,c),h=function(e){return(i-e)/6/u+.5};return 0===u?(a=0,o=0):(o=u/i,t=h(l),r=h(s),n=h(c),l===i?a=n-r:s===i?a=1/3+t-n:c===i&&(a=2/3+r-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*i]},o.rgb.hwb=function(e){const t=e[0],r=e[1];let n=e[2];const a=o.rgb.hsl(e)[0],l=1/255*Math.min(t,Math.min(r,n));return n=1-1/255*Math.max(t,Math.max(r,n)),[a,100*l,100*n]},o.rgb.cmyk=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.min(1-t,1-r,1-n);return[100*((1-t-a)/(1-a)||0),100*((1-r-a)/(1-a)||0),100*((1-n-a)/(1-a)||0),100*a]},o.rgb.keyword=function(e){const t=a[e];if(t)return t;let r,o=1/0;for(const a of Object.keys(n)){const t=n[a],c=(s=t,((l=e)[0]-s[0])**2+(l[1]-s[1])**2+(l[2]-s[2])**2);c<o&&(o=c,r=a)}var l,s;return r},o.keyword.rgb=function(e){return n[e]},o.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,n=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92;return[100*(.4124*t+.3576*r+.1805*n),100*(.2126*t+.7152*r+.0722*n),100*(.0193*t+.1192*r+.9505*n)]},o.rgb.lab=function(e){const t=o.rgb.xyz(e);let r=t[0],n=t[1],a=t[2];r/=95.047,n/=100,a/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;return[116*n-16,500*(r-n),200*(n-a)]},o.hsl.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;let a,o,l;if(0===r)return l=255*n,[l,l,l];a=n<.5?n*(1+r):n+r-n*r;const s=2*n-a,c=[0,0,0];for(let i=0;i<3;i++)o=t+1/3*-(i-1),o<0&&o++,o>1&&o--,l=6*o<1?s+6*(a-s)*o:2*o<1?a:3*o<2?s+(a-s)*(2/3-o)*6:s,c[i]=255*l;return c},o.hsl.hsv=function(e){const t=e[0];let r=e[1]/100,n=e[2]/100,a=r;const o=Math.max(n,.01);n*=2,r*=n<=1?n:2-n,a*=o<=1?o:2-o;return[t,100*(0===n?2*a/(o+a):2*r/(n+r)),100*((n+r)/2)]},o.hsv.rgb=function(e){const t=e[0]/60,r=e[1]/100;let n=e[2]/100;const a=Math.floor(t)%6,o=t-Math.floor(t),l=255*n*(1-r),s=255*n*(1-r*o),c=255*n*(1-r*(1-o));switch(n*=255,a){case 0:return[n,c,l];case 1:return[s,n,l];case 2:return[l,n,c];case 3:return[l,s,n];case 4:return[c,l,n];case 5:return[n,l,s]}},o.hsv.hsl=function(e){const t=e[0],r=e[1]/100,n=e[2]/100,a=Math.max(n,.01);let o,l;l=(2-r)*n;const s=(2-r)*a;return o=r*a,o/=s<=1?s:2-s,o=o||0,l/=2,[t,100*o,100*l]},o.hwb.rgb=function(e){const t=e[0]/360;let r=e[1]/100,n=e[2]/100;const a=r+n;let o;a>1&&(r/=a,n/=a);const l=Math.floor(6*t),s=1-n;o=6*t-l,0!=(1&l)&&(o=1-o);const c=r+o*(s-r);let i,u,h;switch(l){default:case 6:case 0:i=s,u=c,h=r;break;case 1:i=c,u=s,h=r;break;case 2:i=r,u=s,h=c;break;case 3:i=r,u=c,h=s;break;case 4:i=c,u=r,h=s;break;case 5:i=s,u=r,h=c}return[255*i,255*u,255*h]},o.cmyk.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100,a=e[3]/100;return[255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,r*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]},o.xyz.rgb=function(e){const t=e[0]/100,r=e[1]/100,n=e[2]/100;let a,o,l;return a=3.2406*t+-1.5372*r+-.4986*n,o=-.9689*t+1.8758*r+.0415*n,l=.0557*t+-.204*r+1.057*n,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,l=l>.0031308?1.055*l**(1/2.4)-.055:12.92*l,a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),l=Math.min(Math.max(0,l),1),[255*a,255*o,255*l]},o.xyz.lab=function(e){let t=e[0],r=e[1],n=e[2];t/=95.047,r/=100,n/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,n=n>.008856?n**(1/3):7.787*n+16/116;return[116*r-16,500*(t-r),200*(r-n)]},o.lab.xyz=function(e){let t,r,n;r=(e[0]+16)/116,t=e[1]/500+r,n=r-e[2]/200;const a=r**3,o=t**3,l=n**3;return r=a>.008856?a:(r-16/116)/7.787,t=o>.008856?o:(t-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,t*=95.047,r*=100,n*=108.883,[t,r,n]},o.lab.lch=function(e){const t=e[0],r=e[1],n=e[2];let a;a=360*Math.atan2(n,r)/2/Math.PI,a<0&&(a+=360);return[t,Math.sqrt(r*r+n*n),a]},o.lch.lab=function(e){const t=e[0],r=e[1],n=e[2]/360*2*Math.PI;return[t,r*Math.cos(n),r*Math.sin(n)]},o.rgb.ansi16=function(e,t=null){const[r,n,a]=e;let l=null===t?o.rgb.hsv(e)[2]:t;if(l=Math.round(l/50),0===l)return 30;let s=30+(Math.round(a/255)<<2|Math.round(n/255)<<1|Math.round(r/255));return 2===l&&(s+=60),s},o.hsv.ansi16=function(e){return o.rgb.ansi16(o.hsv.rgb(e),e[2])},o.rgb.ansi256=function(e){const t=e[0],r=e[1],n=e[2];if(t===r&&r===n)return t<8?16:t>248?231:Math.round((t-8)/247*24)+232;return 16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(n/255*5)},o.ansi16.rgb=function(e){let t=e%10;if(0===t||7===t)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const r=.5*(1+~~(e>50));return[(1&t)*r*255,(t>>1&1)*r*255,(t>>2&1)*r*255]},o.ansi256.rgb=function(e){if(e>=232){const t=10*(e-232)+8;return[t,t,t]}let t;e-=16;return[Math.floor(e/36)/5*255,Math.floor((t=e%36)/6)/5*255,t%6/5*255]},o.rgb.hex=function(e){const t=(((255&Math.round(e[0]))<<16)+((255&Math.round(e[1]))<<8)+(255&Math.round(e[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},o.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];3===t[0].length&&(r=r.split("").map((e=>e+e)).join(""));const n=parseInt(r,16);return[n>>16&255,n>>8&255,255&n]},o.rgb.hcg=function(e){const t=e[0]/255,r=e[1]/255,n=e[2]/255,a=Math.max(Math.max(t,r),n),o=Math.min(Math.min(t,r),n),l=a-o;let s,c;return s=l<1?o/(1-l):0,c=l<=0?0:a===t?(r-n)/l%6:a===r?2+(n-t)/l:4+(t-r)/l,c/=6,c%=1,[360*c,100*l,100*s]},o.hsl.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=r<.5?2*t*r:2*t*(1-r);let a=0;return n<1&&(a=(r-.5*n)/(1-n)),[e[0],100*n,100*a]},o.hsv.hcg=function(e){const t=e[1]/100,r=e[2]/100,n=t*r;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},o.hcg.rgb=function(e){const t=e[0]/360,r=e[1]/100,n=e[2]/100;if(0===r)return[255*n,255*n,255*n];const a=[0,0,0],o=t%1*6,l=o%1,s=1-l;let c=0;switch(Math.floor(o)){case 0:a[0]=1,a[1]=l,a[2]=0;break;case 1:a[0]=s,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=l;break;case 3:a[0]=0,a[1]=s,a[2]=1;break;case 4:a[0]=l,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=s}return c=(1-r)*n,[255*(r*a[0]+c),255*(r*a[1]+c),255*(r*a[2]+c)]},o.hcg.hsv=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);let n=0;return r>0&&(n=t/r),[e[0],100*n,100*r]},o.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let n=0;return r>0&&r<.5?n=t/(2*r):r>=.5&&r<1&&(n=t/(2*(1-r))),[e[0],100*n,100*r]},o.hcg.hwb=function(e){const t=e[1]/100,r=t+e[2]/100*(1-t);return[e[0],100*(r-t),100*(1-r)]},o.hwb.hcg=function(e){const t=e[1]/100,r=1-e[2]/100,n=r-t;let a=0;return n<1&&(a=(r-n)/(1-n)),[e[0],100*n,100*a]},o.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},o.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},o.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},o.gray.hsl=function(e){return[0,0,e[0]]},o.gray.hsv=o.gray.hsl,o.gray.hwb=function(e){return[0,100,e[0]]},o.gray.cmyk=function(e){return[0,0,0,e[0]]},o.gray.lab=function(e){return[e[0],0,0]},o.gray.hex=function(e){const t=255&Math.round(e[0]/100*255),r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},o.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}},2085:function(e,t,r){const n=r(8168),a=r(4111),o={};Object.keys(n).forEach((e=>{o[e]={},Object.defineProperty(o[e],"channels",{value:n[e].channels}),Object.defineProperty(o[e],"labels",{value:n[e].labels});const t=a(e);Object.keys(t).forEach((r=>{const n=t[r];o[e][r]=function(e){const t=function(...t){const r=t[0];if(null==r)return r;r.length>1&&(t=r);const n=e(t);if("object"==typeof n)for(let e=n.length,a=0;a<e;a++)n[a]=Math.round(n[a]);return n};return"conversion"in e&&(t.conversion=e.conversion),t}(n),o[e][r].raw=function(e){const t=function(...t){const r=t[0];return null==r?r:(r.length>1&&(t=r),e(t))};return"conversion"in e&&(t.conversion=e.conversion),t}(n)}))})),e.exports=o},4111:function(e,t,r){const n=r(8168);function a(e){const t=function(){const e={},t=Object.keys(n);for(let r=t.length,n=0;n<r;n++)e[t[n]]={distance:-1,parent:null};return e}(),r=[e];for(t[e].distance=0;r.length;){const e=r.pop(),a=Object.keys(n[e]);for(let n=a.length,o=0;o<n;o++){const n=a[o],l=t[n];-1===l.distance&&(l.distance=t[e].distance+1,l.parent=e,r.unshift(n))}}return t}function o(e,t){return function(r){return t(e(r))}}function l(e,t){const r=[t[e].parent,e];let a=n[t[e].parent][e],l=t[e].parent;for(;t[l].parent;)r.unshift(t[l].parent),a=o(n[t[l].parent][l],a),l=t[l].parent;return a.conversion=r,a}e.exports=function(e){const t=a(e),r={},n=Object.keys(t);for(let a=n.length,o=0;o<a;o++){const e=n[o];null!==t[e].parent&&(r[e]=l(e,t))}return r}},8874:function(e){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},9818:function(e,t,r){var n=r(8874),a=r(6851),o=Object.hasOwnProperty,l={};for(var s in n)o.call(n,s)&&(l[n[s]]=s);var c=e.exports={to:{},get:{}};function i(e,t,r){return Math.min(Math.max(t,e),r)}function u(e){var t=Math.round(e).toString(16).toUpperCase();return t.length<2?"0"+t:t}c.get=function(e){var t,r;switch(e.substring(0,3).toLowerCase()){case"hsl":t=c.get.hsl(e),r="hsl";break;case"hwb":t=c.get.hwb(e),r="hwb";break;default:t=c.get.rgb(e),r="rgb"}return t?{model:r,value:t}:null},c.get.rgb=function(e){if(!e)return null;var t,r,a,l=[0,0,0,1];if(t=e.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=t[2],t=t[1],r=0;r<3;r++){var s=2*r;l[r]=parseInt(t.slice(s,s+2),16)}a&&(l[3]=parseInt(a,16)/255)}else if(t=e.match(/^#([a-f0-9]{3,4})$/i)){for(a=(t=t[1])[3],r=0;r<3;r++)l[r]=parseInt(t[r]+t[r],16);a&&(l[3]=parseInt(a+a,16)/255)}else if(t=e.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(r=0;r<3;r++)l[r]=parseInt(t[r+1],0);t[4]&&(t[5]?l[3]=.01*parseFloat(t[4]):l[3]=parseFloat(t[4]))}else{if(!(t=e.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(t=e.match(/^(\w+)$/))?"transparent"===t[1]?[0,0,0,0]:o.call(n,t[1])?((l=n[t[1]])[3]=1,l):null:null;for(r=0;r<3;r++)l[r]=Math.round(2.55*parseFloat(t[r+1]));t[4]&&(t[5]?l[3]=.01*parseFloat(t[4]):l[3]=parseFloat(t[4]))}for(r=0;r<3;r++)l[r]=i(l[r],0,255);return l[3]=i(l[3],0,1),l},c.get.hsl=function(e){if(!e)return null;var t=e.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,i(parseFloat(t[2]),0,100),i(parseFloat(t[3]),0,100),i(isNaN(r)?1:r,0,1)]}return null},c.get.hwb=function(e){if(!e)return null;var t=e.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(t){var r=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,i(parseFloat(t[2]),0,100),i(parseFloat(t[3]),0,100),i(isNaN(r)?1:r,0,1)]}return null},c.to.hex=function(){var e=a(arguments);return"#"+u(e[0])+u(e[1])+u(e[2])+(e[3]<1?u(Math.round(255*e[3])):"")},c.to.rgb=function(){var e=a(arguments);return e.length<4||1===e[3]?"rgb("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+")":"rgba("+Math.round(e[0])+", "+Math.round(e[1])+", "+Math.round(e[2])+", "+e[3]+")"},c.to.rgb.percent=function(){var e=a(arguments),t=Math.round(e[0]/255*100),r=Math.round(e[1]/255*100),n=Math.round(e[2]/255*100);return e.length<4||1===e[3]?"rgb("+t+"%, "+r+"%, "+n+"%)":"rgba("+t+"%, "+r+"%, "+n+"%, "+e[3]+")"},c.to.hsl=function(){var e=a(arguments);return e.length<4||1===e[3]?"hsl("+e[0]+", "+e[1]+"%, "+e[2]+"%)":"hsla("+e[0]+", "+e[1]+"%, "+e[2]+"%, "+e[3]+")"},c.to.hwb=function(){var e=a(arguments),t="";return e.length>=4&&1!==e[3]&&(t=", "+e[3]),"hwb("+e[0]+", "+e[1]+"%, "+e[2]+"%"+t+")"},c.to.keyword=function(e){return l[e.slice(0,3)]}},6767:function(e,t,r){const n=r(9818),a=r(2085),o=[].slice,l=["keyword","gray","hex"],s={};for(const d of Object.keys(a))s[o.call(a[d].labels).sort().join("")]=d;const c={};function i(e,t){if(!(this instanceof i))return new i(e,t);if(t&&t in l&&(t=null),t&&!(t in a))throw new Error("Unknown model: "+t);let r,u;if(null==e)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(e instanceof i)this.model=e.model,this.color=e.color.slice(),this.valpha=e.valpha;else if("string"==typeof e){const t=n.get(e);if(null===t)throw new Error("Unable to parse color from string: "+e);this.model=t.model,u=a[this.model].channels,this.color=t.value.slice(0,u),this.valpha="number"==typeof t.value[u]?t.value[u]:1}else if(e.length>0){this.model=t||"rgb",u=a[this.model].channels;const r=o.call(e,0,u);this.color=f(r,u),this.valpha="number"==typeof e[u]?e[u]:1}else if("number"==typeof e)this.model="rgb",this.color=[e>>16&255,e>>8&255,255&e],this.valpha=1;else{this.valpha=1;const t=Object.keys(e);"alpha"in e&&(t.splice(t.indexOf("alpha"),1),this.valpha="number"==typeof e.alpha?e.alpha:0);const n=t.sort().join("");if(!(n in s))throw new Error("Unable to parse color from object: "+JSON.stringify(e));this.model=s[n];const o=a[this.model].labels,l=[];for(r=0;r<o.length;r++)l.push(e[o[r]]);this.color=f(l)}if(c[this.model])for(u=a[this.model].channels,r=0;r<u;r++){const e=c[this.model][r];e&&(this.color[r]=e(this.color[r]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}i.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(e){let t=this.model in n.to?this:this.rgb();t=t.round("number"==typeof e?e:1);const r=1===t.valpha?t.color:t.color.concat(this.valpha);return n.to[t.model](r)},percentString(e){const t=this.rgb().round("number"==typeof e?e:1),r=1===t.valpha?t.color:t.color.concat(this.valpha);return n.to.rgb.percent(r)},array(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object(){const e={},t=a[this.model].channels,r=a[this.model].labels;for(let n=0;n<t;n++)e[r[n]]=this.color[n];return 1!==this.valpha&&(e.alpha=this.valpha),e},unitArray(){const e=this.rgb().color;return e[0]/=255,e[1]/=255,e[2]/=255,1!==this.valpha&&e.push(this.valpha),e},unitObject(){const e=this.rgb().object();return e.r/=255,e.g/=255,e.b/=255,1!==this.valpha&&(e.alpha=this.valpha),e},round(e){return e=Math.max(e||0,0),new i(this.color.map(function(e){return function(t){return function(e,t){return Number(e.toFixed(t))}(t,e)}}(e)).concat(this.valpha),this.model)},alpha(e){return arguments.length>0?new i(this.color.concat(Math.max(0,Math.min(1,e))),this.model):this.valpha},red:u("rgb",0,h(255)),green:u("rgb",1,h(255)),blue:u("rgb",2,h(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,(e=>(e%360+360)%360)),saturationl:u("hsl",1,h(100)),lightness:u("hsl",2,h(100)),saturationv:u("hsv",1,h(100)),value:u("hsv",2,h(100)),chroma:u("hcg",1,h(100)),gray:u("hcg",2,h(100)),white:u("hwb",1,h(100)),wblack:u("hwb",2,h(100)),cyan:u("cmyk",0,h(100)),magenta:u("cmyk",1,h(100)),yellow:u("cmyk",2,h(100)),black:u("cmyk",3,h(100)),x:u("xyz",0,h(100)),y:u("xyz",1,h(100)),z:u("xyz",2,h(100)),l:u("lab",0,h(100)),a:u("lab",1),b:u("lab",2),keyword(e){return arguments.length>0?new i(e):a[this.model].keyword(this.color)},hex(e){return arguments.length>0?new i(e):n.to.hex(this.rgb().round().color)},rgbNumber(){const e=this.rgb().color;return(255&e[0])<<16|(255&e[1])<<8|255&e[2]},luminosity(){const e=this.rgb().color,t=[];for(const[r,n]of e.entries()){const e=n/255;t[r]=e<=.03928?e/12.92:((e+.055)/1.055)**2.4}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast(e){const t=this.luminosity(),r=e.luminosity();return t>r?(t+.05)/(r+.05):(r+.05)/(t+.05)},level(e){const t=this.contrast(e);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark(){const e=this.rgb().color;return(299*e[0]+587*e[1]+114*e[2])/1e3<128},isLight(){return!this.isDark()},negate(){const e=this.rgb();for(let t=0;t<3;t++)e.color[t]=255-e.color[t];return e},lighten(e){const t=this.hsl();return t.color[2]+=t.color[2]*e,t},darken(e){const t=this.hsl();return t.color[2]-=t.color[2]*e,t},saturate(e){const t=this.hsl();return t.color[1]+=t.color[1]*e,t},desaturate(e){const t=this.hsl();return t.color[1]-=t.color[1]*e,t},whiten(e){const t=this.hwb();return t.color[1]+=t.color[1]*e,t},blacken(e){const t=this.hwb();return t.color[2]+=t.color[2]*e,t},grayscale(){const e=this.rgb().color,t=.3*e[0]+.59*e[1]+.11*e[2];return i.rgb(t,t,t)},fade(e){return this.alpha(this.valpha-this.valpha*e)},opaquer(e){return this.alpha(this.valpha+this.valpha*e)},rotate(e){const t=this.hsl();let r=t.color[0];return r=(r+e)%360,r=r<0?360+r:r,t.color[0]=r,t},mix(e,t){if(!e||!e.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof e);const r=e.rgb(),n=this.rgb(),a=void 0===t?.5:t,o=2*a-1,l=r.alpha()-n.alpha(),s=((o*l==-1?o:(o+l)/(1+o*l))+1)/2,c=1-s;return i.rgb(s*r.red()+c*n.red(),s*r.green()+c*n.green(),s*r.blue()+c*n.blue(),r.alpha()*a+n.alpha()*(1-a))}};for(const d of Object.keys(a)){if(l.includes(d))continue;const e=a[d].channels;i.prototype[d]=function(){if(this.model===d)return new i(this);if(arguments.length>0)return new i(arguments,d);const t="number"==typeof arguments[e]?e:this.valpha;return new i(g(a[this.model][d].raw(this.color)).concat(t),d)},i[d]=function(t){return"number"==typeof t&&(t=f(o.call(arguments),e)),new i(t,d)}}function u(e,t,r){e=Array.isArray(e)?e:[e];for(const n of e)(c[n]||(c[n]=[]))[t]=r;return e=e[0],function(n){let a;return arguments.length>0?(r&&(n=r(n)),a=this[e](),a.color[t]=n,a):(a=this[e]().color[t],r&&(a=r(a)),a)}}function h(e){return function(t){return Math.max(0,Math.min(e,t))}}function g(e){return Array.isArray(e)?e:[e]}function f(e,t){for(let r=0;r<t;r++)"number"!=typeof e[r]&&(e[r]=0);return e}e.exports=i},5171:function(e){e.exports=function(e){return!(!e||"string"==typeof e)&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))}},6851:function(e,t,r){"use strict";var n=r(5171),a=Array.prototype.concat,o=Array.prototype.slice,l=e.exports=function(e){for(var t=[],r=0,l=e.length;r<l;r++){var s=e[r];n(s)?t=a.call(t,o.call(s)):t.push(s)}return t};l.wrap=function(e){return function(){return e(l(arguments))}}},195:function(e,t,r){"use strict";function n(e,t){var r=(void 0===t?{}:t).target,n=void 0===r?document.body:r,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var l=document.getSelection(),s=!1;l.rangeCount>0&&(s=l.getRangeAt(0)),n.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(i){}return a.remove(),s&&(l.removeAllRanges(),l.addRange(s)),o&&o.focus(),c}r.d(t,{Z:function(){return n}})}}]);