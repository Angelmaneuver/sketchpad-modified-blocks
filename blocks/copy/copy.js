!function(){"use strict";var e,t={682:function(){var e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,o=window.wp.blockEditor,r=window.wp.components;(0,e.registerBlockType)("sketchpad-modified-blocks/copy",{edit:function(e){let{attributes:l,setAttributes:i}=e;return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(o.BlockControls,null,(0,t.createElement)(o.AlignmentToolbar,{value:l.alignment,onChange:e=>{i({alignment:null===e?"none":e})}})),(0,t.createElement)(o.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,n.__)("Copy Button Configuration","sketchpad-modified-blocks"),initialOpen:!0},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.TextControl,{label:(0,n.__)("Enter a value that identifies the element you want to copy for clipboard.","sketchpad-modified-blocks"),className:"sketchpad-modified-blocks-copy",value:l.target,onChange:e=>{i({target:e})}})))),(0,t.createElement)("div",(0,o.useBlockProps)(),(0,t.createElement)("div",{className:"sketchpad-modified-blocks-copy-button",style:{textAlign:l.alignment}},(0,t.createElement)("div",{className:"icon"}))))},save:function(e){let{attributes:n}=e;return(0,t.createElement)("div",o.useBlockProps.save(),(0,t.createElement)("button",{className:`sketchpad-modified-blocks-copy-button sketchpad-modified-blocks-copy-button-align-${n.alignment}`,"data-clipboard-target":n.target,onClick:"return false;"},(0,t.createElement)("div",{className:"icon"})))}})}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=function(t,n,r,l){if(!n){var i=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],l=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(a=!1,l<i&&(i=l));if(a){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[n,r,l]},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={203:0,818:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,i=n[0],a=n[1],c=n[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var u=c(o)}for(t&&t(n);s<i.length;s++)l=i[s],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},n=self.webpackChunksketchpad_modified_blocks=self.webpackChunksketchpad_modified_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[818],(function(){return o(682)}));r=o.O(r)}();