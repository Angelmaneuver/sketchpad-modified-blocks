<?php
/**
 * Server side block related function.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * Post Comments Count Render function.
 *
 * @param  array    $attributes Block attributes.
 * @param  string   $content    Context.
 * @param  WP_Block $block      Block instance.
 * @return string               HTML String.
 */
function render_sketchpad_modified_blocks_post_comments_count( $attributes, $content, $block ):string {
	if ( ! isset( $block->context['postId'] ) ) {
		return '';
	}

	$post_id        = $block->context['postId'];
	$comments_count = get_comments_number( $post_id );

	if ( ! is_string( $comments_count ) || '0' === $comments_count ) {
		return '';
	}

	$label              = esc_html(
		sprintf(
			'%1$s%2$s%3$s',
			( isset( $attributes['preLabel'] ) ? $attributes['preLabel'] : '' ),
			$comments_count,
			( isset( $attributes['afterLabel'] ) ? $attributes['afterLabel'] : '' )
		)
	);
	$is_link            = isset( $attributes['isLink'] ) ? $attributes['isLink'] : false;
	$anchor             = isset( $attributes['anchor'] ) ? $attributes['anchor'] : '';
	$label              = sprintf(
		'%1$s%2$s%3$s',
		( $is_link ? '<a href="' . get_the_permalink( $post_id ) . '#' . esc_attr( $anchor ) . '">' : '' ),
		$label,
		( $is_link ? '</a>' : '' )
	);
	$format             = '<div %1$s>%2$s</div>';
	$classes            = isset( $attributes['textAlign'] ) && ! empty( $attributes['textAlign'] ) ? "has-text-align-{$attributes['textAlign']}" : '';
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $classes ) );

	return sprintf(
		$format,
		$wrapper_attributes,
		$label,
	);
}

/**
 * Registers the block on the server.
 *
 * @return void
 */
function register_sketchpad_modified_block_post_comments_count():void {
	sketchpad_modified_blocks_register_block_type_from_metadata(
		SMBROOT . SMBBLOCKS . '/post-comments-count',
		array(
			'render_callback' => 'render_sketchpad_modified_blocks_post_comments_count',
		)
	);
}

add_action( 'init', 'register_sketchpad_modified_block_post_comments_count' );
