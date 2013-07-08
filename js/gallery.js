/* GalleryJS (https://github.com/Imdsm/GalleryJS)
 * Adam K Dean (Imdsm)
 * 08/07/2013 16:32
 */

$(function() {

	var $container = $('.items');

	// we use imagesLoaded here so that all images are downloaded 
	// before isotope makes any width/height calculations.
	$container.imagesLoaded( function(){
		$container.isotope({
			itemSelector: '.item'
		});
	});


});