<?php
/**
 * Render related functions.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * These modules are needed to load this function.
 */
require_once SMB_DIR . '/includes/util/state.php';
require_once __DIR__ . '/class-smb-table-of-contents.php';

/**
 * Table of Contents Render function.
 *
 * @param  array  $block_attributes Block attributes.
 * @param  string $content          Context.
 * @return string                   HTML String.
 */
function render_sketchpad_modified_blocks_table_of_contents( $block_attributes, $content ):string {
	$enable  = sketchpad_modified_blocks_table_of_contents_enable();
	$editing = sketchpad_modified_blocks_is_edit();

	if ( ! $enable && ! $editing ) {
		return '';
	} elseif ( ! $enable && $editing ) {
		$format          = '<div %1$s>%2$s</div>';
		$elements_markup = sprintf(
			'<div class="components-placeholder is-medium"><div class="components-placeholder__label"></div><div class="components-placeholder__fieldset">%1$s</div></div>',
			__( 'The table of contents cannot be displayed on this page.', 'sketchpad-modified-blocks' )
		);
	} else {
		$format          = '<ul %1$s>%2$s</ul>';
		$elements_markup = ( new SMB_Table_Of_Contents( get_the_content(), true ) )->get_toc();
	}

	$wrapper_attributes = get_block_wrapper_attributes();

	return strlen( $elements_markup ) > 0 ? sprintf( $format, $wrapper_attributes, $elements_markup ) : '';
}

/**
 * Determine if the table of contents can be output.
 *
 * @return boolean
 */
function sketchpad_modified_blocks_table_of_contents_enable(): bool {
	return is_singular();
}

/**
 * Controlling the display of block widgets.
 *
 * @param  array $instance The widget settings.
 * @return array           Settings to display or bool false to hide.
 *
 * @see https://github.com/Automattic/jetpack/blob/master/projects/plugins/jetpack/modules/widget-visibility/widget-conditions.php
 */
function filter_widget_sketchpad_modified_blocks_table_of_contents( $instance ) {
	$request_uri = ! empty( $_SERVER['REQUEST_URI'] ) ? esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';

	if ( empty( $request_uri ) || strpos( wp_get_raw_referer(), '/wp-admin/widgets.php' ) && false !== strpos( $request_uri, '/wp-json/' ) ) {
		return $instance;
	}

	$current_url = $request_uri;
	$nonce       = ! empty( $_REQUEST['_gutenberg_nonce'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['_gutenberg_nonce'] ) ) : '';
	$context     = ! empty( $_REQUEST['context'] ) ? sanitize_text_field( wp_unslash( $_REQUEST['context'] ) ) : '';
	if ( wp_verify_nonce( $nonce, 'gutenberg_request' ) &&
		1 === preg_match( '~^/wp/v2/sites/\d+/(sidebars|widgets)~', $current_url ) && 'edit' === $context ) {
		return $instance;
	}

	if ( ! empty( $instance['content'] ) && has_blocks( $instance['content'] ) ) {
		if ( has_block( 'sketchpad-modified-blocks/table-of-contents', $instance['content'] ) ) {
			if ( ! sketchpad_modified_blocks_table_of_contents_enable() ) {
				return false;
			} elseif ( ! SMB_Table_Of_Contents::is_required_headlines_by_content( get_the_content() ) ) {
				return false;
			}
		}
	}

	return $instance;
}

add_filter( 'widget_display_callback', 'filter_widget_sketchpad_modified_blocks_table_of_contents' );

/**
 * Adding anchor to headline tags.
 *
 * @param  string $content Content of the current post.
 * @return string          After adding anchor.
 *
 * @see https://developer.wordpress.org/reference/hooks/the_content/
 */
function sketchpad_modified_blocks_toc_filter( string $content ): string {
	if ( ! ( is_singular() && in_the_loop() && is_main_query() ) ) {
		return $content;
	}

	$headlines = SMB_Table_Of_Contents::get_headlines( $content );

	if ( ! SMB_Table_Of_Contents::is_required_headlines( $headlines ) ) {
		return $content;
	}

	foreach ( $headlines as $key => $headline ) {
		$open    = $headline['open'];
		$close   = $headline['close'];
		$value   = $headline['value'];
		$content = preg_replace(
			'/' . preg_quote( "${open}${value}${close}", '/' ) . '/',
			"${open}<span id=\"" . SMB_Table_Of_Contents::ANCHOR_PREFIX . "${key}\">${value}</span>${close}",
			$content,
			1
		);
	}

	return $content;
}

add_filter( 'the_content', 'sketchpad_modified_blocks_toc_filter' );
