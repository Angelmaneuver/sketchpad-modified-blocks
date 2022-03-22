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
	AlignmentToolbar,
	BlockControls,
	InspectorControls
}                       from '@wordpress/block-editor';
 import {
	PanelBody,
	PanelRow,
	TextControl
}                       from '@wordpress/components';

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
	const updateTarget = ( value ) => {
		setAttributes( { target: value } );
	};
	const updateAlignment = ( value ) => {
		setAttributes( { alignment: value === null ? 'none' : value } );
	};

	return (
		<Fragment>
			<BlockControls>
				<AlignmentToolbar
					value    = { attributes.alignment }
					onChange = { updateAlignment }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody
					title       = { __( 'Copy Button Configuration', 'sketchpad-modified-blocks' ) }
					initialOpen = { true }
				>
					<PanelRow>
						<TextControl
							label     = { __( 'Enter a value that identifies the element you want to copy for clipboard.', 'sketchpad-modified-blocks' ) }
							className = "sketchpad-modified-blocks-copy"
							value     = { attributes.target }
							onChange  = { updateTarget }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() } >
				<div
					className = 'sketchpad-modified-blocks-copy-button'
					style     = { { textAlign: attributes.alignment } }
				>
					<div className = 'icon' />	
				</div>
			</div>
		</Fragment>
	);
}
