jQuery(document).ready(function(){

	var deviceAgent = navigator.userAgent.toLowerCase();
	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
	
	jQuery('.homemenu ul.menu').superfish({
		animation:   {opacity:'show'},
		speed:         'normal',
		delay: 		1000,
		autoArrows:  true,
		dropShadows: true
		});
	
	//Portfolio Hover effects
	jQuery("span.ajax-portfolio-icon").fadeTo("fast", 0);
	
	//Portfolio Hover effects
	jQuery(".gototop,.hrule.top a").click(function(){
		jQuery('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
	
	jQuery("span.portfolio-gallery-icon").fadeTo("fast", 0);
	jQuery("a.portfolio-image-link").hover(
	function () {
		jQuery(this).find("span.portfolio-gallery-icon").stop().animate({"top": "40%", "opacity" : "0.6"}, 300);
	},
	function () {
		jQuery(this).find("span.portfolio-gallery-icon").stop().animate({"top": "70%", "opacity" : "0"}, 300);
	});
	
	// Responsive dropdown list triggered on Mobile platforms
    jQuery('#top-select-menu').bind('change', function () { // bind change event to select
        var url = jQuery(this).val(); // get selected value
        if (url != '') { // require a URL
            window.location = url; // redirect
        }
        return false;
    });
	
	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	jQuery("h4.trigger").click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("fast");
		return false;
	});
	jQuery('h4.trigger').trigger('click');	
	
	jQuery(".postformat-image-lightbox img").fadeTo("fast", 0.8);
	jQuery(".postformat-image-lightbox img").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.9);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.8);
	});
	
	jQuery("#main-portfolio-carousel .preload").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".portfolio-image-holder").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".thumbnail-image").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".pictureframe").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	jQuery(".filter-image-holder").hover(
	function () {
	  jQuery(this).stop().fadeTo("fast", 0.6);
	},
	function () {
	  jQuery(this).stop().fadeTo("fast", 1);
	});
	
	
	jQuery('.qtips').tipsy({gravity: 'n'});
	jQuery('.etips').tipsy({gravity: 'e'});
	jQuery('.stips').tipsy({gravity: 's'});
    
});

jQuery(function () {
	jQuery('.portfolio-thumbnail-block').hide();
	jQuery('.filter-thumbnail-block').hide();
});

var i = 0;//initialize
var int=0;//Internet Explorer Fix
jQuery(window).bind("load", function() {
	var int = setInterval("doThis(i)",10);

	jQuery('.filter-thumbnail-loader').hide();
	jQuery('.filter-thumbnail-block:hidden').fadeIn(800);

});

function doThis() {
	var images = jQuery('.portfolio-image-holder').length;
	if (i >= images) {
		clearInterval(int);
	}
	jQuery('.thumbnail-loader').eq(i).fadeOut(0);
	jQuery('.portfolio-thumbnail-block:hidden').eq(0).fadeIn(800);
	i++;
}