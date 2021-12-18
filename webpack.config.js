const defaultConfig        = require( '@wordpress/scripts/config/webpack.config' );
const path                 = require( 'path' );
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

const cssPlugin            = defaultConfig.plugins.find( ( value ) => {
	return value instanceof MiniCSSExtractPlugin;
} );
cssPlugin.options.filename = ( { chunk } ) => {
	return `${ chunk.name.replace( 'style-', '' )}/${ chunk.name }.css`;
}

module.exports             = {
  ...defaultConfig,
  entry: {
	  'annotations':        './src/annotations.js',
	  'biim':               './src/biim.js',
	  'biim-navigationbar': './src/biim-navigationbar.js',
	  'biim-paragraphs':    './src/biim-paragraphs.js',
	  'copy':               './src/copy.js',
	  'table-of-contents':  './src/table-of-contents.js',
	  'tag-list':           './src/tag-list.js',
	  'talk':               './src/talk.js',
	  'talk-icon':          './src/talk-icon.js',
	  'talk-messagebox':    './src/talk-messagebox.js',
	  'talk-name':          './src/talk-name.js',
	  'talk-messages':      './src/talk-messages.js',
	  'talk-message':       './src/talk-message.js',
  },
  output: {
	filename: '[name]/[name].js',
	path:      path.join( __dirname, './blocks/components' ),
  }
}
