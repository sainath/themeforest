<?php
/**
 * Single Product title
 *
 * @author 		WooThemes
 * @package 	WooCommerce/Templates
 * @version     1.6.4
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

?>
<h4 itemprop="name" class="product_title entry-title"><i class="scicon-awesome-left"></i> <a href="<?php echo get_permalink(); ?>"><?php the_title(); ?></a></h4>