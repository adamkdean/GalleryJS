<?php

/* GalleryJS (https://github.com/Imdsm/GalleryJS)
 * Adam K Dean (Imdsm)
 * 08/07/2013 16:32
 *
 * This should simulate delayed loading for images, 
 * so I can test it on localhost ...
 */

$src = $_GET['src'];
$path = "photos/" . $src;

usleep(1000000); // delay!

header("Location: " . $path);

?>