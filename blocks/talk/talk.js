(()=>{"use strict";var e,o={222:()=>{const e=window.wp.blocks,o=window.wp.primitives,r=window.ReactJSXRuntime,t=(0,r.jsx)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,r.jsx)(o.Path,{d:"M14 10.1V4c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v8.3c0 .3.2.7.6.8.1.1.2.1.3.1.2 0 .5-.1.6-.3l1.8-1.8H13c.6 0 1-.4 1-1zm-1.5-.5H6.7l-1.2 1.2V4.5h7v5.1zM19 12h-8c-.6 0-1 .4-1 1v6.1c0 .6.4 1 1 1h5.7l1.8 1.8c.1.2.4.3.6.3.1 0 .2 0 .3-.1.4-.1.6-.5.6-.8V13c0-.6-.4-1-1-1zm-.5 7.8l-1.2-1.2h-5.8v-5.1h7v6.3z"})}),s=window.wp.blockEditor;(0,e.registerBlockType)("sketchpad-modified-blocks/talk",{icon:t,edit:function(){return(0,r.jsx)("div",{...(0,s.useBlockProps)(),children:(0,r.jsx)(s.InnerBlocks,{template:[["sketchpad-modified-blocks/talk-icon",{className:"is-style-rounded"}],["sketchpad-modified-blocks/talk-messagebox",{}]],templateLock:!0})})},save:function(){return(0,r.jsx)("div",{...s.useBlockProps.save(),"data-talk-trigger":!0,children:(0,r.jsx)(s.InnerBlocks.Content,{})})}})}},r={};function t(e){var s=r[e];if(void 0!==s)return s.exports;var i=r[e]={exports:{}};return o[e](i,i.exports,t),i.exports}t.m=o,e=[],t.O=(o,r,s,i)=>{if(!r){var c=1/0;for(d=0;d<e.length;d++){r=e[d][0],s=e[d][1],i=e[d][2];for(var n=!0,l=0;l<r.length;l++)(!1&i||c>=i)&&Object.keys(t.O).every((e=>t.O[e](r[l])))?r.splice(l--,1):(n=!1,i<c&&(c=i));if(n){e.splice(d--,1);var a=s();void 0!==a&&(o=a)}}return o}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,s,i]},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={757:0,760:0};t.O.j=o=>0===e[o];var o=(o,r)=>{var s,i,c=r[0],n=r[1],l=r[2],a=0;if(c.some((o=>0!==e[o]))){for(s in n)t.o(n,s)&&(t.m[s]=n[s]);if(l)var d=l(t)}for(o&&o(r);a<c.length;a++)i=c[a],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},r=self.webpackChunksketchpad_modified_blocks=self.webpackChunksketchpad_modified_blocks||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))})();var s=t.O(void 0,[760],(()=>t(222)));s=t.O(s)})();