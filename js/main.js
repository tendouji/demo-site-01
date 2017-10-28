var siteConst = {
  winObj: $(window),
  widthMarker: [320, 480, 600, 768, 1024],
  siteJSON: 'js/site.json',
  //scrollBody: ( (navigator.userAgent.toLowerCase()).indexOf('firefox') < 0 ? 'body' : 'html' )
  scrollBody: 'html'
};
var siteConfig = {
  winDimension: {
    width: 0,
    height: 0
  },
  page: {
    x: 0,
    y: 0
  }, 
  finishLoaded: false,
  allowStartSite: false,
  allowAnimation: true, 
  allowScroll: true, 
  pageScroll: 0,
  curScroll: 0,
  scrollDirection: '',
  totalPanel: 0,
  curPanel: 1,
  directScrollTop: false,
  curScrollPanel: null,
  inScrollPanel: false
};

window.onload = function() {
  setTimeout (function () {
    siteConst.winObj.on('scroll', bottomQuicklinkHandler);
    if( isPage('home') || isPage('about') || isPage('album') ) {
      scrollTo(0,0);

      siteConst.winObj.on('scroll', scrollHandler);
      //siteConst.winObj.on('wheel', wheelHandler);
      //siteConst.winObj.on('mousewheel', wheelHandler);
      //siteConst.winObj.on('touchmove', wheelHandler);
      //siteConst.winObj.on('touchmove', touchMoveHandler);
      siteConst.winObj.on('resize', resizeHandler);
      resizeHandler();
    }
    initHeader();
    initPage();
    preloadFile(0);
  }, 100);
}

function initPage() {
  siteConfig.totalPanel = $('.pager').length;
  if( isPage('home') ) {
    if(siteConfig.allowAnimation) animatePanel( siteConfig.curPanel );
    initHomeAlbum();
  }
  if( isPage('about') ) {
    if(siteConfig.allowAnimation) animatePanel( siteConfig.curPanel );
    initClientele();
    initScrollbar();
  }
  if( isPage('album') ) {
    if(siteConfig.allowAnimation) animatePanel( siteConfig.curPanel );
    initAlbum();
  }
  if( isPage('gallery') ) {
    initGallery();
  }
  if( isPage('media') ) {
    initMedia();
  }
  if( isPage('contact') ) {
    initContact();
  }
}

function isPage(n) {
  return $('body').hasClass(n);
}

function isIPad() {
  return navigator.userAgent.match(/iPad/i) != null;
}

var resizeTimer;
function resizeHandler() {
  siteConfig.winDimension.width = siteConst.winObj.width();
  siteConfig.winDimension.height = siteConst.winObj.height();  
  if(siteConfig.winDimension.width < siteConst.widthMarker[2])
    siteConfig.allowAnimation = false;
  else
    siteConfig.allowAnimation = true;

  if( !isIPad() ) {
    //resize done
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      setTimeout (function () {
        if( isPage('home') || isPage('about') || isPage('album') ) {
          scrollTo(0,0);
        }
        if(siteConfig.allowAnimation) animatePanel( siteConfig.curPanel );
      }, 100);
    }, 200);
  }
}

function bottomQuicklinkHandler() {
  siteConfig.curScroll = siteConst.winObj.scrollTop();
  if(siteConfig.curScroll > 200) {
    $('body').addClass('show-toplink');
  } else {
    $('body').removeClass('show-toplink');
  }
}

var stillScrolling = false;
var timeOffsetNext = 200;
var scrollTimer; 

function scrollHandler() {
  siteConfig.curScroll = siteConst.winObj.scrollTop();
  if(!siteConfig.directScrollTop) {

    if(siteConfig.allowAnimation) {
      if(typeof homeImageSwiper != 'undefined') homeImageSwiper.stopAutoplay();


      if(siteConfig.allowScroll) {
        siteConfig.allowScroll = false;

        if(siteConfig.curScroll == 0 && siteConfig.pageScroll == 0) { //page just started
          siteConfig.curPanel = 1;
        } else {
          if(siteConfig.curScroll > siteConfig.pageScroll) {
            siteConfig.scrollDirection = 'down';
            if(siteConfig.curPanel+1 <= siteConfig.totalPanel)
              //if(!siteConfig.inScrollPanel) siteConfig.curPanel++;
              siteConfig.curPanel++;
          } else {
            siteConfig.scrollDirection = 'up';
            if(siteConfig.curPanel-1 >= 1)
              //if(!siteConfig.inScrollPanel) siteConfig.curPanel--;
              siteConfig.curPanel--;
          }
        }

        /*if(siteConfig.inScrollPanel) {
          siteConfig.allowScroll = true;
          if(siteConfig.curScrollPanel) {
            var bar = siteConfig.curScrollPanel.find('.bar'), 
              scrollArea = siteConfig.curScrollPanel.find('.scroll-scrollbar');
            if(bar.position().top > scrollArea.height() - bar.height()) {
              //reach end of scroll
              if(siteConfig.scrollDirection == 'down') {
                siteConfig.curPanel++;
                var panelY = $('.page-' + siteConfig.curPanel).offset().top;
                scrollToPoint(panelY);
              }
            } 
            if(bar.position().top == 0) {
              //reach start of scroll
              if(siteConfig.scrollDirection == 'up') {
                siteConfig.curPanel--;
                var panelY = $('.page-' + siteConfig.curPanel).offset().top;
                scrollToPoint(panelY);
              }
            }
          }
        } else {*/

        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(function() {
          clearTimeout(scrollTimer);

          var panelY = $('.page-' + siteConfig.curPanel).offset().top;
          scrollToPoint(panelY);
        }, timeOffsetNext+100); //cannot be lesser than scroll to point timing else will be triggered

        //}
      }    
    }

  }
}

function scrollToPoint(n) {
  $(siteConst.scrollBody).animate({ scrollTop: n+'px' }, timeOffsetNext, function() {
    setTimeout(function() {
      siteConfig.pageScroll = siteConst.winObj.scrollTop();
      siteConfig.allowScroll = true;
      siteConfig.directScrollTop = false;
      animatePanel( siteConfig.curPanel );
    }, 100);
  });
}


function wheelHandler(e) {
  siteConfig.curScroll = siteConst.winObj.scrollTop();

  /*
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(function() {
    clearTimeout(scrollTimer);
  */
    if(!siteConfig.allowScroll) {
      return false;
    }
  /*
    scrollHandler();
  }, timeOffsetNext);
  */
}

function touchMoveHandler() {
  if(!siteConfig.allowScroll) {
    return false;
  }
}

function animateTitle(obj, callback) {
  if( obj.hasClass('content-animated') ) {
    return;
  }
  var tempObj = obj.find('span').eq(0).clone();
  tempObj.addClass('temp-obj')
    .css('opacity', 0)
    .appendTo(obj);
  obj.css('opacity', 1).addClass('content-animate-text-slide-in');
  setTimeout(function() {
    obj.removeClass('content-animate-text-slide-in').addClass('content-animated');
    obj.find('.temp-obj').remove();
    if(callback && typeof callback == 'function') {
      callback();
    }
  }, 100);
}

function animatePanelCurtain(obj, callback) {
  if( obj.hasClass('panel-animated') ) {
    return;
  }
  setTimeout(function() {
    obj.addClass('panel-animate-curtain-in');
    setTimeout(function() {
      obj.removeClass('panel-animate-curtain-in').addClass('panel-animate-curtain-out');
      setTimeout(function() {
        obj.removeClass('panel-animate-curtain-out').addClass('panel-animated');
        if(callback && typeof callback == 'function') {
          callback(obj);
        }
      }, 200);
    }, 200);
  }, 100);
}

function animateContent(obj) {
  if( obj.hasClass('content-animated') ) {
    return;
  }
  var order = +( obj.data('order') );
  if(obj.find('.temp-obj').length < 1) {
    var tempObj = obj.find('span').clone();
    tempObj.addClass('temp-obj')
      .css('opacity', 0)
      .appendTo(obj);
  }
  obj.css('opacity', 1);
  setTimeout(function() {
    obj.addClass('content-animate-curtain-in');
    setTimeout(function() {
      obj.removeClass('content-animate-curtain-in').addClass('content-animate-curtain-out');
      setTimeout(function() {
        obj.removeClass('content-animate-curtain-out').addClass('content-animated');
        obj.find('.temp-obj').remove();
      }, 200);
    }, 200);
  }, order*100);
}

function initHeader() {
  var menuLink = $('header .mobile-menu'), 
    closeMenuLink = $('header .close-menu'), 
    nav = $('header nav');

  menuLink.on('click', function(e) {
    e.preventDefault();
    if( !nav.hasClass('show-menu') ) {
      $('body').addClass('no-scroll');
      nav.addClass('show-menu');
    } else {
      $('body').removeClass('no-scroll');
      nav.removeClass('show-menu');
    }
  });
  closeMenuLink.on('click', function(e) {
    e.preventDefault();
    $('body').removeClass('no-scroll');
    nav.removeClass('show-menu');
  });
}

function preloadFile(n) {
  if(typeof fileListLoadArr != 'undefined' && fileListLoadArr.length > 0) {
    if(n < fileListLoadArr.length) {
      var imgPreload = new Image();
      imgPreload.onload = function() {
          imageLoaded(imgPreload, n);
      };
      //imgPreload.src = fileListLoadArr[n] + '?' + (+new Date());
      imgPreload.src = fileListLoadArr[n];
    } else {
      siteConfig.finishLoaded = true;
      closeSitePreloader();
    }
  } else {
    var percentage = 100;
    $('#preloaderText').text(percentage + '%');
    $('.preloader-status').css('width', percentage+'%');
    siteConfig.finishLoaded = true;
    closeSitePreloader();
  }
}

function imageLoaded(img, n) {
  if (img.complete || img.readyState === 4) {
    var percentage = Math.ceil( (100 / fileListLoadArr.length) * (n + 1) );
    $('#preloaderText').text((percentage > 100 ? '100' : percentage) + '%');
    $('.preloader-status').css('width', percentage+'%');
    preloadFile(n+1);
  } else {
    console.log('error'); 
  } 
}

function closeSitePreloader() {
  if(siteConfig.finishLoaded) {
    $('.site-preloader').fadeOut(300, function() {
      $(this).remove();
      $('body').removeClass('site-preloading');
    });
  }
}

function goToTop() {
  siteConfig.directScrollTop = true;
  siteConfig.curPanel = 1;
  scrollToPoint(0);
}

function showAlbumSubmenu() {
  var submenu = $('header').find('.sub-nav');
  if( submenu.hasClass('show') ) {
    submenu.removeClass('show');
  } else {
    submenu.addClass('show');
  }
}