!function(){"use strict";var e,n={836:function(){var e=window.wp.blocks,n=window.wp.element,t=window.wp.blockEditor;const r=[["core/post-navigation-link",{type:"previous"}],["core/post-navigation-link"]];var o=window.wp.primitives,i=(0,n.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(o.Path,{d:"M4 13.5h6v-3H4v3zm8 0h3v-3h-3v3zm5-3v3h3v-3h-3z"}));(0,e.registerBlockType)("sketchpad-modified-blocks/post-navigation-links",{edit:function(){const e=(0,t.useBlockProps)(),o=(0,t.useInnerBlocksProps)(e,{template:r,templateLock:"all"});return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",o))},save:function(){return(0,n.createElement)("div",t.useBlockProps.save(),(0,n.createElement)(t.InnerBlocks.Content,null))},icon:i})}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,e=[],r.O=function(n,t,o,i){if(!t){var c=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],i=e[u][2];for(var l=!0,s=0;s<t.length;s++)(!1&i||c>=i)&&Object.keys(r.O).every((function(e){return r.O[e](t[s])}))?t.splice(s--,1):(l=!1,i<c&&(c=i));if(l){e.splice(u--,1);var a=o();void 0!==a&&(n=a)}}return n}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,o,i]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={682:0,943:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,i,c=t[0],l=t[1],s=t[2],a=0;if(c.some((function(n){return 0!==e[n]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(s)var u=s(r)}for(n&&n(t);a<c.length;a++)i=c[a],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},t=self.webpackChunksketchpad_modified_blocks=self.webpackChunksketchpad_modified_blocks||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var o=r.O(void 0,[943],(function(){return r(836)}));o=r.O(o)}();