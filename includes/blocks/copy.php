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
function register_sketchpad_modified_block_copy():void {
	sketchpad_modified_blocks_register_block_type_from_metadata( SMBROOT . SMBBLOCKS . '/copy' );
}

add_action( 'init', 'register_sketchpad_modified_block_copy' );

/**
 * Enqueue the block script on the server.
 *
 * @return void
 */
function enqueue_script_sketchpad_modified_block_copy():void {
	wp_enqueue_script( 'clipboard' );
	wp_enqueue_style( 'dashicons' );
	wp_enqueue_style(
		'toastr',
		'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css',
		array(),
		false,
		'screen'
	);
	wp_enqueue_script(
		'toastr',
		'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js',
		array( 'jquery' ),
		false,
		true
	);
	wp_enqueue_script(
		'sketchpad-modified-blocks-clipboard',
		plugins_url( SMBJS . '/clipboard.js', SMBROOT . 'plugin.php' ),
		array( 'jquery', 'wp-i18n', 'toastr' ),
		(string) filemtime( SMBROOT . SMBJS . '/clipboard.js' ),
		true
	);
	wp_set_script_translations(
		'sketchpad-modified-blocks-clipboard',
		'sketchpad-modified-blocks',
		SMBROOT . SMBLANGUAGES
	);
}

add_action( 'wp_enqueue_scripts', 'enqueue_script_sketchpad_modified_block_copy' );
