const defaultConfig        = require( '@wordpress/scripts/config/webpack.config' );
const path                 = require( 'path' );
const MiniCSSExtractPlugin = require( 'mini-css-extract-plugin' );
const cssPlugin            = defaultConfig.plugins.find( ( value ) => {
	return value instanceof MiniCSSExtractPlugin;
} );
cssPlugin.options.filename = ( { chunk } ) => {
	return `${ chunk.name.replace( 'style-', '' )}/${ chunk.name }.css`;
}

module.exports             = {
  ...defaultConfig,
  entry: {
	  'annotations':              './src/annotations/index.js',
	  'biim':                     './src/biim/index.js',
	  'biim-navigationbar':       './src/biim-navigationbar/index.js',
	  'biim-paragraphs':          './src/biim-paragraphs/index.js',
	  'copy':                     './src/copy/index.js',
	  'file-data-display-by-get': './src/file-data-display-by-get/index.js',
	  // 'group':                    './src/group/index.js',
	  'post-comments-count':      './src/post-comments-count/index.js',
	  'post-edit-link':           './src/post-edit-link/index.js',
	  'post-navigation-links':    './src/post-navigation-links/index.js',
	  'search-keyword':           './src/search-keyword/index.js',
	  'serif':                    './src/serif/index.js',
	  'table-of-contents':        './src/table-of-contents/index.js',
	  'tag-list':                 './src/tag-list/index.js',
	  'talk':                     './src/talk/index.js',
	  'talk-icon':                './src/talk-icon/index.js',
	  'talk-message':             './src/talk-message/index.js',
	  'talk-messagebox':          './src/talk-messagebox/index.js',
	  'talk-messages':            './src/talk-messages/index.js',
	  'talk-name':                './src/talk-name/index.js',
  },
  output: {
	filename: '[name]/[name].js',
	path:      path.join( __dirname, './blocks' ),
  },
}
