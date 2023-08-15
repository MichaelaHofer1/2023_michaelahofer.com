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
	$gallery = get_field('gallery');
?>

<?php
$images = $gallery['imgs'];
if( $images ): ?>
<section class="gallery-container">
	<ul class="gallery-grid">
		<?php foreach( $images as $image_array ): ?>
			<li class="img">
                <a href="<?php echo esc_url($image_array['url']); ?>">
                    <img src="<?php echo esc_url($image_array['sizes']['medium']); ?>" alt="<?php echo esc_attr($image_array['alt']); ?>" />
                </a>
                <p class="img-description"><?php echo esc_html($image_array['caption']); ?></p>
            </li>
		<?php endforeach; ?>
	</ul>
</section>
<?php endif; ?>

