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
				'render_template' => 'template-parts/blocks/block-gallery-teaser.php',
			) );
		};

		if ( function_exists( 'acf_register_block_type' ) ) {
			acf_register_block_type( array(
				'name'            => 'Über-mich Teaser',
				'title'           => __( 'about-me-teaser', 'mh' ),
				'description'     => __( 'Das ist der Teaserbereich vom Über-mich', 'mh' ),
				'supports'        => array( 'anchor' => false ),
				'category'        => 'mh',
				'keywords'        => array( 'teaser', 'mh', 'home', 'about-me', 'über-mich' ),
				'post_type'       => array( 'page' ),
				'align'           => false,
				'mode'            => false,
				'icon'            => 'admin-users',
				'render_template' => 'template-parts/blocks/block-about-me-teaser.php',
			) );
		};

		if ( function_exists( 'acf_register_block_type' ) ) {
			acf_register_block_type( array(
				'name'            => 'Galerie',
				'title'           => __( 'gallery', 'mh' ),
				'description'     => __( 'Das ist die Galerie', 'mh' ),
				'supports'        => array( 'anchor' => false ),
				'category'        => 'mh',
				'keywords'        => array( 'gallery', 'mh', 'Galerie', 'Bilder' ),
				'post_type'       => array( 'page' ),
				'align'           => false,
				'mode'            => false,
				'icon'            => 'schedule',
				'render_template' => 'template-parts/blocks/block-gallery.php',
			) );
		};

		if ( function_exists( 'acf_register_block_type' ) ) {
			acf_register_block_type( array(
				'name'            => 'slide-show',
				'title'           => __( 'slideshow', 'mh' ),
				'description'     => __( 'Das ist die Slide-Show', 'mh' ),
				'supports'        => array( 'anchor' => false ),
				'category'        => 'mh',
				'keywords'        => array( 'slider', 'mh', 'Slide-Show', 'Bilder' ),
				'post_type'       => array( 'page' ),
				'align'           => false,
				'mode'            => false,
				'icon'            => 'images-alt2',
				'render_template' => 'template-parts/blocks/block-slide-show.php',
			) );
		};

		if ( function_exists( 'acf_register_block_type' ) ) {
			acf_register_block_type( array(
				'name'            => 'page-headline',
				'title'           => __( 'page-headline', 'mh' ),
				'description'     => __( 'Das ist die Seiten-Überschrift', 'mh' ),
				'supports'        => array( 'anchor' => false ),
				'category'        => 'mh',
				'keywords'        => array( 'page-headline', 'mh', 'Header', 'Überschrift' ),
				'post_type'       => array( 'page' ),
				'align'           => false,
				'mode'            => false,
				'icon'            => 'heading',
				'render_template' => 'template-parts/blocks/block-page-headline.php',
			) );
		};
		if ( function_exists( 'acf_register_block_type' ) ) {
			acf_register_block_type( array(
				'name'            => 'Liste',
				'title'           => __( 'Liste', 'mh' ),
				'description'     => __( 'Das ist eine Aufzählung', 'mh' ),
				'supports'        => array( 'anchor' => false ),
				'category'        => 'mh',
				'keywords'        => array( 'list', 'mh', 'Aufzählung', 'Liste' ),
				'post_type'       => array( 'page' ),
				'align'           => false,
				'mode'            => false,
				'icon'            => 'editor-ul',
				'render_template' => 'template-parts/blocks/block-list.php',
			) );
		};

		if ( function_exists( 'acf_register_block_type' ) ) {
			acf_register_block_type( array(
				'name'            => 'Absatz mit Bild',
				'title'           => __( 'Absatz mit Bild', 'mh' ),
				'description'     => __( 'Das ist ein Absatz mit einem dazugehörigen Bild', 'mh' ),
				'supports'        => array( 'anchor' => false ),
				'category'        => 'mh',
				'keywords'        => array( 'Über mich', 'mh', 'Absatz', 'Bild', 'profilbild' ),
				'post_type'       => array( 'page' ),
				'align'           => false,
				'mode'            => false,
				'icon'            => 'align-right',
				'render_template' => 'template-parts/blocks/paragraph-with-photo.php',
			) );
		};

	} );





?>