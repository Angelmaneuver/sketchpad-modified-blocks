!function(){"use strict";var e={n:function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,n=window.wp.element,r=window.wp.blockEditor,o=window.wp.serverSideRender,i=e.n(o);(0,t.registerBlockType)("sketchpad-modified-blocks/tag-list",{edit:function(e){return(0,n.createElement)("div",(0,r.useBlockProps)(),(0,n.createElement)(i(),{block:e.name,attributes:e.attributes}))},save:function(){return null}})}();