!function(){"use strict";var e=window.wp.blocks,t=window.wp.element,o=window.wp.blockEditor;(0,e.registerBlockType)("sketchpad-modified-blocks/talk-messagebox",{edit:function(){return(0,t.createElement)("div",(0,o.useBlockProps)(),(0,t.createElement)(o.InnerBlocks,{template:[["sketchpad-modified-blocks/talk-name",{}],["sketchpad-modified-blocks/talk-messages",{}]],templateLock:!0}))},save:function(){return(0,t.createElement)("div",o.useBlockProps.save(),(0,t.createElement)(o.InnerBlocks.Content,null))}})}();