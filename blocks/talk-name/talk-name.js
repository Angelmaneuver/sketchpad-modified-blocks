(()=>{"use strict";const e=window.wp.blocks,t=window.wp.element,n=window.wp.blockEditor;(0,e.registerBlockType)("sketchpad-modified-blocks/talk-name",{edit:function(){return(0,t.createElement)("div",(0,n.useBlockProps)(),(0,t.createElement)(n.InnerBlocks,{template:[["core/paragraph",{}]],templateLock:!0}))},save:function(){return(0,t.createElement)("div",n.useBlockProps.save(),(0,t.createElement)(n.InnerBlocks.Content,null))}})})();