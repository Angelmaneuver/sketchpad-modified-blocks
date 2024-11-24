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
	InspectorControls,
	AlignmentControl,
	BlockControls,
	RichText,
	Warning,
	useBlockProps
}                       from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	TextControl
}                       from '@wordpress/components';
import {
	useState,
	useEffect
} from '@wordpress/element';
import apiFetch         from '@wordpress/api-fetch';
import { addQueryArgs } from '@wordpress/url';
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
export default function Edit( { attributes, setAttributes, context } ) {
	const postId                              = context.postId;
	const textAlign                           = attributes.textAlign;
	const isLink                              = attributes.isLink;
	const anchor                              = attributes.anchor;
	const [ commentsCount, setCommentsCount ] = useState();
	const blockProps                          = useBlockProps({
		className: clsx(`has-text-align-${textAlign}`, textAlign),
	} );

	useEffect( () => {
		if ( ! postId ) {
			return;
		}

		const currentPostId = postId;

		apiFetch( {
			path: addQueryArgs( '/wp/v2/comments', {
				post: postId,
			} ),
			parse: false,
		} ).then( ( response ) => {
			if ( currentPostId === postId ) {
				setCommentsCount( response.headers.get( 'X-WP-Total' ) );
			}
		} )
	}, [ postId ] );

	return (
		<>
			<BlockControls group = "block">
				<AlignmentControl
					value    = { textAlign }
					onChange = { ( value ) => { setAttributes( { textAlign: value } ); } }
				/>
			</BlockControls>
			<InspectorControls>
				<PanelBody>
					<ToggleControl
						label    = { __( 'Make the post comments count on the post a link.', 'sketchpad-modified-blocks' ) }
						checked  = { isLink }
						onChange = { () => setAttributes( { isLink: ! isLink } ) }
					/>
					{ isLink ? (
						<TextControl
							label       = { __( 'Enter the value you want to link destination.', 'sketchpad-modified-blocks' ) }
							placeholder = { __( 'Anchor string without "#"', 'sketchpad-modified-blocks' ) }
							value       = { anchor }
							onChange    = { ( value ) => setAttributes( { anchor: value } ) }
						/>
					) : '' }
				</PanelBody>
			</InspectorControls>
			<div { ...blockProps }>
				<RichText
					tagName     = 'p'
					aria-label  = { __( 'Post comments count before text', 'sketchpad-modified-blocks' ) }
					placeholder = { __( 'Before post comments count', 'sketchpad-modified-blocks' ) }
					value       = { attributes.beforeText }
					onChange    = { ( value ) => setAttributes( { beforeText: value } ) }
				/>
				{ postId && commentsCount !== undefined ? (
					commentsCount
				) : (
					<Warning>
						{ __( 'Post Comments Count block: post not found.', 'sketchpad-modified-blocks' ) }
					</Warning>
				) }
				<RichText
					tagName     = 'p'
					aria-label  = { __( 'Post comments count after text', 'sketchpad-modified-blocks' ) }
					placeholder = { __( 'After post comments count', 'sketchpad-modified-blocks' ) }
					value       = { attributes.afterText }
					onChange    = { ( value ) => setAttributes( { afterText: value } ) }
				/>
			</div>
		</>
	);
}
