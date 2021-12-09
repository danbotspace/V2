"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[3663],{3905:function(e,a,t){t.d(a,{Zo:function(){return o},kt:function(){return N}});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),u=l(t),N=s,k=u["".concat(i,".").concat(N)]||u[N]||c[N]||r;return t?n.createElement(k,m(m({ref:a},o),{},{components:t})):n.createElement(k,m({ref:a},o))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:s,m[1]=p;for(var l=2;l<r;l++)m[l]=t[l];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3517:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return o},toc:function(){return c},default:function(){return N}});var n=t(7462),s=t(3366),r=(t(7294),t(3905)),m=["components"],p={title:"Random thoughts on a new programming language",authors:"joshcena",tags:["compiler"]},i=void 0,l={permalink:"/blog/2021/04/25/lang",source:"@site/blog/2021-04-25-lang.mdx",title:"Random thoughts on a new programming language",description:"I'm just putting together some random thoughts that I wish to turn into a new programming language. These are notations I often use in comments for C++ algorithms. A lot of the syntax may have been realized by mathematical languages like Mathematica or Python.",date:"2021-04-25T00:00:00.000Z",formattedDate:"April 25, 2021",tags:[{label:"compiler",permalink:"/blog/tags/compiler"}],readingTime:4,truncated:!0,authors:[{name:"Joshua Chen",url:"https://github.com/Josh-Cena",imageURL:"https://github.com/Josh-Cena.png",key:"joshcena"}],prevItem:{title:"Champions league reached!",permalink:"/blog/2021/04/26/champion"},nextItem:{title:"A thousand words with Zhi",permalink:"/blog/2021/04/01/zhi"}},o={authorsImageUrls:[void 0]},c=[{value:"Data types",id:"data-types",children:[],level:2},{value:"Arithmetic",id:"arithmetic",children:[],level:2},{value:"Declaring sequences",id:"declaring-sequences",children:[],level:2},{value:"Iterating sequences",id:"iterating-sequences",children:[],level:2},{value:"Matrix operations",id:"matrix-operations",children:[],level:2},{value:"Expressions",id:"expressions",children:[],level:2},{value:"Mathematical functions",id:"mathematical-functions",children:[],level:2},{value:"Immutability",id:"immutability",children:[],level:2}],u={toc:c};function N(e){var a=e.components,t=(0,s.Z)(e,m);return(0,r.kt)("wrapper",(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I'm just putting together some random thoughts that I wish to turn into a new programming language. These are notations I often use in comments for C++ algorithms. A lot of the syntax may have been realized by mathematical languages like Mathematica or Python."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Update"),": I've created a repo \ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/jc-verse/caroline"},"https://github.com/jc-verse/caroline")," \ud83d\udc48 and it has changed ",(0,r.kt)("strong",{parentName:"p"},"a lot")," from my design below. Feel free to star & follow the latest progress of this language!"),(0,r.kt)("h2",{id:"data-types"},"Data types"),(0,r.kt)("p",null,"This is a language mainly used for algorithms and maths. The data types are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Number")," ",(0,r.kt)("inlineCode",{parentName:"li"},"-1.6"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"1/3"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Boolean")," ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"String")," ",(0,r.kt)("inlineCode",{parentName:"li"},'"Hello"'),";"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Set")," ",(0,r.kt)("inlineCode",{parentName:"li"},"{1, 2, 3}")," (no duplicate value; no order);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Matrix")," ",(0,r.kt)("inlineCode",{parentName:"li"},"((1, 2, 3), (4, 5, 6))")," (supports matrix operations; vectors are special names for n\xd71 or 1\xd7n matrices);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Function"),".")),(0,r.kt)("h2",{id:"arithmetic"},"Arithmetic"),(0,r.kt)("p",null,"Apart from the typical integer and decimal types, number types also include ",(0,r.kt)("strong",{parentName:"p"},"fractions"),", ",(0,r.kt)("strong",{parentName:"p"},"irrational numbers"),", and ",(0,r.kt)("strong",{parentName:"p"},"complex numbers"),". The special number ",(0,r.kt)("inlineCode",{parentName:"p"},"infty")," is used for sequence and function limits, as well as the result of division by zero."),(0,r.kt)("p",null,"Since fractions preserve more precision than decimals, whenever a fraction is involved in an expression, the result will be a fraction. Integers are special fractions with denominator of 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"num a := 1.6;\nnum b := 1/3;\nnum c := a * b; // c = 8/15\nnum d := 1.6 / 3; // d = 8/15\n")),(0,r.kt)("p",null,"Some operations are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Addition: ",(0,r.kt)("inlineCode",{parentName:"li"},"+"),";"),(0,r.kt)("li",{parentName:"ul"},"Subtraction: ",(0,r.kt)("inlineCode",{parentName:"li"},"-"),";"),(0,r.kt)("li",{parentName:"ul"},"Multiplication: ",(0,r.kt)("inlineCode",{parentName:"li"},"*"),";"),(0,r.kt)("li",{parentName:"ul"},"Division: ",(0,r.kt)("inlineCode",{parentName:"li"},"/"),";"),(0,r.kt)("li",{parentName:"ul"},"Exponentiation: ",(0,r.kt)("inlineCode",{parentName:"li"},"^"),";"),(0,r.kt)("li",{parentName:"ul"},"Assignment: ",(0,r.kt)("inlineCode",{parentName:"li"},":="),";"),(0,r.kt)("li",{parentName:"ul"},"Equality: ",(0,r.kt)("inlineCode",{parentName:"li"},"="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"=="),";"),(0,r.kt)("li",{parentName:"ul"},"Inequality: ",(0,r.kt)("inlineCode",{parentName:"li"},">"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,r.kt)("inlineCode",{parentName:"li"},">="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<="),", ",(0,r.kt)("inlineCode",{parentName:"li"},"!="),".")),(0,r.kt)("p",null,"Any function with two parameters can be used as a binary operator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"squaresum := (num a, num b) => a^2 + b^2;\n\nnum c := 1 squaresum 2; // c = 5\n")),(0,r.kt)("p",null,"A number literal followed by a variable is infered to be a multiplication."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"num x := 2;\nnum a := 3x^2 + 2x + 1; // a = 17\n")),(0,r.kt)("h2",{id:"declaring-sequences"},"Declaring sequences"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"seq a := i => i^2; // a = 0, 1, 4, 9, 16, ...\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sequences are functions.")," More specifically, a sequence is defined as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"type seq := (num) => T;\n")),(0,r.kt)("p",null,"where the only parameter is the subscript. Unlike vectors, sequences contain an infinite number of items. ",(0,r.kt)("inlineCode",{parentName:"p"},"a_i")," is just a syntax sugar to ",(0,r.kt)("inlineCode",{parentName:"p"},"a(i)")," as in a function. For collections of finite number of objects, use vectors."),(0,r.kt)("h2",{id:"iterating-sequences"},"Iterating sequences"),(0,r.kt)("p",null,"The syntax ",(0,r.kt)("inlineCode",{parentName:"p"},"i...j")," returns an iterator from ",(0,r.kt)("inlineCode",{parentName:"p"},"i")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"j"),", inclusive. This is akin to ",(0,r.kt)("inlineCode",{parentName:"p"},"range(i, j)")," in Python."),(0,r.kt)("p",null,"When an iterator is used in the index, it also returns an iterator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"seq a := i => i;\nfor (k in a_(1...3)) {\n    print(k); // Out: 1 2 3\n}\n")),(0,r.kt)("h2",{id:"matrix-operations"},"Matrix operations"),(0,r.kt)("p",null,"Any typical matrix operation is supported. Moreover mathematical functions treat square matrices the same as numbers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"mat a := ((1, 2, 3), (4, 5, 6), (7, 8, 9));\nmat b := cos(a);\n/**\nb = (( 0.38017732968947, \u22120.3738301457419 , \u22120.12783762117329),\n     (\u22120.53120649276402,  0.39010533372492, \u22120.68858283978612),\n     (\u22120.44259031521749, \u22120.84595918680825, \u22120.24932805839901))\n*/\n")),(0,r.kt)("h2",{id:"expressions"},"Expressions"),(0,r.kt)("p",null,"Expressions are syntax sugars for functions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"type expr := (...T) => T;\n")),(0,r.kt)("p",null,"This is to reduce the cumbersome typing. A type like ",(0,r.kt)("inlineCode",{parentName:"p"},"(num, vec) => num")," can now be simply ",(0,r.kt)("inlineCode",{parentName:"p"},"expr"),". However, I'm not sure how robustness / type safety can be achieved in this case."),(0,r.kt)("h2",{id:"mathematical-functions"},"Mathematical functions"),(0,r.kt)("p",null,"In mathematics, parameters used in functions often appear like currying to me. For example, ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msubsup",{parentName:"mrow"},(0,r.kt)("mo",{parentName:"msubsup"},"\u2211"),(0,r.kt)("mrow",{parentName:"msubsup"},(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("mn",{parentName:"msubsup"},"10")),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"k"),(0,r.kt)("mn",{parentName:"msup"},"2"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sum_{k=0}^{10}k^2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2537em",verticalAlign:"-0.2997em"}}),(0,r.kt)("span",{parentName:"span",className:"mop"},(0,r.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.954em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"10"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2"))))))))))))," is just a function ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msubsup",{parentName:"mrow"},(0,r.kt)("mo",{parentName:"msubsup"},"\u2211"),(0,r.kt)("mrow",{parentName:"msubsup"},(0,r.kt)("mi",{parentName:"mrow"},"k"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("mn",{parentName:"msubsup"},"10"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\sum_{k=0}^{10}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.2537em",verticalAlign:"-0.2997em"}}),(0,r.kt)("span",{parentName:"span",className:"mop"},(0,r.kt)("span",{parentName:"span",className:"mop op-symbol small-op",style:{position:"relative",top:"0em"}},"\u2211"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.954em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.4003em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"mrel mtight"},"="),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"0")))),(0,r.kt)("span",{parentName:"span",style:{top:"-3.2029em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"10"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2997em"}},(0,r.kt)("span",{parentName:"span"}))))))))))," applied to an expression ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"k"),(0,r.kt)("mn",{parentName:"msup"},"2"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"k^2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03148em"}},"k"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))))))),"."),(0,r.kt)("p",null,"I propose the angle brackets be used to pass parameters to functions that return a function, while round brackets are for functions that return a value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"sum := <num i, num j> => {\n    return (expr f) => {\n        num s := 0;\n        for (x in i...j) {\n            s += f(x);\n        }\n        return s;\n    }\n}\n\nnum a = sum<1, 10>(x => x^2); // a = 385\n")),(0,r.kt)("h2",{id:"immutability"},"Immutability"),(0,r.kt)("p",null,"Although appearing to be a functional programming language, everything is by default mutable. Immutable objects have ",(0,r.kt)("inlineCode",{parentName:"p"},"const")," modifiers."))}N.isMDXComponent=!0}}]);