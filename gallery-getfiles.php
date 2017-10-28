<?php

$dir = 'assets/gallery/';
$filesArr = scandir($dir);

$galleryDataStr = "{\"gallery\" : [";

for($i=0; $i<count($filesArr); $i++) {
  if($filesArr[$i] != "." && $filesArr[$i] != ".." && $filesArr[$i] != "instruction.txt") {
    $fileNameArr = explode(".", $filesArr[$i]);
    $fileName = $fileNameArr[0];
    $fileExt = $fileNameArr[1];
    $fileName2Arr = explode("-large", $fileName);
    if( !isset($fileName2Arr[1]) ) {
      $galleryDataStr .= "{";
      $galleryDataStr .= "\"thumbnail\" : \"" . $fileName . "." . $fileExt . "\",";
      $galleryDataStr .= "\"large\" : \"" . $fileName . "-large." . $fileExt . "\"";
      $galleryDataStr .= "}";

      if($i < count($filesArr)-2) 
        $galleryDataStr .= ",";
    }
  }
}

$galleryDataStr .= "]}";
echo $galleryDataStr;

?>