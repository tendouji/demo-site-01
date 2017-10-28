/* About functions */

function initAbout() {
}

function animatePanel(n) {
  var obj = $('.page-' + n);
  if( isPage('about') ) {  
    switch(n) {
      case 1: 
        obj.find('.bg').fadeIn(300, function() {
          $(this).addClass('done');
        });
        break;
      case 2: 
        var titleObj = obj.find('h2.line');
        animateTitle( titleObj );
        obj.find('.profile-paragraph').css('opacity', 1);
        break;
      case 3: 
        var page3Elm = obj.find('.panel-curtain.credentials'),
          page3fg = page3Elm.find('.fg');
        animatePanelCurtain(page3Elm, function(obj) {
          obj.find('.bg').fadeIn(300, function() {
            $(this).addClass('done');
            var titleObj = obj.find('h2.line');
            animateTitle( titleObj );
            obj.find('.credentials-list').css('opacity', 1);
          });
        });
        break;
      case 4: 
        var page4Elm = obj.find('.panel-curtain.concerts'),
          page4fg = page4Elm.find('.fg');
        animatePanelCurtain(page4Elm, function(obj) {
          obj.find('.content-animate').each(function() {
            obj.find('.bg').fadeIn(300, function() {
              $(this).addClass('done');
              var titleObj = obj.find('h2.line');
              animateTitle( titleObj );
              obj.find('.concerts-list').css('opacity', 1);
              obj.find('.content-right').css('opacity', 1);
            });
          });
        });
        break;
      case 5: 
        var page5Elm = obj.find('.panel-curtain.theatre-roles'),
          page5fg = page5Elm.find('.fg');
        animatePanelCurtain(page5Elm, function(obj) {
          obj.find('.content-animate').each(function() {
            obj.find('.bg').fadeIn(300, function() {
              $(this).addClass('done');
              var titleObj = obj.find('h2.line');
              animateTitle( titleObj );
              obj.find('.theatre-roles-list').css('opacity', 1);
              obj.find('.content-left').css('opacity', 1);
            });
          });
        });
        break;
      case 6: 
        var titleObj = obj.find('h2.line');
        animateTitle( titleObj );
        obj.find('.clientele-logos').css('opacity', 1);
        break;
    }
  }
}

function initScrollbar() {
  var allScrollbars = $('.scroll-panel');

  allScrollbars.each(function() {
    /*
    $(this).on('mouseenter touchstart', function() {
      siteConfig.curScrollPanel = $(this);
      siteConfig.inScrollPanel = true;
    }).on('mouseleave touchend', function() {
      siteConfig.curScrollPanel = null;
      siteConfig.inScrollPanel = false;
    });
    */

    var container = $(this)[0],
      content = $(this).find('.scroll-content')[0],
      scroll = $(this).find('.scroll-scrollbar .bar')[0];

    content.addEventListener('scroll', function(e) {
      scroll.style.height = ((container.clientHeight * content.clientHeight / content.scrollHeight)-5) + "px";
      scroll.style.top = container.clientHeight * content.scrollTop / content.scrollHeight + "px";
    });
    
    var event = new Event('scroll');

    window.addEventListener('resize', content.dispatchEvent.bind(content, event));
    content.dispatchEvent(event);

    scroll.addEventListener('mousedown', function(start) {
      start.preventDefault();
      var y = scroll.offsetTop;
      var onMove = function(end) {
        var delta = end.pageY - start.pageY;
        scroll.style.top = Math.min(container.clientHeight - scroll.clientHeight, Math.max(0, y + delta)) + 'px';
        content.scrollTop = (content.scrollHeight * scroll.offsetTop / container.clientHeight);
      };
      document.addEventListener('mousemove', onMove);
      document.addEventListener('mouseup', function() {
        document.removeEventListener('mousemove', onMove);
      });
    });
  });
}

function initClientele() {
  console.log('initClientele');
  $.getJSON('about-getclientele.php', function( data ) {
    clienteleData = data.clientele;
    var clienteleStr = '<div class="clientele-note">*note: these logos are for samples only, not my design.</div><ul>';
    for(var i in clienteleData) {
      clienteleStr += '<li><span class="clientele-logo" style="background-image:url(assets/clientele/' + clienteleData[i] + ')"></span></li>';
    }
    clienteleStr += '</ul>';
    $('.clientele-logos').html(clienteleStr);
  });
}