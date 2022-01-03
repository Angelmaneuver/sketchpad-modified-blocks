<?php
/**
 * Render related functions.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * These modules are needed to load this function.
 */
require_once ABSPATH . 'wp-admin/includes/file.php';
require_once SMB_DIR . '/includes/util/state.php';

/**
 * File data display Render function.
 *
 * @param  array  $block_attributes Block attributes.
 * @param  string $content          Context.
 * @return string                   HTML String.
 */
function render_file_data_display_by_get( $block_attributes, $content ):string {
	$enable        = is_singular();
	$editing       = sketchpad_modified_blocks_is_edit();
	$base_dir      = ! empty( $block_attributes['baseDirectory'] ) ? $block_attributes['baseDirectory'] : '';
	$get_parameter = get_query_var( 'smbfdd' );

	if ( ( ! $enable && ! $editing ) || ( ! $editing & empty( $get_parameter ) ) ) {
		return '';
	} elseif ( ! $enable && $editing ) {
		$elements_markup = sprintf(
			'<div class="components-placeholder is-medium"><div class="components-placeholder__label"></div><div class="components-placeholder__fieldset">%1$s</div></div>',
			__( 'The file data display cannot be displayed on this page.', 'sketchpad-modified-blocks' )
		);
	} else {
		$elements_markup = '';

		if ( WP_Filesystem() ) {
			global $wp_filesystem;

			$target_directory = ABSPATH . $base_dir;
			$target_path      = realpath( $target_directory . '/' . $get_parameter );

			if ( false === strpos( $target_path, $target_directory ) ) {
				$elements_markup = sprintf(
					'<div class="request-error">%1$s</div>',
					__( 'Unauthorized request detected, terminated process...', 'sketchpad-modified-blocks' )
				);
			} else {
				$elements_markup = $wp_filesystem->get_contents( $target_path );
			}
		}
	}

	$wrapper_attributes = get_block_wrapper_attributes();

	return sprintf(
		'<div %1$s>%2$s</div>',
		$wrapper_attributes,
		$elements_markup
	);
}

/**
 * Adding query name to get parameters.
 *
 * @param  array $public_query_vars The array of allowed query variable names.
 * @return array                    After adding query.
 *
 * @see https://developer.wordpress.org/reference/hooks/query_vars/
 */
function sketchpad_modified_blocks_file_data_display_by_get_query_vars( $public_query_vars ): array {
	$public_query_vars[] = 'smbfdd';

	return $public_query_vars;
}

add_filter( 'query_vars', 'sketchpad_modified_blocks_file_data_display_by_get_query_vars' );
