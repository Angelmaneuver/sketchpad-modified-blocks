<?php
/**
 * Server side block related function.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * Post Edit Link Render function.
 *
 * @param  array    $attributes Block attributes.
 * @param  string   $content    Context.
 * @param  WP_Block $block      Block instance.
 * @return string               HTML String.
 */
function render_sketchpad_modified_blocks_post_edit_link( $attributes, $content, $block ):string {
	if ( ! isset( $block->context['postId'] ) ) {
		return '';
	}

	$post_id = $block->context['postId'];
	$link    = get_edit_post_link( $post_id );

	if ( null === $link ) {
		return '';
	}

	$label              = isset( $attributes['label'] ) && ! empty( $attributes['label'] ) ? $attributes['label'] : '';
	$format             = '<a %1$s href="%2$s">%3$s</a>';
	$wrapper_attributes = get_block_wrapper_attributes();

	return sprintf(
		$format,
		$wrapper_attributes,
		$link,
		$label
	);
}

/**
 * Registers the block on the server.
 *
 * @return void
 */
function register_sketchpad_modified_block_post_edit_link():void {
	sketchpad_modified_blocks_register_block_type_from_metadata(
		SMBROOT . SMBBLOCKS . '/post-edit-link',
		array(
			'render_callback' => 'render_sketchpad_modified_blocks_post_edit_link',
		)
	);
}

add_action( 'init', 'register_sketchpad_modified_block_post_edit_link' );
