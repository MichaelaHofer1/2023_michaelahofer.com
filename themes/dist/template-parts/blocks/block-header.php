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
$home_header = get_field('header');
?>

<header class="<?php echo $class_name; ?>">
    <div id="title-container">
        <div id="title">
            <h1>
                <?php echo $home_header['name']; ?>
                <br>
                <span class="profession">
                    <span><?php echo $home_header['profession1']; ?></span>
                    <span><?php echo $home_header['profession2']; ?></span>
                </span>
            </h1>
        </div>
    </div>

    <div id="header-slider" class="splide">
        <div class="splide__track">
            <?php
           $images = $home_header['detail-slider'];
            if ( $images ): ?>
            <ul class="splide__list">
		        <?php foreach ( $images as $image_id ): ?>
                    <li class="splide__slide">
				        <?php echo wp_get_attachment_image( $image_id, 'large' );?>
                    </li>
		        <?php endforeach; ?>
            </ul>
	        <?php endif; ?>
        </div>
    </div>
</header>

