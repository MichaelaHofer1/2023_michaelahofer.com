<?php
$class_name = '';

if (!empty($block['className'])) {
	$class_name = 'class="' . esc_attr($block['className']) . '"';
}
?>

<?php
	$paraPhoto = get_field('para-photo-cont')
?>

<section>
	<?php
	$position = 'right';

	if ($paraPhoto['pic-position'] === 'links'){
		$position = 'left';
	}
	?>
	<div class="para-photo-container <?php echo $position ?>">
		<?php if (!empty($paraPhoto)):?>

		<div class="paragraph-container">
			<?php foreach ($paraPhoto['paragraphs'] as $singlepara): ?>
			<p><?php echo $singlepara['para']?></p>
			<?php endforeach; ?>
		</div>
		<?php endif; ?>

		<div class="photo-container">
			<?php echo wp_get_attachment_image($paraPhoto['photo'], 'large')?>
		</div>
	</div>
</section>

<!--
	if ( ! empty( $list ) ): ?>
	<section>
		<ul class="<?php /*echo $list['list-decoration'] */?>">
			<?php /*foreach ( $list['list-items'] as $item ): */?>
				<li class="list-item">
					<?php /*echo $item['list-item']; */?>
				</li>
			<?php /*endforeach; */?>
		</ul>
	</section>
--><?php /*endif; */?>