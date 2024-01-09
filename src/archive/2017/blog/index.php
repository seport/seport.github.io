<?php get_header(); ?>
<div id="main">
<div id="content">
<h1>Sarah's Jr. Developer Blog</h1>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
	<a href="<?php the_permalink()?>"><h1><?php the_title(); ?></h1></a>
	<h4>Posted on <?php the_time('F jS, Y') ?></h4>
	<p><?php the_content(__('(more...)')); ?></p>
	<hr> 
<?php endwhile; ?>

<?php
global $wp_query;

$big = 999999999; // need an unlikely integer

echo paginate_links( array(
	'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
	'format' => '?paged=%#%',
	'current' => max( 1, get_query_var('paged') ),
	'total' => $wp_query->max_num_pages
) );
?>

<?php else: ?>
	<p><?php _e('Sorry, no posts matched your criteria.'); ?></p>
<?php endif; ?>
</div>
<?php get_sidebar(); ?>
</div>
<div id="delimeter">
</div>
<?php get_footer(); ?>