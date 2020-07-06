/**
 * Biim System: sketchpad-modified-blocks
 */

import './editor.scss';
import './style.scss';
import { InnerBlocks } from '@wordpress/block-editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { registerBlockStyle } = wp.blocks;

registerBlockStyle( 'core/paragraph', {
	name: 'bottom',
	label: __( 'Bottom line style (Biim System)', 'sketchpad-modified-blocks' ),
} );

/**
 * Register: Internal Part of paragraph.
 */
registerBlockType(
	'sketchpad-modified-blocks/biim-paragraph',
	{
		title: __( 'Internal Parts', 'sketchpad-modified-blocks' ),
		icon: 'editor-paragraph',
		category: 'sketchpad-modified-blocks-internal-parts',
		description: __( 'This block is unusable. (Sketchpad - modified Blocks internal use).', 'sketchpad-modified-blocks' ),
		parent: 'sketchpad-modified-blocks/biim',
		keywords: [
			__( 'Sketchpad - modified Biim System Blocks Internal Parts', 'sketchpad-modified-blocks' ),
			__( '', 'sketchpad-modified-blocks' ),
			__( '', 'sketchpad-modified-blocks' ),
		],
		styles: [],
		edit: ( { attributes, setAttributes, className } ) => {
			const TEMPLATE = [
					[ 'core/paragraph', {} ]
				]
			const ALLOW = [ 'core/paragraph' ]
			return (
				<div>
					<InnerBlocks
						template={ TEMPLATE }
						allowedBlocks={ ALLOW }
						templateLock={ false }
					/>
				</div>
			);
		},
		save: ( { attributes, className } ) => {
			return (
				<div>
					<InnerBlocks.Content />
				</div>
			);
		},
		example: {
			attributes: {
			}
		}
	}
);

/**
 * Register: Internal Part of navigationbar.
 */
registerBlockType(
	'sketchpad-modified-blocks/biim-navigationbar',
	{
		title: __( 'Internal Parts', 'sketchpad-modified-blocks' ),
		icon: 'editor-paragraph',
		category: 'sketchpad-modified-blocks-internal-parts',
		description: __( 'This block is unusable. (Sketchpad - modified Blocks internal use).', 'sketchpad-modified-blocks' ),
		parent: 'sketchpad-modified-blocks/biim',
		keywords: [
			__( 'Sketchpad - modified Biim System Blocks Internal Parts', 'sketchpad-modified-blocks' ),
			__( '', 'sketchpad-modified-blocks' ),
			__( '', 'sketchpad-modified-blocks' ),
		],
		styles: [],
		edit: ( { attributes, setAttributes, className } ) => {
			const TEMPLATE = [
					[ 'core/image', { className: 'sketchpad-modified-blocks-biim-icon' } ],
					[ 'sketchpad-modified-blocks/biim-paragraph', { className: 'sketchpad-modified-blocks-biim-messagebox' } ]
				]
			return (
				<div className={ className }>
					<InnerBlocks
						template={ TEMPLATE }
						templateLock='all'
					/>
				</div>
			);
		},
		save: ( { attributes, className } ) => {
			return (
				<div>
					<InnerBlocks.Content />
				</div>
			);
		},
		example: {
			attributes: {
			}
		}
	}
);

/**
 * Register: Biim System Block.
 */
registerBlockType(
	'sketchpad-modified-blocks/biim',
	{
		title: __( 'Biim System Block', 'sketchpad-modified-blocks' ),
		icon: 'editor-paragraph',
		category: 'sketchpad-modified-blocks',
		description: __( 'Biim System Block.', 'sketchpad-modified-blocks' ),
		keywords: [
			__( 'Sketchpad-modified-Blocks — Biim System Block', 'sketchpad-modified-blocks' ),
			__( 'Biim', 'sketchpad-modified-blocks' ),
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
		edit: ( { attributes, setAttributes, className } ) => {
			const TEMPLATE = [
				[ 'core/image', { className: 'sketchpad-modified-blocks-biim-screen' } ],
				[ 'sketchpad-modified-blocks/biim-navigationbar', { className: 'skethcpad-modified-blocks-biim-navigationbar' } ]
			]
			return (
				<div className={ className } data-type={ 'sketchpad-modified-blocks/biim' }>
					<InnerBlocks
						template={ TEMPLATE }
						templateLock={ 'all' }
					/>
				</div>
			);
		},
		save: ( { attributes, className } ) => {
			return (
				<div>
					<InnerBlocks.Content />
				</div>
			);
		},
		example: {
			attributes: {
			}
		}
	}
);
