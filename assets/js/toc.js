/**
 * Table of Contents Sub script.
 */

 ( function ( $ ) {
	$( document ).ready( function () {
		new SmoothScroll( '[data-scroll]', {
			speed: 500,
			speedAsDuration: true
		} );

		$( '.toc-accordion' ).on( 'click', function() {
			const element = $( this ).parent();

			if ( element.hasClass( 'toc-open' ) ) {
				element.removeClass( 'toc-open' );
				element.addClass( 'toc-close' );
			} else if ( element.hasClass( 'toc-close' ) ) {
				element.removeClass( 'toc-close' );
				element.addClass( 'toc-open' );
			}

			element.parent().children( 'ul' ).slideToggle();
		} );
	} );
} )( jQuery );
