<?php
/**
 * Register utility functions.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * Wrapper function (register_block_type_from_metadata).
 *
 * @param  string $file_or_folder Path to the JSON file with metadata definition for the block or path to the folder where the `block.json` file is located.
 * @param  array  $args           { Optional. Array of block type arguments. Accepts any public property of `WP_Block_Type`. Any arguments may be defined, however the ones described below are supported by default. Default empty array.
 * @return WP_Block_Type|false The registered block type on success, or false on failure.
 * @see    https://developer.wordpress.org/reference/functions/register_block_type_from_metadata/
 */
function sketchpad_modified_blocks_register_block_type_from_metadata(
	string $file_or_folder,
	$args = array()
) {
	$result = register_block_type_from_metadata( $file_or_folder, $args );

	if ( $result ) {
		if ( ! empty( $result->editor_script ) ) {
			wp_set_script_translations(
				$result->editor_script,
				'sketchpad-modified-blocks',
				SMBROOT . SMBLANGUAGES
			);
		}
	}

	return $result;
}
