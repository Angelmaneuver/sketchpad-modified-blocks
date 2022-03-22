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
import { Fragment }      from '@wordpress/element';
import {
	useBlockProps,
	InspectorControls
}                        from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	TextControl
}                        from '@wordpress/components';
import ServerSideRender  from '@wordpress/server-side-render';

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
export default function Edit( props ) {
	const updateBaseDirectory = ( value ) => {
		props.setAttributes( { baseDirectory: value } );
	};

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title       = { __( 'File Data Display Configuration', 'sketchpad-modified-blocks' ) }
					initialOpen = { true }
				>
					<PanelRow>
						<TextControl
							label     = { __( 'Enter the directory where you want to search for files from the Get parameter. * Only under the WordPress installation directory.', 'sketchpad-modified-blocks' ) }
							className = "sketchpad-modified-blocks-file-data-display-by-get-base-directory"
							value     = { props.attributes.baseDirectory }
							onChange  = { updateBaseDirectory }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() } >
				<ServerSideRender
					block      = { props.name }
					attributes = { props.attributes }
				/>
			</div>
		</Fragment>
	);
}
