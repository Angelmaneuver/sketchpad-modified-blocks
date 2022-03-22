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
 import { Fragment }     from '@wordpress/element';
 import {
	 useBlockProps,
	 InspectorControls
 }                       from '@wordpress/block-editor';
  import {
	 PanelBody,
	 TextControl,
	 SelectControl
 }                       from '@wordpress/components';
import ServerSideRender  from '@wordpress/server-side-render';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { name, attributes, setAttributes } ) {
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title       = { __( 'Block Configuration', 'sketchpad-modified-blocks' ) }
					initialOpen = { true }
				>
					<SelectControl
						label    = { __( 'HTML element' ) }
						value    = { attributes.tagName }
						options  = {[
							{ label: '<div>',     value: 'div' },
							{ label: '<section>', value: 'section' },
						]}
						onChange = { ( value ) => setAttributes( { tagName: value } ) }
					/>
					<TextControl
						label    = { __( 'Enter the value you want to display as the heading.', 'sketchpad-modified-blocks' ) }
						value    = { attributes.heading }
						onChange = { ( value ) => setAttributes( { heading: value } ) }
					/>
					<SelectControl
						label    = { __( 'Heading Element', 'sketchpad-modified-blocks' ) }
						value    = { attributes.headingTagName }
						options  = {[
							{ label: '<h1>', value: 'h1' },
							{ label: '<h2>', value: 'h2' },
							{ label: '<h3>', value: 'h3' },
							{ label: '<h4>', value: 'h4' },
							{ label: '<h5>', value: 'h5' },
							{ label: '<h6>', value: 'h6' },
						]}
						onChange = { ( value ) => setAttributes( { headingTagName: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() } >
				<ServerSideRender
					block      = { name }
					attributes = { attributes }
				/>
			</div>
		</Fragment>
	);
}
