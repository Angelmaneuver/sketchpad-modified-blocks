/**
 * Biim System: sketchpad-modified-blocks
 */

import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const {
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	InnerBlocks,
	RichText,
} = wp.blockEditor;
const { PanelBody, FontSizePicker } = wp.components;

const Preset = {
	Font: {
		Sizes: [
			{
				name: __( 'Small' ),
				slug: 'small',
				size: 13,
			},
			{
				name: __( 'Standard' ),
				slug: 'standard',
				size: 16,
			},
			{
				name: __( 'Medium' ),
				slug: 'medium',
				size: 20,
			},
			{
				name: __( 'Large' ),
				slug: 'large',
				size: 36,
			},
			{
				name: __( 'Extra Large' ),
				slug: 'huge',
				size: 42,
			},
		],
		Size2Class: ( value ) => {
			let keyword = '';

			switch ( value ) {
				case 13:
					keyword = 'small';
					break;
				case 16:
					keyword = 'standard';
					break;
				case 20:
					keyword = 'medium';
					break;
				case 36:
					keyword = 'large';
					break;
				case 42:
					keyword = 'huge';
					break;
				default:
			}

			return keyword === '' ? '' : ' has-' + keyword + '-font-size';
		},
		alignment2Class: ( value ) => {
			return value === undefined || value === null || value === ''
				? ''
				: ' has-text-align-' + value;
		},
	},
};

/**
 * Register: Internal Part of paragraph.
 */
registerBlockType( 'sketchpad-modified-blocks/biim-paragraph', {
	title: __( 'Paragraph', 'sketchpad-modified-blocks' ),
	icon: 'editor-paragraph',
	category: 'sketchpad-modified-blocks-internal-parts',
	description: __(
		'This block is unusable. (Sketchpad - modified Blocks internal use).',
		'sketchpad-modified-blocks'
	),
	parent: 'sketchpad-modified-blocks/biim-paragraphs',
	keywords: [
		__(
			'Sketchpad - modified Biim Blocks Internal Parts',
			'sketchpad-modified-blocks'
		),
		__( '', 'sketchpad-modified-blocks' ),
		__( '', 'sketchpad-modified-blocks' ),
	],
	supports: {
		html: false,
		inserter: true,
		reusable: false,
	},
	styles: [
		{
			name: 'bottom',
			label: __( 'Bottom line style', 'sketchpad-modified-blocks' ),
		},
	],
	attributes: {
		alignment: {
			type: 'string',
			default: '',
		},
		fontSize: {
			type: 'number',
			default: null,
		},
		content: {
			type: 'string',
			source: 'html',
			default: '',
			selector: '.sketchpad-modified-blocks-biim-paragraph-content',
		},
	},
	edit: ( { attributes, setAttributes, className } ) => {
		const updateAlignment = ( value ) => {
			setAttributes( {
				alignment: value === null ? '' : value,
			} );
		};
		const updateFontSize = ( value ) => {
			setAttributes( {
				fontSize: value,
			} );
		};
		const updateContent = ( value ) => {
			setAttributes( { content: value } );
		};
		const textAlignment = Preset.Font.alignment2Class(
			attributes.alignment
		);
		const textFontSize = Preset.Font.Size2Class( attributes.fontSize );
		const classValue =
			'sketchpad-modified-blocks-biim-paragraph-content' +
			textAlignment +
			textFontSize;
		const styleValue =
			Preset.Font.Size2Class( attributes.fontSize ) === ''
				? { fontSize: attributes.fontSize }
				: {};
		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={ attributes.alignment }
						onChange={ updateAlignment }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( 'Typography' ) }>
						<FontSizePicker
							fontSizes={ Preset.Font.Sizes }
							value={ attributes.fontSize }
							onChange={ updateFontSize }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ className }>
					<RichText
						tagName="p"
						className={ classValue }
						style={ styleValue }
						value={ attributes.content }
						onChange={ updateContent }
						placeholder={ __(
							'Start writing',
							'sketchpad-modified-blocks'
						) }
						keepPlaceholderOnFocus={ true }
					/>
				</div>
			</Fragment>
		);
	},
	save: ( { attributes, className } ) => {
		const textAlignment = Preset.Font.alignment2Class(
			attributes.alignment
		);
		const textFontSize = Preset.Font.Size2Class( attributes.fontSize );
		const classValue =
			'sketchpad-modified-blocks-biim-paragraph-content' +
			textAlignment +
			textFontSize;
		const styleValue =
			Preset.Font.Size2Class( attributes.fontSize ) === ''
				? { fontSize: attributes.fontSize }
				: {};
		return (
			<div>
				<RichText.Content
					tagName="p"
					className={ classValue }
					style={ styleValue }
					value={ attributes.content }
				/>
			</div>
		);
	},
} );

/**
 * Register: Internal Part of paragraphs.
 */
registerBlockType( 'sketchpad-modified-blocks/biim-paragraphs', {
	title: __( 'Messages Block', 'sketchpad-modified-blocks' ),
	icon: 'editor-paragraph',
	category: 'sketchpad-modified-blocks-internal-parts',
	description: __(
		'This block is unusable. (Sketchpad - modified Blocks internal use).',
		'sketchpad-modified-blocks'
	),
	parent: 'sketchpad-modified-blocks/biim',
	keywords: [
		__(
			'Sketchpad - modified Biim System Blocks Internal Parts',
			'sketchpad-modified-blocks'
		),
		__( '', 'sketchpad-modified-blocks' ),
		__( '', 'sketchpad-modified-blocks' ),
	],
	supports: {
		html: false,
		inserter: false,
		reusable: false,
	},
	styles: [],
	edit: ( { attributes, setAttributes, className } ) => {
		const TEMPLATE = [ [ 'sketchpad-modified-blocks/biim-paragraph', {} ] ];
		const ALLOW = [ 'sketchpad-modified-blocks/biim-paragraph' ];
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
} );

/**
 * Register: Internal Part of navigationbar.
 */
registerBlockType( 'sketchpad-modified-blocks/biim-navigationbar', {
	title: __( 'Biim Navigation bar Block', 'sketchpad-modified-blocks' ),
	icon: 'editor-paragraph',
	category: 'sketchpad-modified-blocks-internal-parts',
	description: __(
		'This block is unusable. (Sketchpad - modified Blocks internal use).',
		'sketchpad-modified-blocks'
	),
	parent: 'sketchpad-modified-blocks/biim',
	keywords: [
		__(
			'Sketchpad - modified Biim System Blocks Internal Parts',
			'sketchpad-modified-blocks'
		),
		__( '', 'sketchpad-modified-blocks' ),
		__( '', 'sketchpad-modified-blocks' ),
	],
	supports: {
		html: false,
		inserter: false,
		reusable: false,
	},
	styles: [],
	edit: ( { attributes, setAttributes, className } ) => {
		const TEMPLATE = [
			[
				'core/image',
				{ className: 'sketchpad-modified-blocks-biim-icon' },
			],
			[
				'sketchpad-modified-blocks/biim-paragraphs',
				{ className: 'sketchpad-modified-blocks-biim-messagebox' },
			],
		];
		return (
			<div className={ className }>
				<InnerBlocks template={ TEMPLATE } templateLock="all" />
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
} );

/**
 * Register: Biim System Block.
 */
registerBlockType( 'sketchpad-modified-blocks/biim', {
	title: __( 'Biim System Block', 'sketchpad-modified-blocks' ),
	icon: 'editor-paragraph',
	category: 'sketchpad-modified-blocks',
	description: __( 'Biim System Block.', 'sketchpad-modified-blocks' ),
	keywords: [
		__(
			'Sketchpad-modified-Blocks — Biim System Block',
			'sketchpad-modified-blocks'
		),
		__( 'Biim', 'sketchpad-modified-blocks' ),
		__( '', 'sketchpad-modified-blocks' ),
	],
	styles: [
		{
			name: 'default',
			label: __( 'default', 'sketchpad-modified-blocks' ),
			isDefault: true,
		},
		{
			name: 'no-vertical-margin',
			label: __( 'No Vertical Margin', 'sketchpad-modified-blocks' ),
		},
	],
	edit: ( { attributes, setAttributes, className } ) => {
		const TEMPLATE = [
			[
				'core/image',
				{ className: 'sketchpad-modified-blocks-biim-screen' },
			],
			[
				'sketchpad-modified-blocks/biim-navigationbar',
				{ className: 'skethcpad-modified-blocks-biim-navigationbar' },
			],
		];
		return (
			<div
				className={ className }
				data-type={ 'sketchpad-modified-blocks/biim' }
			>
				<InnerBlocks template={ TEMPLATE } templateLock={ 'all' } />
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
} );
