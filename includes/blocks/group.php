<?php
/**
 * Server side block related function.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * Registers the block on the server.
 *
 * @return void
 */
function register_sketchpad_modified_block_group():void {
	sketchpad_modified_blocks_register_block_type_from_metadata(
		SMBROOT . SMBBLOCKS . '/group',
	);
}

add_action( 'init', 'register_sketchpad_modified_block_group' );

/**
 * Block display control.
 *
 * @param  null     $pre_render   Block default pre content.
 * @param  array    $block        The full block, including name and attributes.
 * @param  WP_Block $parent_block Parent block instance.
 * @return null|string Blank text if the conditions are met.
 */
function pre_render_filter_sketchpad_modified_block_group( $pre_render, $block, $parent_block ) {
	if ( 'sketchpad-modified-blocks/group' === $block['blockName'] ) {
		$is_show_no_posts     = isset( $block['attrs']['isShowNoPosts'] ) ? $block['attrs']['isShowNoPosts'] : false;
		$is_show_has_category = isset( $block['attrs']['isShowHasCategory'] ) ? $block['attrs']['isShowHasCategory'] : false;

		if ( $is_show_no_posts ) {
			$pre_render = have_posts() ? '' : $pre_render;
		}

		if ( $is_show_has_category ) {
			$pre_render = has_category() ? $pre_render : '';
		}
	}

	return $pre_render;
}

add_filter( 'pre_render_block', 'pre_render_filter_sketchpad_modified_block_group', 10, 3 );
