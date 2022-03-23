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
	useBlockProps,
	useInnerBlocksProps
}                       from '@wordpress/block-editor';

import {
	PanelBody,
	SelectControl,
	ToggleControl
}                       from '@wordpress/components';

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
export default function Edit( { attributes, setAttributes } ) {
	const {
		tagName: TagName = 'div',
		isShowNoPosts,
		isShowHasCategory
	}                             = attributes;
	const blockProps              = useBlockProps();
	const innerBlocksProps        = useInnerBlocksProps( blockProps );
	return (
		<>
			<InspectorControls>
				<PanelBody
					title       = { __( 'Display control settings', 'sketchpad-modified-blocks' ) }
					initialOpen = { true }
				>
					<ToggleControl
						label    = { __( 'Display this block only if there are no query results.', 'sketchpad-modified-blocks' ) }
						checked  = { isShowNoPosts }
						onChange = { () => setAttributes( { isShowNoPosts: ! isShowNoPosts } ) }
					/>
					<ToggleControl
						label    = { __( 'Display this block only if the post has a category.', 'sketchpad-modified-blocks' ) }
						checked  = { isShowHasCategory }
						onChange = { () => setAttributes( { isShowHasCategory: ! isShowHasCategory } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<InspectorControls __experimentalGroup="advanced">
				<SelectControl
					label    = { __( 'HTML element' ) }
					value    = { TagName }
					options  = { [
						{ label: __( 'Default (<div>)' ), value: 'div' },
						{ label: '<section>',             value: 'section' },
					] }
					onChange = { ( value ) => setAttributes( { tagName: value } ) }
				/>
			</InspectorControls>
			<TagName { ...blockProps }>
				<div { ...innerBlocksProps } />
			</TagName>
		</>
	);
}
