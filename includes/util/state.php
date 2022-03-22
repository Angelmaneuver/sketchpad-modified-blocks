<?php
/**
 * State utility functions.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * Wrapper function (wp_get_raw_referer).
 *
 * @return string Referer URL on success, '' on failure.
 */
function sketchpad_modified_blocks_get_raw_referer(): string {
	return is_string( wp_get_raw_referer() ) ? wp_get_raw_referer() : '';
}

/**
 * Determine if a being edited.
 *
 * @return boolean
 */
function sketchpad_modified_blocks_is_edit(): bool {
	$referer          = sketchpad_modified_blocks_get_raw_referer();
	$is_edit          = 1 === preg_match( '~/wp-admin/post\.php\?(post|page)=\d+&action=edit~', $referer );
	$is_widgets_edit  = false !== strpos( $referer, '/wp-admin/widgets.php' );
	$is_site_edit     = false !== strpos( $referer, '/wp-admin/site-editor.php' );
	$is_custmize_edit = ! is_singular() && false !== strpos( $referer, '/wp-admin/customize.php' );

	return $is_edit || $is_widgets_edit || $is_site_edit || $is_custmize_edit;
}
