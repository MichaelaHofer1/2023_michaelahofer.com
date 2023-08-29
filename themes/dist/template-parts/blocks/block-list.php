<?php
$class_name = '';

if ( ! empty( $block['className'] ) ) {
	$class_name = 'class="' . esc_attr( $block['className'] ) . '"';
}
?>

<?php
$list = get_field( 'list' );
?>
<?php

if ( ! empty( $list ) ): ?>
    <section>
        <ul class="<?php echo $list['list-decoration'] ?>">
			<?php foreach ( $list['list-items'] as $item ): ?>
            <li class="list-item">
				<?php echo $item['list-item']; ?>
            </li>
			<?php endforeach; ?>
        </ul>
    </section>
<?php endif; ?>