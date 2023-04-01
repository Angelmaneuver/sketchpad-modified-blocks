<?php
/**
 * Server side block related function.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * These modules are needed to load this function.
 */
require_once SMBROOT . SMBINC . '/class/class-smb-table-of-contents.php';

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
		$wraper_tag_name  = $block_attributes['tagName'];
		$heading_tag_name = $block_attributes['headingTagName'];
		$title            = isset( $block_attributes['heading'] ) && ! empty( $block_attributes['heading'] )
								? "<{$heading_tag_name}>" . esc_html( $block_attributes['heading'] ) . "</{$heading_tag_name}>"
								: '';
		$format           = "<{$wraper_tag_name}" . ' %1$s' . ">{$title}" . '<ul>%2$s</ul>' . "</{$wraper_tag_name}>";
		$elements_markup  = ( new SMB_Table_Of_Contents( get_the_content(), true ) )->get_toc();
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
			'/' . preg_quote( "{$open}{$value}{$close}", '/' ) . '/',
			"{$open}<span id=\"" . SMB_Table_Of_Contents::ANCHOR_PREFIX . "{$key}\">{$value}</span>{$close}",
			$content,
			1
		);
	}

	return $content;
}

add_filter( 'the_content', 'sketchpad_modified_blocks_toc_filter' );

/**
 * Registers the block on the server.
 *
 * @return void
 */
function register_sketchpad_modified_block_table_of_contents():void {
	sketchpad_modified_blocks_register_block_type_from_metadata(
		SMBROOT . SMBBLOCKS . '/table-of-contents',
		array(
			'render_callback' => 'render_sketchpad_modified_blocks_table_of_contents',
		)
	);
}

add_action( 'init', 'register_sketchpad_modified_block_table_of_contents' );

/**
 * Enqueue the block script on the server.
 *
 * @return void
 */
function enqueue_script_sketchpad_modified_block_table_of_contents():void {
	wp_enqueue_script(
		'smoothscroll',
		'https://cdn.jsdelivr.net/gh/cferdinandi/smooth-scroll@15.0.0/dist/smooth-scroll.polyfills.min.js',
		array(),
		false,
		true
	);
	wp_enqueue_script(
		'sketchpad-modified-blocks-toc',
		plugins_url( SMBJS . '/toc.js', SMBROOT . 'plugin.php' ),
		array( 'jquery', 'smoothscroll' ),
		(string) filemtime( SMBROOT . SMBJS . '/toc.js' ),
		true
	);
}

add_action( 'wp_enqueue_scripts', 'enqueue_script_sketchpad_modified_block_table_of_contents' );
