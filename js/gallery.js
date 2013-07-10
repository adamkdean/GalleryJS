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

	// grab a list of images from our PHP script
	$.getJSON('list.php', function(json) {		
		// add each image, newest first
		for (var src in json) {			
			$newItem = $(format.replace('%src', src));
			$newItem.css({ opacity: 0 });
			$newItem.imagesLoaded(function() {
				$newItem.animate({ opacity: 1 });
			});	
			$container.isotope('insert', $newItem);
		}                

		// once all the images are loaded, we recalculate the layout
		$container.imagesLoaded(function() {
			// open the first image as though it's been clicked
			$container.isotope('reLayout', function() {
				if (openFirst) {
					$container.children(":first").toggleClass('active');
					$container.isotope('reLayout');
				}
			});

			// change size of clicked element
			$container.delegate('.item', 'click', function(){				
				$(this).toggleClass('active');
				$container.isotope('reLayout');
			});
		});
	});
});