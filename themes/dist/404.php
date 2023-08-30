<?php
get_header();
?>
	<main>
		<?php $error = get_field('error404', 'option') ?>
	<section id="error-page">
		<div class="error-message">
			<h1 id="page-headline"><?php echo $error['error-txt-404'] ?></h1>
            <div class="btn-back-home teaser-btn">
                <a href="<?php echo $error['back-home-btn'] ?>"><?php echo $error['btn-text'] ?></a>
            </div>
		</div>

	</section>
	</main>

<?php
get_footer();
?>