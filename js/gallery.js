/* Gallery functions */

function initGallery() {
  $.getJSON('gallery-getfiles.php', function( data ) {
    galleryData = data.gallery;
    var galleryStr = '<div class="masonry">';
    for(var i in galleryData) {
      galleryStr += '<a class="gallery-lightbox" href="assets/gallery/' + galleryData[i].large + '">';
      galleryStr += '<img src="assets/gallery/' + galleryData[i].thumbnail + '" />';
      galleryStr += '<span class="image-overlay" style="background-image: url(assets/gallery/' + galleryData[i].thumbnail + ')"><span>';
      galleryStr += '</a>';
    }
    galleryStr += '</div>';
    $('.gallery-panel').html(galleryStr);

    $('.gallery-panel').magnificPopup({
      delegate: 'a.gallery-lightbox',
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