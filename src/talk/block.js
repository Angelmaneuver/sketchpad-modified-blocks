/**
 * Talk: sketchpad-modified-blocks
 */

import './editor.scss';
import './style.scss';
import { InnerBlocks, RichText } from '@wordpress/block-editor';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register: Internal Part of icon.
 */
registerBlockType( 'sketchpad-modified-blocks/talk-icon', {
	title: __( 'Icon Block', 'sketchpad-modified-blocks' ),
	icon: 'format-image',
	category: 'sketchpad-modified-blocks-internal-parts',
	description: __(
		'This block is unusable. (Sketchpad - modified Blocks internal use).',
		'sketchpad-modified-blocks'
	),
	parent: 'sketchpad-modified-blocks/talk',
	keywords: [
		__(
			'Sketchpad - modified Talk Blocks Internal Parts',
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
	styles: [
		{
			name: 'default',
			label: __( 'default', 'sketchpad-modified-blocks' ),
		},
		{
			name: 'rounded',
			label: __( 'Rounded Corners', 'sketchpad-modified-blocks' ),
			isDefault: true,
		},
	],
	edit: ( { attributes, setAttributes, className } ) => {
		const TEMPLATE = [ [ 'core/image', {} ] ];
		const ALLOW = [ 'core/image', 'core/paragraph' ];
		return (
			<div className={ className }>
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
 * Register: Internal Part of name.
 */
registerBlockType( 'sketchpad-modified-blocks/talk-name', {
	title: __( 'Name Block', 'sketchpad-modified-blocks' ),
	icon: 'editor-paragraph',
	category: 'sketchpad-modified-blocks-internal-parts',
	description: __(
		'This block is unusable. (Sketchpad - modified Blocks internal use).',
		'sketchpad-modified-blocks'
	),
	parent: 'sketchpad-modified-blocks/talk-messagebox',
	keywords: [
		__(
			'Sketchpad - modified Talk Blocks Internal Parts',
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
		const TEMPLATE = [ [ 'core/paragraph', {} ] ];
		return (
			<div className={ className }>
				<InnerBlocks template={ TEMPLATE } templateLock={ true } />
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
 * Register: Internal Part of message.
 */
registerBlockType( 'sketchpad-modified-blocks/talk-message', {
	title: __( 'Message', 'sketchpad-modified-blocks' ),
	icon: 'editor-paragraph',
	category: 'sketchpad-modified-blocks-internal-parts',
	description: __(
		'This block is unusable. (Sketchpad - modified Blocks internal use).',
		'sketchpad-modified-blocks'
	),
	parent: 'sketchpad-modified-blocks/talk-messages',
	keywords: [
		__(
			'Sketchpad - modified Talk Blocks Internal Parts',
			'sketchpad-modified-blocks'
		),
		__( '', 'sketchpad-modified-blocks' ),
		__( '', 'sketchpad-modified-blocks' ),
	],
	supports: {
		inserter: true,
	},
	styles: [
		{
			name: 'talk',
			label: __( 'Talk style', 'sketchpad-modified-blocks' ),
			isDefault: true,
		},
		{
			name: 'mind-voice',
			label: __( 'Mind voice style', 'sketchpad-modified-blocks' ),
		},
	],
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			default: '',
			selector: '.sketchpad-modified-blocks-talk-message-content',
		},
	},
	edit: ( { attributes, setAttributes, className } ) => {
		const updateContent = ( value ) => {
			setAttributes( { content: value } );
		};
		return (
			<div className={ className }>
				<p>
					<RichText
						className="sketchpad-modified-blocks-talk-message-content"
						value={ attributes.content }
						onChange={ updateContent }
						placeholder={ __(
							'Start writing',
							'sketchpad-modified-blocks'
						) }
						keepPlaceholderOnFocus={ true }
					/>
				</p>
			</div>
		);
	},
	save: ( { attributes, className } ) => {
		return (
			<div>
				<p className="sketchpad-modified-blocks-talk-message-content">
					<RichText.Content value={ attributes.content } />
				</p>
			</div>
		);
	},
} );

/**
 * Register: Internal Part of messages.
 */
registerBlockType( 'sketchpad-modified-blocks/talk-messages', {
	title: __( 'Messages Block', 'sketchpad-modified-blocks' ),
	icon: 'editor-paragraph',
	category: 'sketchpad-modified-blocks-internal-parts',
	description: __(
		'This block is unusable. (Sketchpad - modified Blocks internal use).',
		'sketchpad-modified-blocks'
	),
	parent: 'sketchpad-modified-blocks/talk-messagebox',
	keywords: [
		__(
			'Sketchpad - modified Talk Blocks Internal Parts',
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
		const TEMPLATE = [ [ 'sketchpad-modified-blocks/talk-message', {} ] ];
		const ALLOW = [ 'sketchpad-modified-blocks/talk-message' ];
		return (
			<div className={ className }>
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
 * Register: Internal Part of messagebox.
 */
registerBlockType( 'sketchpad-modified-blocks/talk-messagebox', {
	title: __( 'Message Box Block', 'sketchpad-modified-blocks' ),
	icon: 'editor-paragraph',
	category: 'sketchpad-modified-blocks-internal-parts',
	description: __(
		'This block is unusable. (Sketchpad - modified Blocks internal use).',
		'sketchpad-modified-blocks'
	),
	parent: 'sketchpad-modified-blocks/talk',
	keywords: [
		__(
			'Sketchpad - modified Talk Blocks Internal Parts',
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
			[ 'sketchpad-modified-blocks/talk-name', {} ],
			[ 'sketchpad-modified-blocks/talk-messages', {} ],
		];
		return (
			<div className={ className }>
				<InnerBlocks template={ TEMPLATE } templateLock={ true } />
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
 * Register: Talk Block.
 */
registerBlockType( 'sketchpad-modified-blocks/talk', {
	title: __( 'Talk Block', 'sketchpad-modified-blocks' ),
	icon: 'admin-comments',
	category: 'sketchpad-modified-blocks',
	description: __( 'Talk Block.', 'sketchpad-modified-blocks' ),
	keywords: [
		__(
			'Sketchpad-modified-Blocks — Talk Block',
			'sketchpad-modified-blocks'
		),
		__( 'Talk', 'sketchpad-modified-blocks' ),
		__( '', 'sketchpad-modified-blocks' ),
	],
	supports: {
		html: false,
	},
	styles: [
		{
			name: 'left',
			label: __( 'Chat message left style', 'sketchpad-modified-blocks' ),
			isDefault: true,
		},
		{
			name: 'right',
			label: __(
				'Chat message right style',
				'sketchpad-modified-blocks'
			),
		},
	],
	edit: ( { attributes, setAttributes, className } ) => {
		const TEMPLATE = [
			[
				'sketchpad-modified-blocks/talk-icon',
				{ className: 'is-style-rounded' },
			],
			[ 'sketchpad-modified-blocks/talk-messagebox', {} ],
		];
		return (
			<div className={ className }>
				<InnerBlocks template={ TEMPLATE } templateLock={ true } />
			</div>
		);
	},
	save: ( { attributes, className } ) => {
		return (
			<div
				className={ className }
				data-type={ 'sketchpad-modified-blocks/talk' }
				data-talk-trigger
			>
				<InnerBlocks.Content />
			</div>
		);
	},
} );
