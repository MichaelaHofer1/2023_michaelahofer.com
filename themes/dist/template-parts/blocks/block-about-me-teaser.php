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
	$about_me_teaser = get_field('teaser-about-me');
?>

<section class="<?php echo $class_name; ?>" id="<?php echo $anchor; ?>">
	<div class="preview">
		<div class="gallery-teaser">
			<div class="img1"><?php echo wp_get_attachment_image($about_me_teaser['profile-pic'], 'large'); ?></div>
		</div>
		<div class="teaser-content">
			<div class="teaser-headline">
				<?php echo $about_me_teaser['about-me']; ?>
			</div>
			<div class="teaser-text">
				<?php echo $about_me_teaser['about-me-text'] ?>
			</div>
			<div class="teaser-btn">
				<a href="<?php echo $about_me_teaser['about-me-link']; ?>"><?php echo $about_me_teaser['about-me-link-text']; ?></a>
			</div>
		</div>

	</div>
</section>


