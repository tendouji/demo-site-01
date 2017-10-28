/* Media functions */

function initMedia() {
  $.getJSON(siteConst.siteJSON, function( data ) {
    mediaData = data.media;
    var mediaStr = '';
    for(var i in mediaData) {
      if(mediaData.hasOwnProperty(i)) {
        var tempStr = '<div class="media-segment" data-year="' + i + '">';
        tempStr += '<div class="wrapper">';
        tempStr += '<h2>' + i + '</h2>';
        tempStr += '<ul>';
        for(var j in mediaData[i]) {
          tempStr += '<li><a class="media-lightbox" href="assets/media/' + i + '/' + mediaData[i][j].imageName + '-b.jpg" style="';
          tempStr += 'background-image:url(\'assets/media/' + i + '/' + mediaData[i][j].imageName + '.jpg\')';
          tempStr += '" title="' + i + ': ' + mediaData[i][j].description;
          tempStr += '"></a></li>';
        }
        tempStr += '</ul></div>';
        tempStr += '</div>';
      }
      mediaStr += tempStr;
    }
    $('.media .media-segment').replaceWith(mediaStr);
    $('.media').magnificPopup({
      delegate: 'a.media-lightbox',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      }
    });
  });
}