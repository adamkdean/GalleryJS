/* GalleryJS (https://github.com/Imdsm/GalleryJS)
 * Adam K Dean (Imdsm)
 * 08/07/2013 16:32
 */

$(function() {	

	var $container = $('.items');
	$container.isotope({ 
		itemSelector: '.item',
		masonry: {
			columnWidth: 80,
			gutterWidth: 1
		}
	});

	var format = '<div class="item"><img src="%src" /></div>';	

	$.getJSON('list.php', function(json) {		
		for (var src in json) {			
			$newItem = $(format.replace('%src', src));
			$container.isotope('insert', $newItem);			
		}
		$container.imagesLoaded(function() {
			$container.isotope('reLayout');

			// change size of clicked element
			$container.delegate('.item', 'click', function(){
				$(this).toggleClass('active');
				$container.isotope('reLayout');
			});
		});
	});

	
});