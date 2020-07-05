/**
 * Indent: sketchpad-modified-blocks
 */

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockStyle } = wp.blocks;

registerBlockStyle( 'core/group', {
	name: 'indent',
	label: __( 'Indent', 'sketchpad-modified-blocks' ),
} );
