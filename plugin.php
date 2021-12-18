<?php
/**
 * Plugin Name:       Sketchpad modified - Blocks
 * Plugin URI:        https://github.com/Angelmaneuver/sketchpad-modified-blocks
 * Description:       Custom Gutenberg Blocks for myself.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Angelmaneuver
 * Author URI:        https://github.com/Angelmaneuver
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       sketchpad-modified-blocks
 * Domain Path:       /languages
 *
 * @package           Skethcpad modified - Blocks
 */

// Modules loading.
require_once __DIR__ . '/includes/load.php';

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function sketchpad_modified_blocks_init() {
	load_plugin_textdomain(
		'sketchpad-modified-blocks',
		false,
		dirname( plugin_basename( __FILE__ ) ) . '/languages'
	);

	wp_register_script(
		'sketchpad-modified-blocks-copy-js',
		plugins_url( '/blocks/components/copy/copy.js', __FILE__ ),
		array( 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-element', 'wp-i18n', 'wp-polyfill' ),
		(string) filemtime( plugin_dir_path( __FILE__ ) . 'blocks/components/copy/copy.js' ),
		true,
	);

	wp_set_script_translations(
		'sketchpad-modified-blocks-copy-js',
		'sketchpad-modified-blocks',
		__DIR__ . '/languages'
	);

	register_block_type( __DIR__ . '/blocks/json/annotations' );
	register_block_type( __DIR__ . '/blocks/json/biim' );
	register_block_type( __DIR__ . '/blocks/json/biim/parts/navigationbar' );
	register_block_type( __DIR__ . '/blocks/json/biim/parts/paragraphs' );
	register_block_type( __DIR__ . '/blocks/json/copy' );
	register_block_type( __DIR__ . '/blocks/json/talk' );
	register_block_type(
		__DIR__ . '/blocks/json/table-of-contents',
		array(
			'render_callback' => 'render_sketchpad_modified_blocks_table_of_contents',
		)
	);
	register_block_type(
		__DIR__ . '/blocks/json/tag-list',
		array(
			'render_callback' => 'render_sketchpad_modified_blocks_tag_list',
		)
	);
	register_block_type( __DIR__ . '/blocks/json/talk/parts/icon' );
	register_block_type( __DIR__ . '/blocks/json/talk/parts/messagebox' );
	register_block_type( __DIR__ . '/blocks/json/talk/parts/name' );
	register_block_type( __DIR__ . '/blocks/json/talk/parts/messages' );
	register_block_type( __DIR__ . '/blocks/json/talk/parts/message' );
}

add_action( 'init', 'sketchpad_modified_blocks_init' );

/**
 * Register scripts.
 *
 * @since 0.1.0
 * @see   https://developer.wordpress.org/reference/hooks/wp_enqueue_scripts/
 */
function sketchpad_modified_blocks_scripts() {
	if ( is_singular() ) {
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
			'scrolltrigger',
			'https://cdnjs.cloudflare.com/ajax/libs/ScrollTrigger/1.0.5/ScrollTrigger.min.js',
			array(),
			false,
			true
		);
		wp_enqueue_script(
			'smoothscroll',
			'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js',
			array(),
			false,
			true
		);

		wp_enqueue_script(
			'sketchpad-modified-blocks-clipboard',
			plugins_url( 'js/clipboard.js', __FILE__ ),
			array( 'jquery', 'wp-i18n', 'toastr' ),
			(string) filemtime( plugin_dir_path( __FILE__ ) . 'js/clipboard.js' ),
			true
		);
		wp_enqueue_script(
			'sketchpad-modified-blocks-datatriger',
			plugins_url( 'js/datatrigger.js', __FILE__ ),
			array( 'jquery', 'scrolltrigger' ),
			(string) filemtime( plugin_dir_path( __FILE__ ) . 'js/datatrigger.js' ),
			true
		);
		wp_enqueue_script(
			'sketchpad-modified-blocks-toc',
			plugins_url( 'js/toc.js', __FILE__ ),
			array( 'jquery', 'smoothscroll' ),
			(string) filemtime( plugin_dir_path( __FILE__ ) . 'js/toc.js' ),
			true
		);

		wp_set_script_translations(
			'sketchpad-modified-blocks-clipboard',
			'sketchpad-modified-blocks',
			__DIR__ . '/languages'
		);
	}
}

add_action( 'wp_enqueue_scripts', 'sketchpad_modified_blocks_scripts' );

/**
 * Register block categories.
 *
 * @since  0.1.0
 * @param  Array                   $block_categories Array of categories for block types.
 * @param  WP_Block_Editor_Context $block_editor_context The current block editor context.
 * @return Array                   Array after adding block categories.
 * @see    https://developer.wordpress.org/reference/hooks/block_categories_all/
 */
function sketchpad_modified_blocks_categories( $block_categories, $block_editor_context ) {
	return array_merge(
		$block_categories,
		array(
			array(
				'slug'  => 'sketchpad-modified-blocks',
				'title' => __( 'Sketchpad Modified - Blocks', 'sketchpad-modified-blocks' ),
				'icon'  => 'portfolio',
			),
		)
	);
}

add_filter( 'block_categories_all', 'sketchpad_modified_blocks_categories', 10, 2 );
