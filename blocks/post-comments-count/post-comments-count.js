(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,o=window.wp.i18n,n=window.wp.blockEditor,s=window.wp.components,r=window.wp.element,c=window.wp.apiFetch;var i=e.n(c);const a=window.wp.url;function l(e){var t,o,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(o=l(e[t]))&&(n&&(n+=" "),n+=o)}else for(o in e)e[o]&&(n&&(n+=" "),n+=o);return n}const d=function(){for(var e,t,o=0,n="",s=arguments.length;o<s;o++)(e=arguments[o])&&(t=l(e))&&(n&&(n+=" "),n+=t);return n},p=window.ReactJSXRuntime;(0,t.registerBlockType)("sketchpad-modified-blocks/post-comments-count",{edit:function({attributes:e,setAttributes:t,context:c}){const l=c.postId,h=e.textAlign,u=e.isLink,f=e.anchor,[m,k]=(0,r.useState)(),b=(0,n.useBlockProps)({className:d(`has-text-align-${h}`,h)});return(0,r.useEffect)((()=>{if(!l)return;const e=l;i()({path:(0,a.addQueryArgs)("/wp/v2/comments",{post:l}),parse:!1}).then((t=>{e===l&&k(t.headers.get("X-WP-Total"))}))}),[l]),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(n.BlockControls,{group:"block",children:(0,p.jsx)(n.AlignmentControl,{value:h,onChange:e=>{t({textAlign:e})}})}),(0,p.jsx)(n.InspectorControls,{children:(0,p.jsxs)(s.PanelBody,{children:[(0,p.jsx)(s.ToggleControl,{label:(0,o.__)("Make the post comments count on the post a link.","sketchpad-modified-blocks"),checked:u,onChange:()=>t({isLink:!u})}),u?(0,p.jsx)(s.TextControl,{label:(0,o.__)("Enter the value you want to link destination.","sketchpad-modified-blocks"),placeholder:(0,o.__)('Anchor string without "#"',"sketchpad-modified-blocks"),value:f,onChange:e=>t({anchor:e})}):""]})}),(0,p.jsxs)("div",{...b,children:[(0,p.jsx)(n.RichText,{tagName:"p","aria-label":(0,o.__)("Post comments count before text","sketchpad-modified-blocks"),placeholder:(0,o.__)("Before post comments count","sketchpad-modified-blocks"),value:e.beforeText,onChange:e=>t({beforeText:e})}),l&&void 0!==m?m:(0,p.jsx)(n.Warning,{children:(0,o.__)("Post Comments Count block: post not found.","sketchpad-modified-blocks")}),(0,p.jsx)(n.RichText,{tagName:"p","aria-label":(0,o.__)("Post comments count after text","sketchpad-modified-blocks"),placeholder:(0,o.__)("After post comments count","sketchpad-modified-blocks"),value:e.afterText,onChange:e=>t({afterText:e})})]})]})},save:function(){return null}})})();