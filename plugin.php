<?php
/**
 * Plugin Name: sketchpad-modified-blocks — CGB Gutenberg Block Plugin
 * Plugin URI: https://github.com/Angelmaneuver/sketchpad-modified-blocks
 * Description: sketchpad-modified-blocks — is a Gutenberg plugin created via create-guten-block.
 * Author: Angelmaneuver
 * Author URI: https://github.com/Angelmaneuver
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: sketchpad-modified-blocks
 * Domain Path: /languages
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/init.php';
