<?php
/**
 * Server side block related function.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * Tag List Render function.
 *
 * @param  array  $block_attributes Block attributes.
 * @param  string $content          Context.
 * @return string                   HTML String.
 */
function render_sketchpad_modified_blocks_tag_list( $block_attributes, $content ):string {
	$list_items_markup = '';

	foreach ( get_tags( array( 'orderby' => 'name' ) ) as $tag ) {
		$list_items_markup .= '<li>';

		$list_items_markup .= '<a href="' . get_tag_link( $tag->term_id ) . '">' . esc_html( $tag->name ) . '</a>';

		$list_items_markup .= '</li>';
	}

	$wrapper_attributes = get_block_wrapper_attributes();

	return sprintf(
		'<ul %1$s>%2$s</ul>',
		$wrapper_attributes,
		$list_items_markup
	);
}

/**
 * Registers the block on the server.
 *
 * @return void
 */
function register_sketchpad_modified_block_tag_list():void {
	sketchpad_modified_blocks_register_block_type_from_metadata(
		SMBROOT . SMBBLOCKS . '/tag-list',
		array(
			'render_callback' => 'render_sketchpad_modified_blocks_tag_list',
		)
	);
}

add_action( 'init', 'register_sketchpad_modified_block_tag_list' );
