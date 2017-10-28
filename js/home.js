/* Home functions */

var jsonData = {}, albumData = {};

function animatePanel(n) {
  var obj = $('.page-' + n);
  if( isPage('home') ) {  
    if(n != 2) {
      // not album segment
      stopHomeAlbumVideo();
    }
    switch(n) {
      case 1: 
        obj.find('.bg').fadeIn(300, function() {
          $(this).addClass('done');
        });
        break;
      case 2: 
        var titleObj = obj.find('h2.line');
        animateTitle( titleObj );
        obj.find('.album-list').css('opacity', 1);
        if(homeImageSwiper) homeImageSwiper.startAutoplay();
        break;
      case 3: 
        var page3Elm = [obj.find('.panel-curtain.gallery'), obj.find('.panel-curtain.video')];
        for(var i in page3Elm) {
          animatePanelCurtain(page3Elm[i], function(obj) {
            obj.find('.bg').fadeIn(300, function() {
              $(this).addClass('done');
              obj.find('.content-animate').each(function() {
                animateContent($(this));
              });
            });
          });
        }
        break;
      case 4: 
        var page4Elm = obj.find('.panel-curtain.social-network'),
          page4fg = page4Elm.find('.fg');
        animatePanelCurtain(page4Elm, function(obj) {
          obj.find('.content-animate').each(function() {
            animateContent($(this));
            obj.find('.social-network-list, .contact-info, .testimonial-slider').css('opacity', 1);
          });
        });
        setTimeout(function() {
          page4fg.show();
          initSocialNetwork();
        }, 150);
        break;
      case 5: 
        var page5Elm = [obj.find('.panel-curtain.latest-news'), obj.find('.panel-curtain.calendar')];
        for(var i in page5Elm) {
          var page5fg = page5Elm[i].find('.fg');
          animatePanelCurtain(page5Elm[i], function(obj) {
            if( obj.find('.bg').length > 0 ) {
              obj.find('.bg').fadeIn(300, function() {
                $(this).addClass('done');
                obj.find('.content-animate').each(function() {
                  animateContent($(this));
                });
              });
            } else {
              obj.find('.content-animate').each(function() {
                animateContent($(this));
                obj.find('.calendar-frame').css('opacity', 1);
              });
            }
          });
          setTimeout(function() {
            page5fg.show();
          }, 150);
        }
        break;
    }
  }
}

function initHomeAlbum() {
  $.getJSON(siteConst.siteJSON, function( data ) {
    jsonData = data.home;
    albumData = data.album;

    initSocialNetwork();
    
    var albumLinkArr = [];
    // album links
    for(var i=1; i<=Object.keys(albumData).length; i++) {
      var tempArr = [
        '<li>',
        '<a href="#video" class="album-link" data-album="', i ,'">', albumData[i].title, '</a>',
        '<a href="album.php?id=', i, '" class="cta">Find out more</a>',
        '</li>'
      ];
      albumLinkArr = albumLinkArr.concat(tempArr);
    }
    $('#albumList').html(albumLinkArr.join(''));

    var albumSegment = $('.home-segment.album'),
      albumLinks = albumSegment.find('.album-link'),
      imageSlider = albumSegment.find('.image-slider'),
      videoPlayer = albumSegment.find('#homeVideoPlayer'),
      stopVideoLink = albumSegment.find('.video-close'),
      playVideoLink = albumSegment.find('#homePlayVideo');

    albumLinks.each(function() {
      $(this).on('click', function(e) {
        e.preventDefault();
        var n = $(this).data('album');
        _continue(n);
      });
    });

    stopVideoLink.on('click', function(e) {
      e.preventDefault();
      if(videoPlayer.find('iframe').length > 0) {
        // is youtube
        videoPlayer.empty();
        /*
        var ytSrc = videoPlayer.find('iframe').attr('src');
        ytSrc = ytSrc.replace('&autoplay=1', '');
        videoPlayer.find('iframe').attr('src', ytSrc);
        */
      } else {
        // is video tag
        videoPlayer[0].stop();
      }
      $('.video-player').fadeOut(200, function() {
        playVideoLink.show();
        if(homeImageSwiper) homeImageSwiper.startAutoplay();
      });
    });

    playVideoLink.on('click', function(e) {
      e.preventDefault();
      $(this).hide();

      if(homeImageSwiper) homeImageSwiper.stopAutoplay();
      $('.video-player').fadeIn(200, function() {
        if(videoPlayer.find('#youtubeid').length > 0) {
          // is youtube
          var youtubeid = videoPlayer.find('#youtubeid').text(), 
            videoPlayerStr = [
            '<iframe data-youtubeid="', youtubeid, '" width="100%" height="100%" frameborder="0" allowfullscreen ',
            'src="https://www.youtube.com/embed/', youtubeid, '?rel=0&autoplay=1">',  
            '</iframe>'];
          videoPlayer.html(videoPlayerStr.join(''));
        } 
        if(videoPlayer.find('video').length > 0) {
          // is video tag
          videoPlayer[0].play();
        }
      });
    });

    function _continue(nn) {
      albumLinks.parent('li').removeClass('active');
      albumLinks.eq(nn-1).parent('li').addClass('active');
      showAlbumPreview(nn);
    }
    _continue(1);
  });
}

function stopHomeAlbumVideo() {
  var albumSegment = $('.home-segment.album'),
    videoPlayer = albumSegment.find('#homeVideoPlayer'),
    playVideoLink = albumSegment.find('#homePlayVideo'), 
    youtubeIDStr = '', 
    videoPlayerStr = '';
  if(videoPlayer.find('iframe').length > 0) {
    // is youtube
    //videoPlayer.empty();
    youtubeIDStr = videoPlayer.find('iframe').data('youtubeid');
    //console.log()
    videoPlayerStr = ['<span id="youtubeid">', youtubeIDStr, '</span>'];
    videoPlayer.html(videoPlayerStr.join(''));
    /*
    var ytSrc = videoPlayer.find('iframe').attr('src');
    ytSrc = ytSrc.replace('&autoplay=1', '');
    videoPlayer.find('iframe').attr('src', ytSrc);
    */
  }
  if(videoPlayer.find('video').length > 0) {
    // is video tag
    videoPlayer[0].stop();
  }
  $('.video-player').hide();
  playVideoLink.show();
  if(homeImageSwiper) homeImageSwiper.startAutoplay();
}

var homeImageSwiper;
function showAlbumPreview(n) {
  var albumSegment = $('.home-segment.album'),
    previewArea = albumSegment.find('.preview-area'), 
    imageSlider = albumSegment.find('.image-slider'),
    imageSliderSlides = albumSegment.find('#homeImageSlider'),
    videoPlayer = albumSegment.find('#homeVideoPlayer'),
    playVideoLink = albumSegment.find('#homePlayVideo'), 

    videoPlayerStr = [],
    imagePlayerStr = [],
    assetsPath = 'assets/album/',
    videoPath = '/home-videos/';
    imagePath = '/home-img/';

  _albumData = albumData[n];
    
  // images    
  for(var i=1; i<= +_albumData['image-count']; i++) {
    var tempArr = ['<div class="swiper-slide"><div class="imager" style="background-image:url(\'',
      assetsPath, _albumData['assets-folder'], imagePath, 'slider-', i, '.jpg\')"></div></div>'];
    imagePlayerStr = imagePlayerStr.concat(tempArr);
  }

  // video    
  if(_albumData['youtube-id'] && _albumData['youtube-id'] != '') {
    /*
    videoPlayerStr = [
      '<iframe width="100%" height="100%" frameborder="0" allowfullscreen ',
      'src="https://www.youtube.com/embed/', _albumData['youtube-id'], '?rel=0">',  
      '</iframe>'];
    */
    videoPlayerStr = ['<span id="youtubeid">', _albumData['youtube-id'], '</span>'];
  } else {
    videoPlayerStr = [
      '<video controls>', 
      '<source src="', assetsPath, _albumData['assets-folder'], videoPath, 'video.mp4" type="video/mp4">',
      '<source src="', assetsPath, _albumData['assets-folder'], videoPath, 'video.ogg" type="video/ogg">',
      'Your browser does not support the video tag.', 
      '</video>'];
  }

  previewArea.addClass('content-animate-slide-in');
  if(homeImageSwiper) homeImageSwiper.destroy();
  playVideoLink.show();
  imageSlider.show();
  videoPlayer.empty();
  $('.video-player').hide();

  setTimeout(function() {
    videoPlayer.html(videoPlayerStr.join(''));
    imageSliderSlides.html(imagePlayerStr.join(''));
    homeImageSwiper = new Swiper('.image-slider', {
      speed: 1000,
      autoplay: 8000,
      effect: 'fade',
      fade: {
        crossFade: true
      }
    });  
    previewArea.removeClass('content-animate-slide-in');
  }, 250);
}

var testimonialSwiper;
function initSocialNetwork() {
  var testimonialSegment = $('.home-segment .testimonial'),
    testimonialSlider = testimonialSegment.find('#testimonialSlider'),
    testimonialStr = [];

  testimonialData = jsonData.testimonial;

  for(var i=0; i<testimonialData.length; i++) {
    var tempArr = ['<div class="swiper-slide"><div class="testimonial-message">',
                    testimonialData[i].message,
                    '</div><div class="testimonial-quoter">',
                    testimonialData[i].quoter,
                    '</div></div>'];
    testimonialStr = testimonialStr.concat(tempArr);
  }
  testimonialSlider.html(testimonialStr.join(''));
  testimonialSwiper = new Swiper('.testimonial-slider', {
    speed: 1000,
    autoplay: 20000,
    effect: 'fade',
    fade: {
      crossFade: true
    },
    pagination: '.testimonial-slider .swiper-pagination',
    paginationClickable: true,
    paginationBulletRender: function (swiper, index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  });  
}