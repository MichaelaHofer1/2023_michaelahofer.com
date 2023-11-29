<?php
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
	$anchor = 'id="' . esc_attr( $block['anchor'] ) . '"';
}
$class_name = '';

if ( ! empty( $block['className'] ) ) {
	$class_name = 'class="' . esc_attr( $block['className'] ) . '"';
}
$gallery       = get_field( 'gallery_small' );
$counterPics   = 1;
$counterSlider = 1;
$images        = $gallery['single_pics'];
if ( $images ): ?>
    <section class="gallery-container <?php echo $class_name ?>">
        <ul class="gallery-grid__small">
			<?php foreach ( $images as $image_array ): ?>
                <li class="img img--<?php echo( $counterPics ) ?>">
                    <a>
                        <img src="<?php echo esc_url( $image_array['sizes']['large'] ); ?>"
                             alt="<?php echo esc_attr( $image_array['alt'] ); ?>"/>
                    </a>
                    <p class="img-description"><?php echo esc_html( $image_array['caption'] ); ?></p>
                </li>
				<?php
				$counterPics ++;
			endforeach;
			?>
            <li class="slider__gallery">
				<?php $images = $gallery['slider_pics'];
				if ( $images ):
					foreach ( $images as $image_id ):
						?>
                        <div class="slide slide--<?php echo( $counterSlider ) ?>">
							<?php echo wp_get_attachment_image( $image_id, 'large' ); ?>
                        </div>
						<?php
						$counterSlider ++;
					endforeach;
				endif; ?>
                <div class="dots"></div>
            </li>
			<?php if ( ! empty ( $gallery['slider_pics'] ) ) : ?>

			<?php
			endif;
			?>
        </ul>
        <div class="lightbox-container">
            <div class="lightbox-toggle"></div>
        </div>
    </section>
<?php endif; ?>