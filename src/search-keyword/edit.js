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
	BlockControls,
	AlignmentControl,
	InspectorControls,
	RichText,
	useBlockProps
}                       from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl
}                       from '@wordpress/components';
import clsx             from 'clsx';

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
export default function Edit( { attributes, setAttributes } ) {
	const textAlign  = attributes.textAlign;
	const blockProps = useBlockProps({
		className: clsx(`has-text-align-${textAlign}`, textAlign),
	} );

	return (
		<>
			<BlockControls group = "block">
				<AlignmentControl
					value    = { textAlign }
					onChange = { ( value ) => { setAttributes( { textAlign: value } ); } }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody
					title       = { __( 'Block Configuration', 'sketchpad-modified-blocks' ) }
					initialOpen = { true }
				>
					<SelectControl
						label    = { __( 'HTML element' ) }
						value    = { attributes.tagName }
						options  = { [
							{ label: '<div>',  value: 'div' },
							{ label: '<span>', value: 'span' },
							{ label: '<p>',    value: 'p' },
							{ label: '<h1>',   value: 'h1' },
							{ label: '<h2>',   value: 'h2' },
							{ label: '<h3>',   value: 'h3' },
							{ label: '<h4>',   value: 'h4' },
							{ label: '<h5>',   value: 'h5' },
							{ label: '<h6>',   value: 'h6' },
						] }
						onChange = { ( value ) => setAttributes( { tagName: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<RichText
					tagName     = 'p'
					aria-label  = { __( 'Search keyword before text', 'sketchpad-modified-blocks' ) }
					placeholder = { __( 'Add text before search keyword.', 'sketchpad-modified-blocks' ) }
					value       = { attributes.beforeText }
					onChange    = { ( value ) => setAttributes( { beforeText: value } ) }
				/>
				{ __( 'Search Keyword', 'sketchpad-modified-blocks' ) }
				<RichText
					tagName     = 'p'
					aria-label  = { __( 'Search keyword after text', 'sketchpad-modified-blocks' ) }
					placeholder = { __( 'Add text after search keyword.', 'sketchpad-modified-blocks' ) }
					value       = { attributes.afterText }
					onChange    = { ( value ) => setAttributes( { afterText: value } ) }
				/>
			</div>
		</>
	);
}
