/* GalleryJS (https://github.com/Imdsm/GalleryJS)
 * Adam K Dean (Imdsm)
 * 08/07/2013 16:32
 */

$(function() {	
	
	var openFirst = true;
	var format = '<div class="item"><img src="%src" /></div>';	

	var $container = $('.items');
	$container.isotope({ 
		itemSelector: '.item',
		masonry: {
			columnWidth: 80,
			gutterWidth: 1
		}
	});	
	
	$.getJSON('list.php', function(json) {		
		// grab a list of images from our PHP script
		
		for (var src in json) {			
			// add each image, newest first
			// hide items until the photos within them have loaded			

			var $newItem = $(format.replace('%src', src));
			$newItem.hide();			
			//$newItem.imagesLoaded($newItem, function(data) {
				//$(data.elements[0]).show();
				//$container.isotope('reLayout');
				
			//});	
			$container.isotope('insert', $newItem);
		}                
		
		$container.imagesLoaded(function() {			
			// once all the images are loaded, we recalculate the layout

			if ($('.loading').is(':visible')) $('.loading').remove();

			$container.children().show();
			$container.isotope('reLayout', function() {
				if (openFirst) $container.children(':first').toggleClass('active');
				$container.isotope('reLayout');
			});
			
			$container.delegate('.item', 'click', function() {
				// change size of clicked element

    			$(this).toggleClass('active');
				$container.isotope('reLayout');
			});
		});
	});
});