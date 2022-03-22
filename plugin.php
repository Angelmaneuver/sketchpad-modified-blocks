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

/**
 * Path Constant.
 */
define( 'SMBROOT', plugin_dir_path( __FILE__ ) );
define( 'SMBINC', '/includes' );
define( 'SMBBLOCKS', '/blocks' );
define( 'SMBJS', '/assets/js' );
define( 'SMBLANGUAGES', '/languages' );

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
		dirname( plugin_basename( __FILE__ ) ) . SMBLANGUAGES
	);
}

add_action( 'init', 'sketchpad_modified_blocks_init' );

/**
 * Modules loading.
 */
require_once __DIR__ . '/includes/load.php';
