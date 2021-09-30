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
function sketchpad_modified_blocks_tag_list( $block_attributes, $content ):string {
	$tags = '';

	foreach ( get_tags( array( 'orderby' => 'name' ) ) as $tag ) {
		$tags .= '<li class="' . esc_attr( 'tag-' . $tag->slug ) . '"><a href="' . get_tag_link( $tag->term_id ) . '">' . esc_html( $tag->name ) . '</a></li>';
	}

	return '<ul class="wp-block-sketchpad-modified-blocks-tag-list">' . $tags . '</ul>';
}
