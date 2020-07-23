!function(e){function t(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=wp.blockEditor},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(2),a(5),a(8)},function(e,t,a){"use strict";var i=a(3),n=(a.n(i),a(4)),o=(a.n(n),a(0)),__=(a.n(o),wp.i18n.__);(0,wp.blocks.registerBlockType)("sketchpad-modified-blocks/annotations",{title:__("Annotations Block","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks",description:__("Block for writing annotations.","sketchpad-modified-blocks"),keywords:[__("Sketchpad-modified-Blocks \u2014 Annotations Block","sketchpad-modified-blocks"),__("Annotations","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],styles:[{name:"default",label:__("default","sketchpad-modified-blocks"),isDefault:!0},{name:"no-vertical-margin",label:__("No Vertical Margin","sketchpad-modified-blocks")}],attributes:{simbol:{type:"string",source:"html",default:"*",selector:".sketchpad-modified-blocks-annotations-simbol"},content:{type:"string",source:"html",default:"",selector:".sketchpad-modified-blocks-annotations-content"}},edit:function(e){var t=e.attributes,a=e.setAttributes,i=e.className,n=function(e){a({simbol:e})},l=function(e){a({content:e})};return wp.element.createElement("div",{className:i},wp.element.createElement("div",null,wp.element.createElement(o.RichText,{className:"sketchpad-modified-blocks-annotations-simbol",value:t.simbol,onChange:n})),wp.element.createElement("div",null,wp.element.createElement(o.RichText,{className:"sketchpad-modified-blocks-annotations-content",value:t.content,onChange:l})))},save:function(e){var t=e.attributes;return e.className,wp.element.createElement("div",null,wp.element.createElement("p",{className:"sketchpad-modified-blocks-annotations-simbol"},wp.element.createElement(o.RichText.Content,{value:t.simbol})),wp.element.createElement("p",{className:"sketchpad-modified-blocks-annotations-content"},wp.element.createElement(o.RichText.Content,{value:t.content})))},example:{attributes:{simbol:__("*","sketchpad-modified-blocks"),content:__("Annotations will be provided.<br />Second line.<br />Third line.","sketchpad-modified-blocks")}}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var i=a(6),n=(a.n(i),a(7)),o=(a.n(n),a(0)),__=(a.n(o),wp.i18n.__),l=wp.blocks,s=l.registerBlockType;(0,l.registerBlockStyle)("core/paragraph",{name:"bottom",label:__("Bottom line style (Biim System)","sketchpad-modified-blocks")}),s("sketchpad-modified-blocks/biim-paragraph",{title:__("Internal Parts","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks-internal-parts",description:__("This block is unusable. (Sketchpad - modified Blocks internal use).","sketchpad-modified-blocks"),parent:"sketchpad-modified-blocks/biim",keywords:[__("Sketchpad - modified Biim System Blocks Internal Parts","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],styles:[],edit:function(e){var t=(e.attributes,e.setAttributes,e.className,[["core/paragraph",{}]]),a=["core/paragraph"];return wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks,{template:t,allowedBlocks:a,templateLock:!1}))},save:function(e){return e.attributes,e.className,wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks.Content,null))},example:{attributes:{}}}),s("sketchpad-modified-blocks/biim-navigationbar",{title:__("Internal Parts","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks-internal-parts",description:__("This block is unusable. (Sketchpad - modified Blocks internal use).","sketchpad-modified-blocks"),parent:"sketchpad-modified-blocks/biim",keywords:[__("Sketchpad - modified Biim System Blocks Internal Parts","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],styles:[],edit:function(e){var t=(e.attributes,e.setAttributes,e.className),a=[["core/image",{className:"sketchpad-modified-blocks-biim-icon"}],["sketchpad-modified-blocks/biim-paragraph",{className:"sketchpad-modified-blocks-biim-messagebox"}]];return wp.element.createElement("div",{className:t},wp.element.createElement(o.InnerBlocks,{template:a,templateLock:"all"}))},save:function(e){return e.attributes,e.className,wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks.Content,null))},example:{attributes:{}}}),s("sketchpad-modified-blocks/biim",{title:__("Biim System Block","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks",description:__("Biim System Block.","sketchpad-modified-blocks"),keywords:[__("Sketchpad-modified-Blocks \u2014 Biim System Block","sketchpad-modified-blocks"),__("Biim","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],styles:[{name:"default",label:__("default","sketchpad-modified-blocks"),isDefault:!0},{name:"no-vertical-margin",label:__("No Vertical Margin","sketchpad-modified-blocks")}],edit:function(e){var t=(e.attributes,e.setAttributes,e.className),a=[["core/image",{className:"sketchpad-modified-blocks-biim-screen"}],["sketchpad-modified-blocks/biim-navigationbar",{className:"skethcpad-modified-blocks-biim-navigationbar"}]];return wp.element.createElement("div",{className:t,"data-type":"sketchpad-modified-blocks/biim"},wp.element.createElement(o.InnerBlocks,{template:a,templateLock:"all"}))},save:function(e){return e.attributes,e.className,wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks.Content,null))},example:{attributes:{}}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var i=a(9),n=(a.n(i),a(10)),__=(a.n(n),wp.i18n.__),o=wp.blocks.registerBlockType,l=wp.element.Fragment,s=wp.components,c=s.PanelBody,d=s.PanelRow,r=s.TextControl,m=wp.editor,p=m.BlockControls,k=m.AlignmentToolbar,b=m.InspectorControls;o("sketchpad-modified-blocks/copy",{title:__("Copy Button","sketchpad-modified-blocks"),icon:"clipboard",category:"sketchpad-modified-blocks",description:__("Copy button.","sketchpad-modified-blocks"),keywords:[__("Sketchpad-modified-Blocks \u2014 Copy Button","sketchpad-modified-blocks"),__("Copy Button","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],styles:[],attributes:{target:{type:"string",source:"attribute",selector:"button",attribute:"data-clipboard-target",default:""},alignment:{type:"string",default:"none"}},edit:function(e){var t=e.attributes,a=e.setAttributes,i=e.className,n=function(e){a({target:e})},o=function(e){a({alignment:null===e?"none":e})};return wp.element.createElement(l,null,wp.element.createElement(p,null,wp.element.createElement(k,{value:t.alignment,onChange:o})),wp.element.createElement(b,null,wp.element.createElement(c,{title:__("Copy Button Configuration","sketchpad-modified-blocks"),initialOpen:!0},wp.element.createElement(d,null,wp.element.createElement(r,{label:__("Specify the class name of the element to be copied to the clipborard.","sketchpad-modified-blocks"),className:"sketchpad-modified-blocks-copy",value:t.target,onChange:n})))),wp.element.createElement("div",{className:i},wp.element.createElement("div",{className:"sketchpad-modified-blocks-copy-button",style:{textAlign:t.alignment}},wp.element.createElement("div",{className:"fa-stack"},wp.element.createElement("i",{className:"fas fa-square fa-stack-2x"}),wp.element.createElement("i",{className:"fas fa-copy fa-stack-1x fa-inverse"})))))},save:function(e){var t=e.attributes,a=e.className;return wp.element.createElement("div",{className:a},wp.element.createElement("button",{className:"sketchpad-modified-blocks-copy-button sketchpad-modified-blocks-copy-button-align-"+t.alignment,"data-clipboard-target":t.target,onClick:"return false;"},wp.element.createElement("div",{className:"fa-stack"},wp.element.createElement("i",{className:"fas fa-square fa-stack-2x"}),wp.element.createElement("i",{className:"fas fa-copy fa-stack-1x fa-inverse"}))))},example:{attributes:{}}})},function(e,t){},function(e,t){}]);