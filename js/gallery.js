/* GalleryJS (https://github.com/Imdsm/GalleryJS)
 * Adam K Dean (Imdsm)
 * 08/07/2013 16:32
 */

$(function() {

	var $container = $('.items');

	$container.isotope({ itemSelector: '.item' });

	//$newItems = $('<div class="item">test</div>');
	//$container.isotope('insert', $newItems);

	// does not work with file:// on chrome/safari ...
	$.get('img/', function(data) {
		console.log(data);
	});
});