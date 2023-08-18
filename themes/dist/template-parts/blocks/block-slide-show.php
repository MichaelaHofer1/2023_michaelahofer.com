<?php
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
	$anchor = 'id="' . esc_attr( $block['anchor'] ) . '"';
}

$class_name = 'splide';

if ( ! empty( $block['className'] ) ) {
	$class_name = 'class="' . esc_attr( $block['className'] ) . '"';
}
?>

<?php
$slide_show_imgs = get_field( 'slide-show' );
?>

<?php if ( ! empty( $slide_show_imgs ) ): ?>
    <section class="<?php echo $class_name ?>" id="slideshow-section">
        <div class="splide__track slideshow-container">
			<?php
			$images = $slide_show_imgs['imgs'];
			if ( $images ):
				?>
                <ul class="splide__list">
					<?php foreach ( $images as $image_id ): ?>
                        <li class="splide__slide">
							<?php echo wp_get_attachment_image( $image_id, 'medium' ); ?>
                        </li>
					<?php endforeach; ?>
                </ul>
			<?php endif; ?>
        </div>
    </section>

<?php
endif;
?>