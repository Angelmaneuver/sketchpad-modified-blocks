(()=>{"use strict";var e,t={836:()=>{const e=window.wp.blocks,t=window.wp.element,o=window.wp.blockEditor,r=[["core/post-navigation-link",{type:"previous"}],["core/post-navigation-link"]],n=window.wp.primitives,i=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"M4 13.5h6v-3H4v3zm8 0h3v-3h-3v3zm5-3v3h3v-3h-3z"}));(0,e.registerBlockType)("sketchpad-modified-blocks/post-navigation-links",{edit:function(){const e=(0,o.useBlockProps)(),n=(0,o.useInnerBlocksProps)(e,{template:r,templateLock:"all"});return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",n))},save:function(){return(0,t.createElement)("div",o.useBlockProps.save(),(0,t.createElement)(o.InnerBlocks.Content,null))},icon:i})}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,r),i.exports}r.m=t,e=[],r.O=(t,o,n,i)=>{if(!o){var l=1/0;for(p=0;p<e.length;p++){for(var[o,n,i]=e[p],s=!0,a=0;a<o.length;a++)(!1&i||l>=i)&&Object.keys(r.O).every((e=>r.O[e](o[a])))?o.splice(a--,1):(s=!1,i<l&&(l=i));if(s){e.splice(p--,1);var c=n();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[o,n,i]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={682:0,943:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[l,s,a]=o,c=0;if(l.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(a)var p=a(r)}for(t&&t(o);c<l.length;c++)i=l[c],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(p)},o=globalThis.webpackChunksketchpad_modified_blocks=globalThis.webpackChunksketchpad_modified_blocks||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var n=r.O(void 0,[943],(()=>r(836)));n=r.O(n)})();