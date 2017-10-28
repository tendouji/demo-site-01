<?php 
$page = "album";
include('page-top.php'); 
?>

<div class="pager page-1">
  <div class="album-segment top">
    <div class="bg"></div>
    <div class="fg">
      <div class="wrapper">

        <?php include('header.php'); ?>

        <h2>Cinnabar Rouge</h2>
      </div> 
      <a href="about.php" class="other-album-link" id="otherAlbumLink">&nbsp;</a>
    </div>
  </div> 
</div>

<div class="pager page-2">
  <div class="album-segment description">
    <div class="bg"></div>
    <div class="fg">
      <div class="wrapper vertical-centered">

        <div class="description-content vertical-content">
          <div class="description-header">
            <div class="content-left">
              <h2 id="albumDescriptionTitle"></h2>
              <span id="albumDescriptionDate" class="subtext"></span>
            </div>
            <div id="albumDescriptionLang" class="content-right"></div>
          </div>
          <div class="description-body">
            <div id="albumDescriptionLeft" class="content-left"></div>
            <div id="albumDescriptionRight" class="content-right"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<div class="pager page-3">
  <div class="album-segment song-list">
    <div class="bg"></div>
    <div class="fg">
      <div class="wrapper">
        <div class="song-list-content">

          <div class="song-player">
            <audio controls id="audioPlayer">
                <source id="audioPlayerMP3" src="http://techslides.com/demos/samples/sample.mp3" type="audio/mpeg">
                <source id="audioPlayerOGG" src="http://techslides.com/demos/samples/sample.ogg" type="audio/ogg">
                Your browser does not support the audio element. 
            </audio>

            <div class="song-control no-sound">
              <a id="previousSong" class="track-nav disabled" href="#previous"></a>
              <a id="play" class="pie-wrapper" href="#playAudio">
                  <div class="pie-center">
                      <div class="pie-arrow"></div>
                  </div>
                  <div class="pie">
                      <div class="left-side half-circle"></div>
                      <div class="right-side half-circle"></div>
                  </div>
              </a>
              <a id="nextSong" class="track-nav" href="#next"></a>
            </div>

            <a class="button blue rounded" id="buyAlbumLink" href="#buy">Buy this album</a>
          </div>

          <div class="playlist">
              <h2 class="content-animate title-slide-in line">
                <span>Song List.</span>
              </h2>
              <div id="songList">
                <div class="preloader"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

<div class="pager page-4">
  <div class="album-segment photo-gallery panel-curtain">
    <div class="fg">
      <ul>
        <li><a></a></li>
        <li><a></a></li>
        <li><a></a></li>
        <li><a></a></li>
        <li><a></a></li>
      </ul>
    </div>
  </div>
</div>

<div class="pager page-5">
  <div class="album-segment footer-panel">
    <div class="fg">
      <?php include('footer.php'); ?>
    </div>
  </div>
</div>

<?php include('page-bottom.php'); ?>