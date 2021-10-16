<?php
/**
 * Render function.
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

	$class = 'wp-block-sketchpad-modified-blocks-tag-list';

	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $class ) );

	return sprintf(
		'<ul %1$s>%2$s</ul>',
		$wrapper_attributes,
		$list_items_markup
	);
}
