        <div class="site-preloader">
            <div class="preloader-bar">
                <div class="preloader-status"></div>
            </div>
            loading... <span id="preloaderText">0%</span>
        </div>

        <div class="bottom-quicklink">
            <ul>
              <li class="back-to-top">
                <a href="javascript:goToTop();"><span>&#708;</span>top</a>
              </li>
              <!-- <li class="menu">
                <a href="#top">Menu</a>
                <ul>
                  <li<?php echo ($page=="home" ? " class=\"active\"" : "") ?>>
                    <a href="index.php">Home</a>
                  </li>
                  <li<?php echo ($page=="about" ? " class=\"active\"" : "") ?>>
                    <a href="about.php">About</a>
                  </li>
                  <li<?php echo ($page=="album" ? " class=\"active\"" : "") ?>>
                    <a href="albums.php?id=1">Albums</a>
                  </li>
                  <li<?php echo ($page=="gallery" ? " class=\"active\"" : "") ?>>
                    <a href="photos.php">Photos</a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCubwqlAHiV0O8JtPJ-4Mr0g" target="blank">Videos</a>
                  </li>
                  <li<?php echo ($page=="media" ? " class=\"active\"" : "") ?>>
                    <a href="media.php">Media</a>
                  </li>
                  <li<?php echo ($page=="contact" ? " class=\"active\"" : "") ?>>
                    <a href="contact.php">Contact</a>
                  </li>
                </ul>
              </li> -->
            </ul>
        </div>

        <!-- page content ends here -->

        <script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.12.0.min.js"><\/script>')</script>
        
        <?php if($page=="home") { ?>
        <script src="js/vendor/swiper.jquery.min.js"></script>
        <script src="js/home.js"></script>
        <script>
            var fileListLoadArr = [
                'img/home-about.jpg',
                'img/home-gallery.jpg',
                'img/home-video.png',
                'img/home-about.jpg',
                'assets/album/village-voice/home-img/slider-1.jpg',
                'assets/album/village-voice/home-img/slider-2.jpg',
                'assets/album/village-voice/home-img/slider-3.jpg',
                'assets/album/village-voice/home-img/slider-4.jpg',
                'assets/album/adventure-capital/home-img/slider-1.jpg',
                'assets/album/adventure-capital/home-img/slider-2.jpg',
                'assets/album/adventure-capital/home-img/slider-3.jpg'
            ];
        </script>
        <?php } ?>

        <?php if($page=="about") { ?>
        <script src="js/about.js"></script>
        <script>
            var fileListLoadArr = [
                'img/about-concert.jpg',
                'img/about-credentials.jpg',
                'img/about-theatre.jpg',
                'img/about-top.jpg'
            ];
        </script>
        <?php } ?>

        <?php if($page=="album") { ?>
        <script src="js/album.js"></script>
        <script>
            var fileListLoadArr = [
                'img/album-village-voice.jpg',
                'img/album-village-voice-description.jpg',
                'img/album-adventure-capital.jpg',
                'img/album-adventure-capital-description.jpg',
                'img/album-adventure-capital-song-list.jpg',
                'assets/album/village-voice/photo-gallery/photo-1.jpg',
                'assets/album/village-voice/photo-gallery/photo-2.jpg',
                'assets/album/village-voice/photo-gallery/photo-3.jpg',
                'assets/album/village-voice/photo-gallery/photo-4.jpg',
                'assets/album/village-voice/photo-gallery/photo-5.jpg',
                'assets/album/adventure-capital/photo-gallery/photo-1.jpg',
                'assets/album/adventure-capital/photo-gallery/photo-2.jpg',
                'assets/album/adventure-capital/photo-gallery/photo-3.jpg',
                'assets/album/adventure-capital/photo-gallery/photo-4.jpg',
                'assets/album/adventure-capital/photo-gallery/photo-5.jpg'
            ];
        </script>
        <?php } ?>
        
        <?php if($page=="gallery") { ?>
        <script src="js/vendor/jquery.magnific-popup.min.js"></script>
        <script src="js/gallery.js"></script>
        <script>

            var fileListLoadArr = [
                <?php 
                    include('gallery-getfiles-2.php'); 
                ?>
            ];
        </script>
        <?php } ?>
        
        <?php if($page=="media" ) { ?>
        <script src="js/vendor/jquery.magnific-popup.min.js"></script>
        <script src="js/media.js"></script>
        <?php } ?>

        <?php if($page=="contact" ) { ?>
        <script src="js/contact.js"></script>
        <?php } ?>
        
        <script src="js/main.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <!-- <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='https://www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script> -->
    </body>
</html>
