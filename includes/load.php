<?php
/**
 * These functions are needed to load this feature.
 *
 * @package Sketchpad modified - Blocks
 */

/**
 * Common function libraries.
 */
require_once __DIR__ . '/util/register.php';
require_once __DIR__ . '/util/state.php';

/**
 * Modules loading.
 */
// Text category.
require_once __DIR__ . '/blocks/annotations.php';
require_once __DIR__ . '/blocks/biim.php';
require_once __DIR__ . '/blocks/biim-navigationbar.php';
require_once __DIR__ . '/blocks/biim-paragraphs.php';
require_once __DIR__ . '/blocks/copy.php';
require_once __DIR__ . '/blocks/talk.php';
require_once __DIR__ . '/blocks/talk-icon.php';
require_once __DIR__ . '/blocks/talk-message.php';
require_once __DIR__ . '/blocks/talk-messagebox.php';
require_once __DIR__ . '/blocks/talk-messages.php';
require_once __DIR__ . '/blocks/talk-name.php';

// Media category.
require_once __DIR__ . '/blocks/file-data-display-by-get.php';

// Design category.
// require_once __DIR__ . '/blocks/group.php'; Deprecated feature.

// Widgets category.
require_once __DIR__ . '/blocks/tag-list.php';
require_once __DIR__ . '/blocks/table-of-content.php';

// Theme category.
require_once __DIR__ . '/blocks/search-keyword.php';
require_once __DIR__ . '/blocks/post-edit-link.php';
require_once __DIR__ . '/blocks/post-comments-count.php';
require_once __DIR__ . '/blocks/post-navigation-links.php';
