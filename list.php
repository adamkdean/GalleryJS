<?php

/* GalleryJS (https://github.com/Imdsm/GalleryJS)
 * Adam K Dean (Imdsm)
 * 08/07/2013 16:32
 *
 * After much deliberation, I decided that PHP was the easiest, 
 * and most accessible way to quickly print a sorted JSON list.
 */

function make_seed()
{
  list($usec, $sec) = explode(' ', microtime());
  return (float) $sec + ((float) $usec * 100000);
}
srand(make_seed());

function list_images($path) {
	$list = array();
	if ($dir = opendir($path)) {		
		while (($file = readdir($dir)) !== false) {
			if ($file != "." && $file != "..") {
				// small hack to make each picture load again
				$rand = $file . "?r=" . rand(10000, 99999);
				$list["img.php?src=" . $rand] = filemtime($path . $file);
			}
		}
		closedir($dir);
		arsort($list);
	}
	return $list;
}

$list = list_images("photos/");
echo json_encode($list);

?>