/**
 * Data Trigger script.
 */

( function ( $ ) {
	$( document ).ready( function () {
		const trigger = new ScrollTrigger.default();

		trigger.add( '[data-talk-trigger]', {
			once: true,
			offset: {
				element: {
					x: 0,
					y: ( _trigger, rect, direction ) => {
						return 0.7;
					},
				},
				viewport: {
					x: 0,
					y: ( _trigger, frame, direction ) => {
						return 0;
					},
				},
			},
			toggle: {
				class: {
					in: 'data-trigger-visible',
					out: 'data-trigger-invisible',
				},
			},
		} );
	} );
} )( jQuery );
