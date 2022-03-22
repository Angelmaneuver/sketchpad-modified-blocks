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
function register_sketchpad_modified_block_talk():void {
	sketchpad_modified_blocks_register_block_type_from_metadata( SMBROOT . SMBBLOCKS . '/talk' );
}

add_action( 'init', 'register_sketchpad_modified_block_talk' );

/**
 * Enqueue the block script on the server.
 *
 * @return void
 */
function enqueue_script_sketchpad_modified_block_talk():void {
	wp_enqueue_script(
		'scrolltrigger',
		'https://cdnjs.cloudflare.com/ajax/libs/ScrollTrigger/1.0.5/ScrollTrigger.min.js',
		array(),
		false,
		true
	);
	wp_enqueue_script(
		'sketchpad-modified-blocks-datatriger',
		plugins_url( SMBJS . '/datatrigger.js', SMBROOT . 'plugin.php' ),
		array( 'jquery', 'scrolltrigger' ),
		(string) filemtime( SMBROOT . SMBJS . '/datatrigger.js' ),
		true
	);
}

add_action( 'wp_enqueue_scripts', 'enqueue_script_sketchpad_modified_block_talk' );
