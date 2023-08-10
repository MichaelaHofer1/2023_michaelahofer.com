<?php
$anchor = '';
if (!empty($block['anchor'])) {
	$anchor = 'id="' . esc_attr($block['anchor']) . '"';
}


$class_name = '';

if (!empty($block['className'])) {
	$class_name = 'class="' . esc_attr($block['className']) . '"';
}
?>


<?php
	$teaser = get_field('teaser');
?>

<section class="<?php echo $class_name; ?>" id="<?php echo $anchor; ?>">
        <?php
            $img_position = $teaser['position-right-left'];
            $position = "img-position-right";
            if ($img_position === 'left'){
                $position = "img-position-left";
            }
        ?>
    <div class="preview <?php echo $position; ?>">
		<div class="gallery-teaser">
            <div class="img1"><?php echo wp_get_attachment_image($teaser['teaser-img-1'], 'medium'); ?></div>
            <div class="img2"><?php echo wp_get_attachment_image($teaser['teaser-img-2'], 'medium'); ?></div>
            <div class="img3"><?php echo wp_get_attachment_image($teaser['teaser-img-3'], 'medium'); ?></div>
		</div>
        <div class="teaser-content">
            <div class="teaser-headline">
	            <?php echo $teaser['headline']; ?>
            </div>
            <div class="teaser-btn">
	            <a href="<?php echo $teaser['btn-see-more']; ?>"><?php echo $teaser['btn-see-more-text']; ?></a>
              </div>
        </div>

	</div>
</section>
