<?php

// Plugin Name: sample block

function wpmarche_gutenberg_blocks()
{
    wp_register_script('sample-block-js', plugins_url('build/index.js', __FILE__), array('wp-blocks', 'wp-editor', 'wp-components'));

    register_block_type('wpmarche/sample-block', array(
        'editor_script' => 'sample-block-js'
    ));
}
add_action('init', 'wpmarche_gutenberg_blocks');
