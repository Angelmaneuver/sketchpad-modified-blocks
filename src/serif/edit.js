/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {
	useBlockProps,
	InnerBlocks
}                  from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const TEMPLATE = [
		[ 'core/paragraph', {
			className:   'sketchpad-modified-blocks-serif-name',
			align:       'center',
			fontSize:    'small',
			textColor:   'white',
			placeholder: __( 'Please enter your name...', 'sketchpad-modified-blocks' ),
		} ],
		[ 'core/separator', {
			className:   'sketchpad-modified-blocks-serif-separator',
			align:       'center',
		} ],
		[ 'core/paragraph', {
			className:   'sketchpad-modified-blocks-serif-serif',
			align:       'center',
			fontSize:    'medium',
			textColor:   'white',
			placeholder: __( 'Please enter serif...', 'sketchpad-modified-blocks' ),
		} ],
	];

	return (
		<div { ...useBlockProps() } >
			<InnerBlocks template = { TEMPLATE } templateLock = 'all' />
		</div>
	);
}
