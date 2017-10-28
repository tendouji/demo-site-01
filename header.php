<?php
  $albumID = "";
  if( isset($_GET['id']) ) {
    $albumID = $_GET['id'];
  } else {
    $albumID = "1";
  }
?>

<header class="clearfix">
  <a class="logo" href="index.php">logo</a>
  <nav>
    <a href="#menu" class="mobile-menu active">Menu</a>
    <ul>
      <li<?php echo ($page=="home" ? " class=\"active\"" : "") ?> id="homeLink">
        <a href="index.php">Home</a>
      </li>
      <li<?php echo ($page=="about" ? " class=\"active\"" : "") ?>>
        <a href="about.php">About</a>
      </li>
      <li<?php echo ($page=="album" ? " class=\"active\"" : "") ?>>
        <div class="more-select">
          <a href="javascript:showAlbumSubmenu()">Albums</a>
          <div class="sub-nav">
            <ul>
              <li<?php echo (($page=="album" && $albumID=="1") ? " class=\"active\"" : "") ?>>
                <a href="albums.php?id=1">Adventure Capital</a>
              </li>
              <li<?php echo (($page=="album" && $albumID=="2") ? " class=\"active\"" : "") ?>>
                <a href="albums.php?id=2">Village Voice</a>
              </li>
            </ul> 
          </div>
        </div>
      </li>
      <!-- 
      <li>
        <a href="#news" target="blank">News</a>
      </li> 
      -->
      <li<?php echo ($page=="gallery" ? " class=\"active\"" : "") ?>>
        <a href="photos.php">Photos</a>
      </li>
      <!-- 
      <li>
        <a href="#videos">Videos</a>
      </li>
      <li<?php echo ($page=="media" ? " class=\"active\"" : "") ?>>
        <a href="media.php">Media</a>
      </li> -->
      <li<?php echo ($page=="contact" ? " class=\"active\"" : "") ?>>
        <a href="contact.php">Contact</a>
      </li>
      <!-- 
      <li<?php echo ($page=="shows" ? " class=\"active\"" : "") ?>>
        <a href="#link6">Shows</a>
      </li>
      <li>
        <div class="more-select">
          <a href="#moreMenu">•••</a>
          <div class="sub-nav">
            <ul>
                <li>sublink 1</li>
                <li>sublink 2</li>
                <li>sublink 3</li>
            </ul>
          </div>
        </div>
      </li> 
      -->
    </ul>
    <a href="#closeMenu" class="close-menu">×</a>
  </nav>
</header>