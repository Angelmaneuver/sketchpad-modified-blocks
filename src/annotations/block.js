/**
 * Annotations: sketchpad-modified-blocks
 */

import './editor.scss';
import './style.scss';
import { RichText } from '@wordpress/block-editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

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
		},
		edit: ( { attributes, setAttributes, className } ) => {
			const updateSimbol = ( value ) => { setAttributes( { simbol: value } ) };
			const updateContent = ( value ) => { setAttributes( { content: value } ) };
			return (
				<div className={ className }>
					<div>
						<RichText
							className="sketchpad-modified-blocks-annotations-simbol"
							value={ attributes.simbol }
							onChange={ updateSimbol }
						/>
					</div>
					<div>
						<RichText
							className="sketchpad-modified-blocks-annotations-content"
							value={ attributes.content }
							onChange={ updateContent }
						/>
					</div>
				</div>
			);
		},
		save: ( { attributes, className } ) => {
			return (
				<div>
					<p className="sketchpad-modified-blocks-annotations-simbol"><RichText.Content value={ attributes.simbol } /></p>
					<p className="sketchpad-modified-blocks-annotations-content"><RichText.Content value={ attributes.content } /></p>
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
