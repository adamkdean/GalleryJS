<?php

/* GalleryJS (https://github.com/Imdsm/GalleryJS)
 * Adam K Dean (Imdsm)
 * 08/07/2013 16:32
 *
 * After much deliberation, I decided that PHP was the easiest, 
 * and most accessible way to quickly print a sorted JSON list.
 */

function list_images($path) {
	$list = array();
	if ($dir = opendir($path)) {		
		while (($file = readdir($dir)) !== false) {
			if ($file != "." && $file != "..") {				
				$list[$path . $file] = filemtime($path . $file);
			}
		}
		closedir($dir);
		arsort($list);
	}
	return $list;
}

$list = list_images("img/");
echo json_encode($list);

?>