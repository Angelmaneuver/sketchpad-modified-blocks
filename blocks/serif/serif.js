(()=>{"use strict";var e,r={819:()=>{const e=window.wp.blocks,r=window.wp.i18n,o=window.wp.blockEditor,s=window.ReactJSXRuntime;(0,e.registerBlockType)("sketchpad-modified-blocks/serif",{edit:function(){const e=[["core/paragraph",{className:"sketchpad-modified-blocks-serif-name",align:"center",fontSize:"small",textColor:"white",placeholder:(0,r.__)("Please enter your name...","sketchpad-modified-blocks")}],["core/separator",{className:"sketchpad-modified-blocks-serif-separator",align:"center"}],["core/paragraph",{className:"sketchpad-modified-blocks-serif-serif",align:"center",fontSize:"medium",textColor:"white",placeholder:(0,r.__)("Please enter serif...","sketchpad-modified-blocks")}]];return(0,s.jsx)("div",{...(0,o.useBlockProps)(),children:(0,s.jsx)(o.InnerBlocks,{template:e,templateLock:"all"})})},save:function(){return(0,s.jsx)("div",{...o.useBlockProps.save(),children:(0,s.jsx)(o.InnerBlocks.Content,{})})}})}},o={};function s(e){var i=o[e];if(void 0!==i)return i.exports;var t=o[e]={exports:{}};return r[e](t,t.exports,s),t.exports}s.m=r,e=[],s.O=(r,o,i,t)=>{if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],i=e[d][1],t=e[d][2];for(var n=!0,c=0;c<o.length;c++)(!1&t||a>=t)&&Object.keys(s.O).every((e=>s.O[e](o[c])))?o.splice(c--,1):(n=!1,t<a&&(a=t));if(n){e.splice(d--,1);var l=i();void 0!==l&&(r=l)}}return r}t=t||0;for(var d=e.length;d>0&&e[d-1][2]>t;d--)e[d]=e[d-1];e[d]=[o,i,t]},s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={842:0,681:0};s.O.j=r=>0===e[r];var r=(r,o)=>{var i,t,a=o[0],n=o[1],c=o[2],l=0;if(a.some((r=>0!==e[r]))){for(i in n)s.o(n,i)&&(s.m[i]=n[i]);if(c)var d=c(s)}for(r&&r(o);l<a.length;l++)t=a[l],s.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return s.O(d)},o=self.webpackChunksketchpad_modified_blocks=self.webpackChunksketchpad_modified_blocks||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var i=s.O(void 0,[681],(()=>s(819)));i=s.O(i)})();