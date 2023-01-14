<?php
/**
 * The Table of Contents functionality class of this block.
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */

/**
 * Class: SMB_Table_Of_Contents
 *
 * @package Sketchpad modified - Blocks
 * @since   0.1.0
 */
class SMB_Table_Of_Contents {
	const ANCHOR_PREFIX      = 'i';
	const REQUIRED_HEADLINES = 2;

	/**
	 * Current hierarchy.
	 *
	 * @since  0.1.0
	 * @access private
	 * @var    int     $layer Current hierarchy.
	 */
	private $layer = 0;

	/**
	 * Rank of processed headlines.
	 *
	 * @since  0.1.0
	 * @access private
	 * @var    int[] $ranks Rank of processed headlines.
	 */
	private $ranks = array();

	/**
	 * Closing tags.
	 *
	 * @since  0.1.0
	 * @access private
	 * @var    string[] $closing_tags Closing tags.
	 */
	private $closing_tags = array();

	/**
	 * Editing HTML.
	 *
	 * @since  0.1.0
	 * @access private
	 * @var    string  $list_items_markup Editing HTML.
	 */
	private $list_items_markup = '';

	/**
	 * Provide an anchor.
	 *
	 * @since  0.1.0
	 * @access private
	 * @var    bool    $anchor_enable Provide an anchor.
	 */
	private $anchor_enable;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @param string $value         HTML string.
	 * @param bool   $anchor_enable Provide an ahchor.
	 *
	 * @since 0.1.0
	 */
	public function __construct( string $value, bool $anchor_enable ) {
		$this->anchor_enable = $anchor_enable;
		$headlines           = self::get_headlines( $value );

		if ( ! self::is_required_headlines( $headlines ) ) {
			return;
		}

		foreach ( $headlines as $key => $headline ) {
			$this->push( $headline, $key );
		}
	}

	/**
	 * Get a table of contents HTML.
	 *
	 * @return string List HTML string.
	 *
	 * @since   0.1.0
	 */
	public function get_toc(): string {
		return $this->list_items_markup . implode( '', array_reverse( $this->closing_tags ) );
	}

	/**
	 * Get a headlines from an HTML string.
	 *
	 * @param  string $value HTML string.
	 * @return array         headline HTML string array.
	 *
	 * @since  0.1.0
	 */
	public static function get_headlines( string $value ): array {
		preg_match_all(
			'/(?P<open><h(?P<rank>\d)(?:.*?)>)(?P<value>.*?)(?P<close><\/h\d>)/s',
			$value,
			$result,
			PREG_SET_ORDER
		);

		return $result;
	}

	/**
	 * Check number of headlines required for toc output is met.
	 *
	 * @param  array $headlines headline HTML string array.
	 * @return bool
	 *
	 * @since  0.1.0
	 */
	public static function is_required_headlines( array $headlines ): bool {
		return (
			count( $headlines ) >= self::REQUIRED_HEADLINES
				? true
				: false
		);
	}

	/**
	 * Check number of headlines required for toc output is met by HTML string.
	 *
	 * @param  string $value HTML string.
	 * @return bool
	 *
	 * @since  0.1.0
	 */
	public static function is_required_headlines_by_content( string $value ): bool {
		return self::is_required_headlines( self::get_headlines( $value ) );
	}

	/**
	 * Push element.
	 *
	 * @param array $headline Headline HTML string.
	 * @param int   $key      Unique value to use for the HTML anchor.
	 * @return void
	 *
	 * @since  0.1.0
	 */
	private function push( array $headline, int $key ): void {
		$temp  = '';
		$rank  = (int) $headline['rank'];
		$value = $headline['value'];

		if ( 0 < $this->layer ) {
			$last_rank = $this->ranks[ array_key_last( $this->ranks ) ];

			while ( $last_rank > $rank ) {
				$temp .= array_pop( $this->closing_tags );
				$temp .= array_pop( $this->closing_tags );

				$this->layer--;
				array_pop( $this->ranks );
				$last_rank = 0 === $this->layer ? 0 : $this->ranks[ array_key_last( $this->ranks ) ];
			};

			if ( $last_rank > 0 && $rank > $last_rank ) {
				$temp                .= '<ul class="children">';
				$this->closing_tags[] = '</ul>';

				$this->layer++;
			} elseif ( $rank === $last_rank ) {
				$temp .= array_pop( $this->closing_tags );
				array_pop( $this->ranks );
			} else {
				$this->layer++;
			}
		} else {
			$this->layer++;
		}

		$element                  = $this->anchor_enable ? '<a data-scroll href="#' . self::ANCHOR_PREFIX . "{$key}\">{$value}</a>" : $value;
		$this->list_items_markup .= "{$temp}<li><div class=\"toc-item toc-open\"><div class=\"toc-element\">{$element}</div><div class=\"toc-accordion\"></div></div>";
		$this->closing_tags[]     = '</li>';
		$this->ranks[]            = $rank;
	}
}
