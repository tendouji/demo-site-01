<?php 
$page = "home";
include('page-top.php'); 
?>

<div class="pager page-1">
  <div class="home-segment about">
    <div class="bg"></div>
    <div class="fg">
      <div class="wrapper vertical-centered">

        <?php include('header.php'); ?>

        <div class="about-content vertical-content">
          <h2 class="head-text quote">
            When you sing<br>
            your brain releases<br>
            "feel-good" chemicals<br>
            including endorphins.
            <span class="quote-name">- NIMMI</span>
          </h2>
          <div class="paragraph">
            <p>
              Nam eu faucibus nibh, id placerat urna. Praesent vitae placerat tortor. Duis eget sapien id diam vehicula vulputate sit amet vel metus. Maecenas ac metus ut odio pretium maximus. Aliquam suscipit sapien nulla, eu mattis dui semper vitae. Sed volutpat viverra laoreet. Mauris sit amet sem pharetra, aliquam nibh vel, consectetur est. Donec nec molestie lectus, quis fermentum eros. Praesent varius tortor suscipit posuere tempor. Morbi vitae posuere magna. Nulla facilisis quis odio sit amet faucibus.
            </p>
            <a href="about.php" class="button rounded">Continue Reading</a>
          </div>
        </div>
      </div> 
    </div>
  </div> 
</div>

<div class="pager page-2">
  <div class="home-segment album">
    <div class="fg">
      <div class="wrapper clearfix">
        <div class="preview-area panel-cover">
          <div class="image-slider swiper-container">
            <div class="swiper-wrapper" id="homeImageSlider"></div>
            <div class="swiper-pagination"></div>
          </div>
          <a href="#playVideo" id="homePlayVideo" class="image-overlay"></a>
          <div class="video-player">
            <div class="video-container" id="homeVideoPlayer">
              <div class="preloader"></div>
            </div>
            <a class="video-close" href="#closeVideo"><span>×</span> Close video</a>
          </div>
        </div>
        <div class="video-list vertical-centered">
          <div class="vertical-content">
            <h2 class="content-animate title-slide-in line">
              <span>Albums</span>
            </h2>
            <ul class="album-list" id="albumList">
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="pager page-3">
  <div class="wrapper">
    <div class="home-segment half gallery panel-curtain">
      <div class="bg"></div>
      <div class="fg vertical-centered">
        <div class="gallery-content vertical-content">
          <h2 class="title-3-lines content-animate" data-order="1">
            <span>Photos</span>
            <i></i>
          </h2>

          <div class="content-animate" data-order="2">
            <span>
              <a href="photos.php" class="button rounded">View</a>
            </span>
          </div>
        </div>
      </div>
    </div> 
    <div class="home-segment half video panel-curtain">
      <div class="bg"></div>
      <div class="fg vertical-centered">
        <div class="video-content vertical-content">
          <h2 class="title-3-lines content-animate" data-order="1">
            <span>Videos</span>
            <i></i>
          </h2>

          <div class="content-animate" data-order="2">
            <span>
              <a href="#youtube" class="button rounded">Watch</a>
            </span>
          </div>
        </div>
      </div>
    </div> 
  </div> 
</div>

<div class="pager page-4">
  <div class="home-segment social-network panel-curtain">
    <div class="fg">
      <div class="wrapper clearfix">
        <div class="social-network-links vertical-centered">
          <div class="vertical-content social-network-content">
            <h2 class="content-animate">
              <span>NIMMI on Social </br>Media.</span>
            </h2>
            <ul class="social-network-list">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#youtube">Youtube</a></li>
              <li><a href="#instagram">Instagram</a></li>
            </ul>
            <ul class="contact-info">
              <li><a href="tel:+60123456789">+60 12 345 6789</a></li>
              <li><a href="mailto:tendoujir@gmail.com">tendoujir@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div class="testimonial vertical-centered">
          <div class="vertical-content testimonial-content">
            <h2 class="content-animate">
              <span>Testimonial</span>
            </h2>
            <div class="testimonial-slider swiper-container">
              <div class="swiper-wrapper" id="testimonialSlider"><span>loading...</span></div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="pager page-5">
  <div class="wrapper">
    <div class="home-segment half latest-news panel-curtain">
      <div class="bg"></div>
      <div class="fg vertical-centered">
        <div class="latest-news-content vertical-content">
          <h2 class="content-animate" data-order="1">
            <span>Latest <br>news</span>
          </h2>
          <div class="content-animate subtext" data-order="2">
            <span>See our latest news on our Facebook</span>
          </div>
          <div class="content-animate" data-order="3">
            <span>
              <a href="#latestnews" class="button rounded">Read all news</a>
            </span>
          </div>
        </div>
      </div>
    </div> 
    <div class="home-segment half calendar panel-curtain">
      <div class="fg vertical-centered">
        <div class="calendar-content vertical-content">
          <h2 class="content-animate" data-order="1">
            <span>Shows</span>
          </h2>

          <div class="calendar-frame content-animate" data-order="2">
            <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=en.malaysia%23holiday%40group.v.calendar.google.com&amp;color=%23B1365F&amp;ctz=Asia%2FKuala_Lumpur" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    </div> 
  </div> 
</div>

<?php include('page-bottom.php'); ?>
