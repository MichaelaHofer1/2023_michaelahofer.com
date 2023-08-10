<?php
$anchor = '';
if (!empty($block['anchor'])) {
	$anchor = 'id="' . esc_attr($block['anchor']) . '"';
}


$class_name = '';

if (!empty($block['clasName'])) {
	$class_name = 'class="' . esc_attr($block['className']) . '"';
}
?>


<?php
	$teaser = get_field('teaser');
?>

<section class="<?php echo $class_name; ?>" id="<?php echo $anchor; ?>">
	<div class="preview">
		<div class="gallery-teaser">
			<?php
			$images = $teaser['teaser-imgs'];
            if ( $images ): ?>
            <ul class="splide__list">
				<?php foreach ( $images as $image_id ): ?>
                    <li class="splide__slide">
						<?php echo wp_get_attachment_image( $image_id, 'large' ); ?>
                    </li>
				<?php endforeach; ?>
            </ul>
			<?php endif; ?>
		</div>
        <div class="teaser-content">
            <div class="teaser-headline">
	            <?php echo $teaser['headline']; ?>
            </div>
            <div class="teaser-btn">
	            <a href="<?php echo $teaser['btn-see-more']; ?>"><?php echo $teaser['btn-see-more-text']; ?><span class="icon-arrow-right"></span></a>
              </div>
        </div>

	</div>
</section>
