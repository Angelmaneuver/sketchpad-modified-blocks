/**
 * Copy button sub script.
 */

const { __ } = wp.i18n;

(function( $ ){
	$(document).ready(function() {
    var clipboard = new ClipboardJS( '.sketchpad-modified-blocks-copy-button' );

    clipboard.on( 'success', ( e ) => {
      toastr.success( __( 'copied!', 'sketchpad-modified-blocks' ) );
    });
  });
})( jQuery );
