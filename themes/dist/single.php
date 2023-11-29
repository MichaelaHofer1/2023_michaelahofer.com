<?php get_header(); ?>
    <main class="container" id="single-post-page">
        <h1 id="page-headline"><span><?php the_title(); ?></span></h1>
        <article class="post" id="single-post">
            <div class="meta-data">
				<?php
				$duration = get_field( 'blog_posts' );
				?>
                <p>
					<?php
					echo $duration['start'];
					if ( ! empty( $duration['end'] ) ) {
						echo " - " . $duration['end'];
					}
					?>
                    <br>
                    <span>(<?php the_category( ', ' ); ?>)</span>
                </p>
            </div>
			<?php
			if ( have_posts() ) {
				while ( have_posts() ) {
					the_post();
					the_content();
				}
			}
			?>
        </article>
		<?php
		$btn = get_field( 'standard-btn' );
		?>

        <div class="teaser-btn">
            <a href="<?php echo $btn['btn-link']; ?>"><?php echo $btn['btn-text']; ?></a>
        </div>
    </main>
<?php get_footer(); ?>