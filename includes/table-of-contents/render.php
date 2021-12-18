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
require_once __DIR__ . '/class-smb-table-of-contents.php';

/**
 * Table of Contents Render function.
 *
 * @param  array  $block_attributes Block attributes.
 * @param  string $content          Context.
 * @return string                   HTML String.
 */
function render_sketchpad_modified_blocks_table_of_contents( $block_attributes, $content ):string {
	$widgets_editing = sketchpad_modified_blocks_is_widgets_edit();

	if ( ! sketchpad_modified_blocks_table_of_contents_enable() && ! $widgets_editing ) {
		return '';
	}

	$toc                = $widgets_editing ? null : new SMB_Table_Of_Contents( get_the_content(), is_singular() );
	$format             = $widgets_editing ? '<div %1$s>%2$s</div>' : '<ul %1$s>%2$s</ul>';
	$disable_message    = sprintf(
		'<div class="components-placeholder is-medium"><div class="components-placeholder__label"></div><div class="components-placeholder__fieldset">%1$s</div></div>',
		__( 'The table of contents cannot be displayed on this page.', 'sketchpad-modified-blocks' )
	);
	$wrapper_attributes = get_block_wrapper_attributes();
	$elements_markup    = (
		$widgets_editing
			? $disable_message
			: $toc->get_toc()
	);

	return (
		strlen( $elements_markup ) > 0
			? sprintf( $format, $wrapper_attributes, $elements_markup )
			: ''
	);
}

/**
 * Wrapper function (wp_get_raw_referer).
 *
 * @return string Referer URL on success, '' on failure.
 */
function sketchpad_modified_blocks_get_raw_referer(): string {
	return is_string( wp_get_raw_referer() ) ? wp_get_raw_referer() : '';
}

/**
 * Determine if the table of contents can be output.
 *
 * @return boolean
 */
function sketchpad_modified_blocks_table_of_contents_enable(): bool {
	$referer          = sketchpad_modified_blocks_get_raw_referer();
	$is_singular_edit = 1 === preg_match( '~/wp-admin/post.php\?(post|page)=\d+&action=edit~', $referer );

	return is_singular() || $is_singular_edit;
}

/**
 * Determine if a widgets is being edited.
 *
 * @return boolean
 */
function sketchpad_modified_blocks_is_widgets_edit(): bool {
	$referer          = sketchpad_modified_blocks_get_raw_referer();
	$is_widgets_edit  = false !== strpos( $referer, '/wp-admin/widgets.php' );
	$is_custmize_edit = false !== strpos( $referer, '/wp-admin/customize.php' );

	return $is_widgets_edit || $is_custmize_edit;
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
	if ( strpos( wp_get_raw_referer(), '/wp-admin/widgets.php' ) && false !== strpos( $_SERVER['REQUEST_URI'], '/wp-json/' ) ) {
		return $instance;
	}

	$current_url = ! empty( $_SERVER['REQUEST_URI'] ) ? esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ) ) : '';
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
