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



<h1 id="page-headline" <?php echo $class_name; echo $anchor?> ><span><?php the_field('page-headline'); ?></span></h1>
