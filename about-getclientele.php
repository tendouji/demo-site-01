<?php

$dir = 'assets/clientele/';
$filesArr = scandir($dir);

$clienteleDataStr = "{\"clientele\" : [";

for($i=0; $i<count($filesArr); $i++) {
  if($filesArr[$i] != "." && $filesArr[$i] != ".." && $filesArr[$i] != "instruction.txt") {
    $fileNameArr = explode(".", $filesArr[$i]);
    $fileName = $fileNameArr[0];
    $fileExt = $fileNameArr[1];

    $clienteleDataStr .= "\"" . $fileName . "." . $fileExt . "\"";

    if($i < count($filesArr)-1) {
      $clienteleDataStr .= ",";
    }
  }
}

$clienteleDataStr .= "]}";
echo $clienteleDataStr;

?>