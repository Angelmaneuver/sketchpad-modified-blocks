<?php
/**
 * Server side block related function.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * Search Keyword Render function.
 *
 * @param  array    $attributes Block attributes.
 * @param  string   $content    Block default content.
 * @param  WP_Block $block      Block instance.
 * @return string               HTML String.
 */
function render_sketchpad_modified_blocks_search_keyword( $attributes, $content, $block ):string {
	$search_keyword     = get_search_query();
	$before_text        = isset( $attributes['beforeText'] ) ? $attributes['beforeText'] : '';
	$after_text         = isset( $attributes['afterText'] ) ? $attributes['afterText'] : '';
	$format             = '<' . $attributes['tagName'] . ' %1$s>%2$s</' . $attributes['tagName'] . '>';
	$classes            = isset( $attributes['textAlign'] ) && ! empty( $attributes['textAlign'] ) ? "has-text-align-{$attributes['textAlign']}" : '';
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $classes ) );

	return sprintf(
		$format,
		$wrapper_attributes,
		esc_html( "{$before_text}{$search_keyword}{$after_text}" ),
	);
}

/**
 * Registers the block on the server.
 *
 * @return void
 */
function register_sketchpad_modified_block_search_keyword():void {
	sketchpad_modified_blocks_register_block_type_from_metadata(
		SMBROOT . SMBBLOCKS . '/search-keyword',
		array(
			'render_callback' => 'render_sketchpad_modified_blocks_search_keyword',
		)
	);
}

add_action( 'init', 'register_sketchpad_modified_block_search_keyword' );
