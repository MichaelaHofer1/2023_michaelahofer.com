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
	<ul>
		<?php foreach( $images as $image_id ): ?>
			<li>
				<?php echo wp_get_attachment_image( $image_id, 'large' ); ?>
			</li>
		<?php endforeach; ?>
	</ul>
<?php endif; ?>
