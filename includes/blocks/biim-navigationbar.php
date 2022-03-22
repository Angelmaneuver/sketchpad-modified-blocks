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
function register_sketchpad_modified_block_biim_navigationbar():void {
	sketchpad_modified_blocks_register_block_type_from_metadata( SMBROOT . SMBBLOCKS . '/biim-navigationbar' );
}

add_action( 'init', 'register_sketchpad_modified_block_biim_navigationbar' );
