<?php

$dir = 'assets/gallery/';
$filesArr = scandir($dir);

$galleryDataStr = "";

for($i=0; $i<count($filesArr); $i++) {
  if($filesArr[$i] != "." && $filesArr[$i] != ".." && $filesArr[$i] != "instruction.txt") {
    $fileNameArr = explode(".", $filesArr[$i]);
    $fileName = $fileNameArr[0];
    $fileExt = $fileNameArr[1];
    $fileName2Arr = explode("-large", $fileName);

    if( !isset($fileName2Arr[1]) ) {
      $galleryDataStr .= "'" . $dir . $fileName . "." . $fileExt . "', \n";
      $galleryDataStr .= "'" . $dir . $fileName  . "-large." . $fileExt . "'";
      if($i < count($filesArr)-2) {
        $galleryDataStr .= ", \n";
      }
    }
  }
}

echo $galleryDataStr;

?>