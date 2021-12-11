"use strict";(self.webpackChunkpersonal_page=self.webpackChunkpersonal_page||[]).push([[7918],{1897:function(e,t,a){a.r(t),a.d(t,{default:function(){return W}});var n=a(6687),l=a(6355),i=a(9222),r=a(4536),s=a(6238);var o=function(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(r.default,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(r.default,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},c=a(8443),d=a(2396),m=a(4013);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(r.default,{to:a,onClick:l},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.className,i=e.versionMetadata,r=(0,c.Z)().siteConfig.title,s=(0,d.gA)({failfast:!0}).pluginId,o=(0,m.J)(s).savePreferredVersionName,u=(0,d.Jo)(s),p=u.latestDocSuggestion,h=u.latestVersionSuggestion,E=null!=p?p:(t=h).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:r,versionMetadata:i})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:h.label,to:E.path,onClick:function(){return o(h.name)}})))}function h(e){var t=e.className,a=(0,m.E6)();return a.banner?n.createElement(p,{className:t,versionMetadata:a}):null}function E(e){var t=e.className,a=(0,m.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var b=a(1587);function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var _=a(693),Z=a(5775),L="iconEdit_IVMd",U=["className"];var C=function(e){var t=e.className,a=(0,Z.Z)(e,U);return n.createElement("svg",(0,_.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,l.Z)(L,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function T(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(C,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y=a(7981),w="lastUpdated_gljA";function A(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(y.Z,e)))}function M(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(T,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",w)},(a||i)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:i})))}function H(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,r=t.formattedLastUpdatedAt,s=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||i||s);return c||d?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(A,{tags:o}),d&&n.createElement(M,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:s,formattedLastUpdatedAt:r})):null}var x=a(7599),B="tocCollapsible_Et-z",I="tocCollapsibleButton_i+ux",V="tocCollapsibleContent_GG0f",S="tocCollapsibleExpanded_rHuW",D=a(3822);function O(e){var t,a=e.toc,i=e.className,r=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,m.uR)({initialState:!0}),d=c.collapsed,u=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(B,(t={},t[S]=!d,t),i)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",I),onClick:u},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:V,collapsed:d},n.createElement(D.Z,{toc:a,minHeadingLevel:r,maxHeadingLevel:o})))}var F=a(8545),z="docItemContainer_i2gK",R="docItemCol_XV0o",P="tocMobile_hfcH";function W(e){var t,a=e.content,r=a.metadata,s=a.frontMatter,c=s.image,d=s.keywords,u=s.hide_title,v=s.hide_table_of_contents,g=s.toc_min_heading_level,p=s.toc_max_heading_level,f=r.description,N=r.title,k=!u&&void 0===a.contentTitle,_=(0,i.Z)(),Z=!v&&a.toc&&a.toc.length>0,L=Z&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(b.Z,{title:N,description:f,keywords:d,image:c}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[R]=!v,t))},n.createElement(h,null),n.createElement("div",{className:z},n.createElement("article",null,n.createElement(E,null),Z&&n.createElement(O,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:p,className:(0,l.Z)(m.kM.docs.docTocMobile,P)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},k&&n.createElement(F.N,null,N),n.createElement(a,null)),n.createElement(H,e)),n.createElement(o,{previous:r.previous,next:r.next}))),L&&n.createElement("div",{className:"col col--3"},n.createElement(x.Z,{toc:a.toc,minHeadingLevel:g,maxHeadingLevel:p,className:m.kM.docs.docTocDesktop}))))}},8545:function(e,t,a){a.d(t,{N:function(){return u},Z:function(){return v}});var n=a(5775),l=a(693),i=a(6687),r=a(6355),s=a(6238),o=a(4013),c="anchorWithStickyNavbar_mub2",d="anchorWithHideOnScrollNavbar_gyfI",m=["id"],u=function(e){var t=Object.assign({},e);return i.createElement("header",null,i.createElement("h1",(0,l.Z)({},t,{id:void 0}),t.children))},v=function(e){return"h1"===e?u:(t=e,function(e){var a,u=e.id,v=(0,n.Z)(e,m),g=(0,o.LU)().navbar.hideOnScroll;return u?i.createElement(t,(0,l.Z)({},v,{className:(0,r.Z)("anchor",(a={},a[d]=g,a[c]=!g,a)),id:u}),v.children,i.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+u,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):i.createElement(t,v)});var t}},7599:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(693),l=a(5775),i=a(6687),r=a(6355),s=a(3822),o="tableOfContents_gIg7",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},i.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3822:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(693),l=a(5775),i=a(6687),r=a(4013),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,p=e.maxHeadingLevel,h=(0,l.Z)(e,s),E=(0,r.LU)(),b=null!=g?g:E.tableOfContents.minHeadingLevel,f=null!=p?p:E.tableOfContents.maxHeadingLevel,N=(0,r.DA)({toc:t,minHeadingLevel:b,maxHeadingLevel:f}),k=(0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:b,maxHeadingLevel:f}}),[m,v,b,f]);return(0,r.Si)(k),i.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},h))}},4721:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(6687),l=a(6355),i=a(4536),r="tag_5JtH",s="tagRegular_SEw7",o="tagWithCount_+nIu";var c=function(e){var t,a=e.permalink,c=e.name,d=e.count;return n.createElement(i.default,{href:a,className:(0,l.Z)(r,(t={},t[s]=!d,t[o]=d,t))},c,d&&n.createElement("span",null,d))}},7981:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(6687),l=a(6355),i=a(6238),r=a(4721),s="tags_l4h9",o="tag_2qYY";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(r.Z,{name:t,permalink:a}))}))))}}}]);