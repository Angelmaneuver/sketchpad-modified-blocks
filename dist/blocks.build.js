!function(e){function t(s){if(a[s])return a[s].exports;var l=a[s]={i:s,l:!1,exports:{}};return e[s].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var a={};t.m=e,t.c=a,t.d=function(e,a,s){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:s})},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=wp.blockEditor},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a(2),a(5),a(8),a(11)},function(e,t,a){"use strict";var s=a(3),l=(a.n(s),a(4)),o=(a.n(l),a(0)),__=(a.n(o),wp.i18n.__),i=wp.blocks.registerBlockType,c=wp.blockEditor,n=c.InspectorControls,d=c.PanelColorSettings,r=wp.element.Fragment;i("sketchpad-modified-blocks/annotations",{title:__("Annotations Block","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks",description:__("Block for writing annotations.","sketchpad-modified-blocks"),keywords:[__("Sketchpad-modified-Blocks \u2014 Annotations Block","sketchpad-modified-blocks"),__("Annotations","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],styles:[{name:"default",label:__("default","sketchpad-modified-blocks"),isDefault:!0},{name:"no-vertical-margin",label:__("No Vertical Margin","sketchpad-modified-blocks")}],attributes:{simbol:{type:"string",source:"html",default:"*",selector:".sketchpad-modified-blocks-annotations-simbol"},content:{type:"string",source:"html",default:"",selector:".sketchpad-modified-blocks-annotations-content"},textColor:{type:"string"},backgroundColor:{type:"string"}},edit:function(e){var t=e.attributes,a=e.setAttributes,s=e.className,l=function(e){a({simbol:e})},i=function(e){a({content:e})},c=function(e){a({textColor:e})},m=function(e){a({backgroundColor:e})},k={color:t.textColor};return wp.element.createElement(r,null,wp.element.createElement(n,null,wp.element.createElement(d,{title:__("Color")+__("Settings"),colorSettings:[{value:t.textColor,onChange:c,label:__("Text Color")},{value:t.backgroundColor,onChange:m,label:__("Background Color")}]})),wp.element.createElement("div",{className:s,style:{background:t.backgroundColor}},wp.element.createElement("div",null,wp.element.createElement(o.RichText,{className:"sketchpad-modified-blocks-annotations-simbol",style:k,value:t.simbol,onChange:l})),wp.element.createElement("div",null,wp.element.createElement(o.RichText,{className:"sketchpad-modified-blocks-annotations-content",style:k,value:t.content,onChange:i,placeholder:__("Start writing or type / to choose a block"),keepPlaceholderOnFocus:!0}))))},save:function(e){var t=e.attributes,a=(e.className,{color:t.textColor});return wp.element.createElement("div",{style:{background:t.backgroundColor}},wp.element.createElement("p",{className:"sketchpad-modified-blocks-annotations-simbol",style:a},wp.element.createElement(o.RichText.Content,{value:t.simbol})),wp.element.createElement("p",{className:"sketchpad-modified-blocks-annotations-content",style:a},wp.element.createElement(o.RichText.Content,{value:t.content})))},example:{attributes:{simbol:__("*","sketchpad-modified-blocks"),content:__("Annotations will be provided.<br />Second line.<br />Third line.","sketchpad-modified-blocks")}}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var s=a(6),l=(a.n(s),a(7)),o=(a.n(l),a(0)),__=(a.n(o),wp.i18n.__),i=wp.blocks,c=i.registerBlockType;(0,i.registerBlockStyle)("core/paragraph",{name:"bottom",label:__("Bottom line style (Biim System)","sketchpad-modified-blocks")}),c("sketchpad-modified-blocks/biim-paragraph",{title:__("Messages Block","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks-internal-parts",description:__("This block is unusable. (Sketchpad - modified Blocks internal use).","sketchpad-modified-blocks"),parent:"sketchpad-modified-blocks/biim",keywords:[__("Sketchpad - modified Biim System Blocks Internal Parts","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],supports:{inserter:!1},styles:[],edit:function(e){var t=(e.attributes,e.setAttributes,e.className,[["core/paragraph",{}]]),a=["core/paragraph"];return wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks,{template:t,allowedBlocks:a,templateLock:!1}))},save:function(e){return e.attributes,e.className,wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks.Content,null))}}),c("sketchpad-modified-blocks/biim-navigationbar",{title:__("Biim Navigation bar Block","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks-internal-parts",description:__("This block is unusable. (Sketchpad - modified Blocks internal use).","sketchpad-modified-blocks"),parent:"sketchpad-modified-blocks/biim",keywords:[__("Sketchpad - modified Biim System Blocks Internal Parts","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],supports:{inserter:!1},styles:[],edit:function(e){var t=(e.attributes,e.setAttributes,e.className),a=[["core/image",{className:"sketchpad-modified-blocks-biim-icon"}],["sketchpad-modified-blocks/biim-paragraph",{className:"sketchpad-modified-blocks-biim-messagebox"}]];return wp.element.createElement("div",{className:t},wp.element.createElement(o.InnerBlocks,{template:a,templateLock:"all"}))},save:function(e){return e.attributes,e.className,wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks.Content,null))}}),c("sketchpad-modified-blocks/biim",{title:__("Biim System Block","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks",description:__("Biim System Block.","sketchpad-modified-blocks"),keywords:[__("Sketchpad-modified-Blocks \u2014 Biim System Block","sketchpad-modified-blocks"),__("Biim","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],styles:[{name:"default",label:__("default","sketchpad-modified-blocks"),isDefault:!0},{name:"no-vertical-margin",label:__("No Vertical Margin","sketchpad-modified-blocks")}],edit:function(e){var t=(e.attributes,e.setAttributes,e.className),a=[["core/image",{className:"sketchpad-modified-blocks-biim-screen"}],["sketchpad-modified-blocks/biim-navigationbar",{className:"skethcpad-modified-blocks-biim-navigationbar"}]];return wp.element.createElement("div",{className:t,"data-type":"sketchpad-modified-blocks/biim"},wp.element.createElement(o.InnerBlocks,{template:a,templateLock:"all"}))},save:function(e){return e.attributes,e.className,wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks.Content,null))}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var s=a(9),l=(a.n(s),a(10)),__=(a.n(l),wp.i18n.__),o=wp.blocks.registerBlockType,i=wp.blockEditor,c=i.BlockControls,n=i.InspectorControls,d=wp.element.Fragment,r=wp.components,m=r.PanelBody,k=r.PanelRow,p=r.TextControl,b=wp.editor.AlignmentToolbar;o("sketchpad-modified-blocks/copy",{title:__("Copy Button","sketchpad-modified-blocks"),icon:"clipboard",category:"sketchpad-modified-blocks",description:__("Copy button.","sketchpad-modified-blocks"),keywords:[__("Sketchpad-modified-Blocks \u2014 Copy Button","sketchpad-modified-blocks"),__("Copy Button","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],styles:[],attributes:{target:{type:"string",source:"attribute",selector:"button",attribute:"data-clipboard-target",default:""},alignment:{type:"string",default:"none"}},edit:function(e){var t=e.attributes,a=e.setAttributes,s=e.className,l=function(e){a({target:e})},o=function(e){a({alignment:null===e?"none":e})};return wp.element.createElement(d,null,wp.element.createElement(c,null,wp.element.createElement(b,{value:t.alignment,onChange:o})),wp.element.createElement(n,null,wp.element.createElement(m,{title:__("Copy Button Configuration","sketchpad-modified-blocks"),initialOpen:!0},wp.element.createElement(k,null,wp.element.createElement(p,{label:__("Specify the class name of the element to be copied to the clipborard.","sketchpad-modified-blocks"),className:"sketchpad-modified-blocks-copy",value:t.target,onChange:l})))),wp.element.createElement("div",{className:s},wp.element.createElement("div",{className:"sketchpad-modified-blocks-copy-button",style:{textAlign:t.alignment}},wp.element.createElement("div",{className:"fa-stack"},wp.element.createElement("i",{className:"fas fa-square fa-stack-2x"}),wp.element.createElement("i",{className:"fas fa-copy fa-stack-1x fa-inverse"})))))},save:function(e){var t=e.attributes,a=e.className;return wp.element.createElement("div",{className:a},wp.element.createElement("button",{className:"sketchpad-modified-blocks-copy-button sketchpad-modified-blocks-copy-button-align-"+t.alignment,"data-clipboard-target":t.target,onClick:"return false;"},wp.element.createElement("div",{className:"fa-stack"},wp.element.createElement("i",{className:"fas fa-square fa-stack-2x"}),wp.element.createElement("i",{className:"fas fa-copy fa-stack-1x fa-inverse"}))))},example:{attributes:{}}})},function(e,t){},function(e,t){},function(e,t,a){"use strict";var s=a(12),l=(a.n(s),a(13)),o=(a.n(l),a(0)),__=(a.n(o),wp.i18n.__),i=wp.blocks.registerBlockType;i("sketchpad-modified-blocks/talk-icon",{title:__("Icon Block","sketchpad-modified-blocks"),icon:"format-image",category:"sketchpad-modified-blocks-internal-parts",description:__("This block is unusable. (Sketchpad - modified Blocks internal use).","sketchpad-modified-blocks"),parent:"sketchpad-modified-blocks/talk",keywords:[__("Sketchpad - modified Talk Blocks Internal Parts","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],supports:{html:!1,inserter:!1,reusable:!1},styles:[{name:"default",label:__("default","sketchpad-modified-blocks")},{name:"rounded",label:__("Rounded Corners","sketchpad-modified-blocks"),isDefault:!0}],edit:function(e){var t=(e.attributes,e.setAttributes,e.className),a=[["core/image",{}]],s=["core/image","core/paragraph"];return wp.element.createElement("div",{className:t},wp.element.createElement(o.InnerBlocks,{template:a,allowedBlocks:s,templateLock:!1}))},save:function(e){e.attributes,e.className;return wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks.Content,null))}}),i("sketchpad-modified-blocks/talk-name",{title:__("Name Block","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks-internal-parts",description:__("This block is unusable. (Sketchpad - modified Blocks internal use).","sketchpad-modified-blocks"),parent:"sketchpad-modified-blocks/talk-messagebox",keywords:[__("Sketchpad - modified Talk Blocks Internal Parts","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],supports:{html:!1,inserter:!1,reusable:!1},styles:[],edit:function(e){var t=(e.attributes,e.setAttributes,e.className),a=[["core/paragraph",{}]];return wp.element.createElement("div",{className:t},wp.element.createElement(o.InnerBlocks,{template:a,templateLock:!0}))},save:function(e){e.attributes,e.className;return wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks.Content,null))}}),i("sketchpad-modified-blocks/talk-message",{title:__("Message","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks-internal-parts",description:__("This block is unusable. (Sketchpad - modified Blocks internal use).","sketchpad-modified-blocks"),parent:"sketchpad-modified-blocks/talk-messages",keywords:[__("Sketchpad - modified Talk Blocks Internal Parts","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],supports:{inserter:!0},styles:[{name:"talk",label:__("Talk style","sketchpad-modified-blocks"),isDefault:!0},{name:"mind-voice",label:__("Mind voice style","sketchpad-modified-blocks")}],attributes:{content:{type:"string",source:"html",default:"",selector:".sketchpad-modified-blocks-talk-message-content"}},edit:function(e){var t=e.attributes,a=e.setAttributes,s=e.className,l=function(e){a({content:e})};return wp.element.createElement("div",{className:s},wp.element.createElement("p",null,wp.element.createElement(o.RichText,{className:"sketchpad-modified-blocks-talk-message-content",value:t.content,onChange:l})))},save:function(e){var t=e.attributes;e.className;return wp.element.createElement("div",null,wp.element.createElement("p",{className:"sketchpad-modified-blocks-talk-message-content"},wp.element.createElement(o.RichText.Content,{value:t.content})))}}),i("sketchpad-modified-blocks/talk-messages",{title:__("Messages Block","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks-internal-parts",description:__("This block is unusable. (Sketchpad - modified Blocks internal use).","sketchpad-modified-blocks"),parent:"sketchpad-modified-blocks/talk-messagebox",keywords:[__("Sketchpad - modified Talk Blocks Internal Parts","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],supports:{html:!1,inserter:!1,reusable:!1},styles:[],edit:function(e){var t=(e.attributes,e.setAttributes,e.className),a=[["sketchpad-modified-blocks/talk-message",{}]],s=["sketchpad-modified-blocks/talk-message"];return wp.element.createElement("div",{className:t},wp.element.createElement(o.InnerBlocks,{template:a,allowedBlocks:s,templateLock:!1}))},save:function(e){e.attributes,e.className;return wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks.Content,null))}}),i("sketchpad-modified-blocks/talk-messagebox",{title:__("Message Box Block","sketchpad-modified-blocks"),icon:"editor-paragraph",category:"sketchpad-modified-blocks-internal-parts",description:__("This block is unusable. (Sketchpad - modified Blocks internal use).","sketchpad-modified-blocks"),parent:"sketchpad-modified-blocks/talk",keywords:[__("Sketchpad - modified Talk Blocks Internal Parts","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],supports:{html:!1,inserter:!1,reusable:!1},styles:[],edit:function(e){var t=(e.attributes,e.setAttributes,e.className),a=[["sketchpad-modified-blocks/talk-name",{}],["sketchpad-modified-blocks/talk-messages",{}]];return wp.element.createElement("div",{className:t},wp.element.createElement(o.InnerBlocks,{template:a,templateLock:!0}))},save:function(e){e.attributes,e.className;return wp.element.createElement("div",null,wp.element.createElement(o.InnerBlocks.Content,null))}}),i("sketchpad-modified-blocks/talk",{title:__("Talk Block","sketchpad-modified-blocks"),icon:"admin-comments",category:"sketchpad-modified-blocks",description:__("Talk Block.","sketchpad-modified-blocks"),keywords:[__("Sketchpad-modified-Blocks \u2014 Talk Block","sketchpad-modified-blocks"),__("Talk","sketchpad-modified-blocks"),__("","sketchpad-modified-blocks")],supports:{html:!1},styles:[{name:"left",label:__("Chat message left style","sketchpad-modified-blocks"),isDefault:!0},{name:"right",label:__("Chat message right style","sketchpad-modified-blocks")}],edit:function(e){var t=(e.attributes,e.setAttributes,e.className),a=[["sketchpad-modified-blocks/talk-icon",{className:"is-style-rounded"}],["sketchpad-modified-blocks/talk-messagebox",{}]];return wp.element.createElement("div",{className:t},wp.element.createElement(o.InnerBlocks,{template:a,templateLock:!0}))},save:function(e){var t=(e.attributes,e.className);return wp.element.createElement("div",{className:t,"data-type":"sketchpad-modified-blocks/talk","data-talk-trigger":!0},wp.element.createElement(o.InnerBlocks.Content,null))}})},function(e,t){},function(e,t){}]);