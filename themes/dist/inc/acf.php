<?php
if ( function_exists( 'acf_add_options_page' ) ) {
	add_filter( 'acf/settings/save_json', function ( $path ) {
		$path = get_template_directory() . '/acf-fields';

		return $path;
	} );

	add_filter( 'acf/settings/load_json', function ( $paths ) {
		unset( $paths[0] );
		$paths[] = get_template_directory() . '/acf-fields';

		return $paths;
	} );


	acf_add_options_page( array(
		'page_title'     => 'Theme Einstellungen',
		'menu_title'     => 'Theme Einstellungen',
		'menu-slug'      => 'projektarbeit-theme-einstellungen',
		'position'       => 80,
		'icon_url'       => 'dashicons-edit',
		'update_button'  => __( 'Einstellungen speichern', 'mh' ),
		'update_message' => __( 'Einstellungen wurden gespeichert', 'mh' ),
		'capibility'     => 'edit_posts'
	) );
}

	//ACF Blöcke
	add_action( 'acf/init', function () {
		if ( function_exists( 'acf_register_block_type' ) ) {
			acf_register_block_type( array(
				'name'            => 'Header',
				'title'           => __( 'header', 'mh' ),
				'description'     => __( 'Das ist der Headerbereich', 'mh' ),
				'supports'        => array( 'anchor' => false ),
				'category'        => 'mh',
				'keywords'        => array( 'header', 'mh', 'kopfbereich' ),
				'post_type'       => array( 'page' ),
				'align'           => false,
				'mode'            => false,
				'icon'            => 'welcome-widgets-menus',
				'render_template' => 'template-parts/blocks/block-header.php',
			) );
		}

		if ( function_exists( 'acf_register_block_type' ) ) {
			acf_register_block_type( array(
				'name'            => 'Teaser',
				'title'           => __( 'teaser', 'mh' ),
				'description'     => __( 'Das ist der Teaserbereich', 'mh' ),
				'supports'        => array( 'anchor' => false ),
				'category'        => 'mh',
				'keywords'        => array( 'teaser', 'mh', 'home' ),
				'post_type'       => array( 'page' ),
				'align'           => false,
				'mode'            => false,
				'icon'            => 'welcome-widgets-menus',
				'render_template' => 'template-parts/blocks/block-teaser.php',
			) );
		};
	} );





?>