<!--not in use -> small or big gallery block + slide show-->

<?php
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
	$anchor = 'id="' . esc_attr( $block['anchor'] ) . '"';
}
$class_name = '';
if ( ! empty( $block['className'] ) ) {
	$class_name = 'class="' . esc_attr( $block['className'] ) . '"';
}
$gallery         = get_field( 'gallery' );
$slide_show_imgs = get_field( 'slide-show' );

$images = $gallery['imgs'];
if ( $images ): ?>
    <section class="gallery-container <?php echo $class_name ?>">
        <ul class="gallery-grid">
			<?php foreach ( $images as $image_array ): ?>
                <li class="img">
                    <a>
                        <img src="<?php echo esc_url( $image_array['sizes']['medium'] ); ?>"
                             alt="<?php echo esc_attr( $image_array['alt'] ); ?>"/>
                    </a>
                    <p class="img-description"><?php echo esc_html( $image_array['caption'] ); ?></p>
                </li>
			<?php endforeach; ?>
        </ul>
        <div class="lightbox-container">
            <div class="lightbox-toggle"></div>
        </div>
    </section>
<?php endif; ?>