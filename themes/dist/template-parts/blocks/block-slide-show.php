<!--not in use -> small or big gallery block + slide show-->

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
$counter = 1;
?>


<?php if ( ! empty ( $slide_show_imgs ) ) : ?>
    <section class="slider__gallery">

			<?php $images = $slide_show_imgs['imgs'];
			if ( $images ):
				foreach ( $images as $image_id ):
                    ?>
                    <div class="slide slide--<?php echo($counter) ?>">
					<?php echo wp_get_attachment_image( $image_id, 'medium' ); ?>
                    </div>
                <?php
                    $counter++;
                endforeach;
			endif; ?>
        <div class="dots"></div>
    </section>
<?php
endif;
?>


<?php /*if ( ! empty( $slide_show_imgs ) ): */ ?><!--
    <section class="<?php /*echo $class_name */ ?>" id="slideshow-section">
        <div class="splide__track slideshow-container">
			<?php
/*			$images = $slide_show_imgs['imgs'];
			if ( $images ):
				*/ ?>
                <ul class="splide__list">
					<?php /*foreach ( $images as $image_id ): */ ?>
                        <li class="splide__slide">
							<?php /*echo wp_get_attachment_image( $image_id, 'medium' ); */ ?>
                        </li>
					<?php /*endforeach; */ ?>
                </ul>
			<?php /*endif; */ ?>
        </div>
    </section>

--><?php
/*endif;
*/ ?>