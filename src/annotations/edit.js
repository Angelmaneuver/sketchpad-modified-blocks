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
	InspectorControls,
	PanelColorSettings,
	RichText
}                       from '@wordpress/block-editor';

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
	const blockProps            = useBlockProps( {
		style: { backgroundColor: attributes.backgroundColor }
	} );
	const updateSimbol          = ( value ) => { setAttributes( { simbol:          value } ); };
	const updateContent         = ( value ) => { setAttributes( { content:         value } ); };
	const updateTextColor       = ( value ) => { setAttributes( { textColor:       value } ); };
	const updateBackgroundColor = ( value ) => { setAttributes( { backgroundColor: value } ); };
	const style                 = { color: attributes.textColor };

	return (
		<Fragment>
			<InspectorControls>
				<PanelColorSettings
					title         = { __( 'Color' ) }
					colorSettings = { [
						{
							value:    attributes.textColor,
							onChange: updateTextColor,
							label:    __( 'Text' ) + __( 'Color' ),
						},
						{
							value:    attributes.backgroundColor,
							onChange: updateBackgroundColor,
							label:    __( 'Background color' ),
						},
					] }
				/>
			</InspectorControls>
			<div { ...blockProps } >
				<div>
					<RichText
						className              = 'sketchpad-modified-blocks-annotations-simbol'
						style                  = { style }
						value                  = { attributes.simbol }
						onChange               = { updateSimbol }
					/>
				</div>
				<div>
				<RichText
						className              = 'sketchpad-modified-blocks-annotations-content'
						style                  = { style }
						value                  = { attributes.content }
						onChange               = { updateContent }
						placeholder            = { __( 'Start writing or type / to choose a block' ) }
					/>
				</div>
			</div>
		</Fragment>
	);
}
