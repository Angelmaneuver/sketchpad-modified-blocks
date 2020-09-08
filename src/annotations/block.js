/**
 * Annotations: sketchpad-modified-blocks
 */

import './editor.scss';
import './style.scss';
import { RichText } from '@wordpress/block-editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { InspectorControls, PanelColorSettings } = wp.editor;

/**
 * Register: Custom Gutenberg Block.
 */
registerBlockType(
	'sketchpad-modified-blocks/annotations',
	{
		title: __( 'Annotations Block', 'sketchpad-modified-blocks' ),
		icon: 'editor-paragraph',
		category: 'sketchpad-modified-blocks',
		description: __( 'Block for writing annotations.', 'sketchpad-modified-blocks' ),
		keywords: [
			__( 'Sketchpad-modified-Blocks — Annotations Block', 'sketchpad-modified-blocks' ),
			__( 'Annotations', 'sketchpad-modified-blocks' ),
			__( '', 'sketchpad-modified-blocks' ),
		],
		styles: [
			{
				name: 'default',
				label: __( 'default', 'sketchpad-modified-blocks' ),
				isDefault: true
			},
			{
				name: 'no-vertical-margin',
				label: __( 'No Vertical Margin', 'sketchpad-modified-blocks' ),
			},
		],
		attributes: {
			simbol: {
				type: 'string',
				source: 'html',
				default: '*',
				selector: '.sketchpad-modified-blocks-annotations-simbol',
			},
			content: {
				type: 'string',
				source: 'html',
				default: '',
				selector: '.sketchpad-modified-blocks-annotations-content',
			},
			textColor: {
				type: 'string',
			},
			backgroundColor: {
				type: 'string',
			},
		},
		edit: ( { attributes, setAttributes, className } ) => {
			const updateSimbol = ( value ) => { setAttributes( { simbol: value } ) };
			const updateContent = ( value ) => { setAttributes( { content: value } ) };
			const updateTextColor = ( value ) => { setAttributes( { textColor: value } ) };
			const updateBackgroundColor = ( value ) => { setAttributes( { backgroundColor: value } ) };
			let style = {
				color: attributes.textColor
			}
			return (
				<Fragment>
					<InspectorControls>
						<PanelColorSettings
							title={ __( 'Color' ) + __( 'Settings' ) }
							colorSettings={ [
								{
									value: attributes.textColor,
									onChange: updateTextColor,
									label: __( 'Text Color' ),
								},
								{
									value: attributes.backgroundColor,
									onChange: updateBackgroundColor,
									label: __( 'Background Color' ),
								},
							] }
						/>
					</InspectorControls>
					<div
						className={ className }
						style={ { background: attributes.backgroundColor } }
					>
						<div>
							<RichText
								className="sketchpad-modified-blocks-annotations-simbol"
								style={ style }
								value={ attributes.simbol }
								onChange={ updateSimbol }
							/>
						</div>
						<div>
							<RichText
								className="sketchpad-modified-blocks-annotations-content"
								style={ style }
								value={ attributes.content }
								onChange={ updateContent }
								placeholder={ __( 'Start writing or type / to choose a block' ) }
								keepPlaceholderOnFocus={ true }
							/>
						</div>
					</div>
				</Fragment>
			);
		},
		save: ( { attributes, className } ) => {
			let style = {
				color: attributes.textColor
			}
			return (
				<div
					style={ { background: attributes.backgroundColor } }
				>
					<p
						className="sketchpad-modified-blocks-annotations-simbol"
						style={ style }
					><RichText.Content value={ attributes.simbol } /></p>
					<p
						className="sketchpad-modified-blocks-annotations-content"
						style={ style }
					><RichText.Content value={ attributes.content } /></p>
				</div>
			);
		},
		example: {
			attributes: {
				simbol: __( '*', 'sketchpad-modified-blocks' ),
				content: __( 'Annotations will be provided.<br />Second line.<br />Third line.', 'sketchpad-modified-blocks' ),
			}
		}
	}
);
