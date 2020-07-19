/**
 * Copy: sketchpad-modified-blocks
 */

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { PanelBody, PanelRow, TextControl } = wp.components;
const { BlockControls, AlignmentToolbar, InspectorControls } = wp.editor;

/**
 * Register: Custom Gutenberg Block.
 */
registerBlockType(
	'sketchpad-modified-blocks/copy',
	{
		title: __( 'Copy Button', 'sketchpad-modified-blocks' ),
		icon: 'clipboard',
		category: 'sketchpad-modified-blocks',
		description: __( 'Copy button.', 'sketchpad-modified-blocks' ),
		keywords: [
			__( 'Sketchpad-modified-Blocks — Copy Button', 'sketchpad-modified-blocks' ),
			__( 'Copy Button', 'sketchpad-modified-blocks' ),
			__( '', 'sketchpad-modified-blocks' ),
		],
		styles: [
		],
		attributes: {
			target: {
				type: 'string',
				source: 'attribute',
				selector: 'button',
				attribute: 'data-clipboard-target',
				default: '',
			},
			alignment: {
				type: 'string',
				default: 'none',
			},
		},
		edit: ( { attributes, setAttributes, className } ) => {
			const updateTarget = ( value ) => { setAttributes( { target: value } ) };
			const updateAlignment = ( value ) => { setAttributes( { alignment: value === null ? 'none' : value } ) };
			return (
				<Fragment>
					<BlockControls>
						<AlignmentToolbar
							value={ attributes.alignment }
							onChange={ updateAlignment }
						/>
					</BlockControls>
					<InspectorControls>
						<PanelBody
							title={ __( 'Copy Button Configuration', 'sketchpad-modified-blocks' ) }
							initialOpen={ true }
						>
							<PanelRow>
								<TextControl
									label={ __(
										'Specify the class name of the element to be copied to the clipborard.',
										'sketchpad-modified-blocks'
									) }
									className="sketchpad-modified-blocks-copy"
									value={ attributes.target }
									onChange={ updateTarget }
								/>
							</PanelRow>
						</PanelBody>
					</InspectorControls>
					<div className={ className }>
						<div
							className="sketchpad-modified-blocks-copy-button"
							style={ { textAlign: attributes.alignment } }
						>
							<div className="fa-stack">
								<i className="fas fa-square fa-stack-2x"></i>
								<i className="fas fa-copy fa-stack-1x fa-inverse"></i>
							</div>
						</div>
					</div>
				</Fragment>
			);
		},
		save: ( { attributes, className } ) => {
			return (
				<div className={ className }>
					<button
						className={ `sketchpad-modified-blocks-copy-button sketchpad-modified-blocks-copy-button-align-${ attributes.alignment }` }
						data-clipboard-target={ attributes.target }
						onClick="return false;"
					>
						<div className="fa-stack">
							<i className="fas fa-square fa-stack-2x"></i>
							<i className="fas fa-copy fa-stack-1x fa-inverse"></i>
						</div>
					</button>
				</div>
				);
		},
		example: {
			attributes: {
			}
		}
	}
);
