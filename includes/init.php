<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.1
 * @package Sketchpad-modified-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function sketchpad_modified_blocks_cgb_block_assets() { // phpcs:ignore
	// Register block styles for both frontend + backend.
	wp_register_style(
		'sketchpad_modified_blocks-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		is_admin() ? array( 'wp-editor' ) : null, // Dependency to include the CSS after it.
		(string) filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ), // Version: File modification time.
		'all'
	);

	// Register block editor script for backend.
	wp_register_script(
		'sketchpad_modified_blocks-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), // Dependencies, defined above.
		(string) filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Register block editor styles for backend.
	wp_register_style(
		'sketchpad_modified_blocks-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		(string) filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ), // Version: File modification time.
		'all'
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `cgbGlobal` object.
	wp_localize_script(
		'sketchpad_modified_blocks-cgb-block-js',
		'cgbGlobal', // Array containing dynamic data for a JS Global.
		array(
			'pluginDirPath' => plugin_dir_path( __DIR__ ),
			'pluginDirUrl'  => plugin_dir_url( __DIR__ ),
			// Add more data here that you want to access from `cgbGlobal` object.
		)
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'cgb/block-sketchpad-modified-blocks', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'sketchpad_modified_blocks-cgb-style-css',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'sketchpad_modified_blocks-cgb-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'sketchpad_modified_blocks-cgb-block-editor-css',
		)
	);

	wp_set_script_translations(
		'sketchpad_modified_blocks-cgb-block-js',
		'sketchpad-modified-blocks',
		dirname( plugin_dir_path( __FILE__ ) ) . '/languages'
	);
}

/**
 * Register other scripts.
 *
 * @since 1.0.1
 */
function sketchpad_modified_blocks_script() {
	if ( is_singular() ) {
		wp_enqueue_script( 'clipboard' );
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
			'scrolltrigger',
			'https://cdnjs.cloudflare.com/ajax/libs/ScrollTrigger/1.0.5/ScrollTrigger.min.js',
			array(),
			false,
			true
		);

		wp_enqueue_script(
			'sketchpad-modified-blocks-clipboard',
			plugins_url( 'js/clipboard.js', dirname( __FILE__ ) ),
			array( 'jquery', 'wp-i18n', 'toastr' ),
			(string) filemtime( plugin_dir_path( __DIR__ ) . 'js/clipboard.js' ),
			true
		);
		wp_enqueue_script(
			'sketchpad-modified-blocks-datatriger',
			plugins_url( 'js/datatrigger.js', dirname( __FILE__ ) ),
			array( 'jquery', 'scrolltrigger' ),
			(string) filemtime( plugin_dir_path( __DIR__ ) . 'js/datatrigger.js' ),
			true
		);

		wp_set_script_translations(
			'sketchpad-modified-blocks-clipboard',
			'sketchpad-modified-blocks',
			dirname( plugin_dir_path( __FILE__ ) ) . '/languages'
		);
	}
}

/**
 * Register block categories.
 *
 * @since 1.0.1
 * @param Array   $default_categories Array of block categories.
 * @param WP_Post $post Post being loaded.
 * @return Array Array after adding block categories.
 */
function sketchpad_modified_block_categories( $default_categories, $post ) {
	return array_merge(
		$default_categories,
		array(
			array(
				'slug'  => 'sketchpad-modified-blocks',
				'title' => __( 'Sketchpad - modified Blocks', 'sketchpad-modified-blocks' ),
				'icon'  => 'portfolio',
			),
			array(
				'slug'  => 'sketchpad-modified-blocks-internal-parts',
				'title' => __( 'Sketchpad - modified Blocks Internal Parts', 'sketchpad-modified-blocks' ),
				'icon'  => 'portfolio',
			),
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'sketchpad_modified_blocks_cgb_block_assets' );
add_action( 'wp_enqueue_scripts', 'sketchpad_modified_blocks_script' );

add_filter( 'block_categories', 'sketchpad_modified_block_categories', 10, 2 );
