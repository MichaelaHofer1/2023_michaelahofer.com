<?php
get_header();
?>

    <main id="content">
        <h1 id="page-headline">
			<?php
			$postsPage = get_option( 'page_for_posts' );
			if ( ! empty ( $postsPage ) ) {
				echo "<span>" . get_the_title( $postsPage ) . "</span>";
			} else {
				bloginfo( 'name' );
			}
			?>
        </h1>
		<?php

		if ( have_posts() ) {
			while ( have_posts() ) {
				the_post();
				?>
                <article class="post">
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
                            <span>(<?php the_category(', '); ?>)</span>
                        </p>
                    </div>
                    <h2 class="post-title">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?><br><span>zum Beitrag -></span></a>
                    </h2>
                </article>
				<?php
			}
		}
		?>
    </main>

<?php
get_footer();
?>