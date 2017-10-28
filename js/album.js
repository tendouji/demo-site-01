/* Album functions */

function animatePanel(n) {
  var obj = $('.page-' + n);
  if( isPage('album') ) {  
    if(n != 3) {
      // not song list segment
      stopAudio();
      resetPlayButton();
      curTrack = 0;
      $('.song-control').addClass('no-sound');
      $('#previousSong').addClass('disabled');
    }
    switch(n) {
      case 1: 
        obj.find('.bg').fadeIn(300, function() {
          $(this).addClass('done');
        });
        break;
      case 2: 
        obj.find('.bg').fadeIn(300, function() {
          $(this).addClass('done');
        });
        break;
      case 3: 
        obj.find('.bg').fadeIn(300, function() {
          $(this).addClass('done');
          var titleObj = obj.find('h2.line');
          animateTitle( titleObj );
          resetPlayButton();
          obj.find('.song-player, #songList').css('opacity', 1);
        });
        break;
      case 4: 
        var page4Elm = obj.find('.panel-curtain.photo-gallery'),
          page4fg = page4Elm.find('.fg');
        animatePanelCurtain(page4Elm, function(obj) {
          page4fg.css('opacity', 1);
        });
        break;
    }
  }
}

var albumID = 1, fullAlbumData = {}, albumData = {};

function querySt(ji) {
  hu = window.location.search.substring(1);
  gy = hu.split("&");
  for (i = 0; i < gy.length; i++) {
    ft = gy[i].split("=");
    if (ft[0] == ji) {
      return ft[1];
    }
  }
}

function initAlbum() {
  if(typeof querySt('id') != 'undefined') {
    albumID = querySt('id');
  }

  $.getJSON(siteConst.siteJSON, function( data ) {
    fullAlbumData = data.album;
    albumData = fullAlbumData[albumID];

    setOtherAlbumLink();
    setAlbumDescription();
    setBuyAlbumLink();
    
    var songListData = albumData['song-list'],
      songListArr = ['<ol>'];

    totalTrack = songListData.length;
    for(var i=1; i<=totalTrack; i++) {
      var songTitle = '', 
        songTitleEn = '', 
        songTitleZh = '';

      if(songListData[i-1].titles) {
        var tempSongTitle = '';
        for(var j=0; j<songListData[i-1].titles.length; j++) {
          songTitleEn = songListData[i-1].titles[j]['title-en'];
          songTitleZh = songListData[i-1].titles[j]['title-zh'];
          tempSongTitle += songTitleEn + (songTitleZh == '' ? '' : ' • ' + songTitleZh);
          if(j != songListData[i-1].titles.length-1) 
            tempSongTitle += ' / ';
        }
        songTitle = tempSongTitle;
      } else {
        songTitleEn = songListData[i-1]['title-en'];
        songTitleZh = songListData[i-1]['title-zh'];
        songTitle = songTitleEn + (songTitleZh == '' ? '' : ' • ' + songTitleZh);
      }

      var tempArr = [
        '<li>',
        '<a href="#', i, '" class="song-link" data-track="', songListData[i-1]['track-file'] ,'">', songTitle, '</a>',
        '</li>'
      ];
      songListArr = songListArr.concat(tempArr);
    }
    songListArr = songListArr.concat(['</ol>']);

    $('#songList').html(songListArr.join(''));

    initPlayer();
  });
}

function setOtherAlbumLink() {
  var linkStr = 'View album&nbsp;', 
    otherAlbumID = albumData['other-album-link'], 
    otherAlbumName = fullAlbumData[otherAlbumID].title;
  
  linkStr += leadingZero(otherAlbumID, 2) + '&nbsp;&nbsp;-&nbsp;&nbsp;' + otherAlbumName + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→'; 
  $('#otherAlbumLink').html(linkStr).attr('href', 'albums.php?id=' + otherAlbumID);
}

var descriptionData;
function setAlbumDescription() {
  descriptionData = albumData['description-content'];
  if(Object.keys(descriptionData).length > 1) {
    var langStr = '';
    for(var i in Object.keys(descriptionData)) {
      var _lang = Object.keys(descriptionData)[i];
      langStr += '<a href="javascript:injectDescriptionContent(\'' + _lang + '\')" ' + 
                  'data-lang="' + _lang + '">' + _lang + '</a>';
    }
    $('#albumDescriptionLang').html(langStr);
  }
  injectDescriptionContent(Object.keys(descriptionData)[0]);
}

function injectDescriptionContent(lang) {
  $('.description-content').hide();
  $('#albumDescriptionTitle').html(descriptionData[lang]['title']);
  $('#albumDescriptionDate').html(descriptionData[lang]['released-date']);
  $('#albumDescriptionLeft').html(descriptionData[lang]['description-left']);
  $('#albumDescriptionRight').html(descriptionData[lang]['description-right']);
  $('#albumDescriptionLang').find('a').removeClass('active');
  $('#albumDescriptionLang').find('a[data-lang="' + lang + '"]').addClass('active');
  $('.description-content').fadeIn(100);
}

function setBuyAlbumLink() {
  var linkStr = albumData['buy-album-link'];
  $('#buyAlbumLink').attr('href', linkStr);
}

function leadingZero(num, size) {
    var s = '000000000' + num;
    return s.substr(s.length - size);
}

var frameID, curTrack = 0, totalTrack = 0;
function loopFrame() { 
    // do something
    var curAudioTime = _audio.currentTime,
        totalAudioTime = _audio.duration;
    var percentage = Math.round( (curAudioTime / totalAudioTime) * 100 );
    generateProgress(percentage);     
    if( percentage >= 100 ) {
        cancelAnimationFrame(frameID);
        //reset play button will be done in ended listener
        return;
    }
    frameID = requestAnimationFrame(loopFrame);
}

var _audio, _play, _pause;
function initPlayer() {
    generateProgress(0);
    _audio = document.getElementById('audioPlayer');
    _play = document.getElementById('play');
    
    $(_play).on('click', playAudio);
    $(_audio).on('ended', checkNextSong);

    $('.song-link').on('click', selectSong);
    $('#previewAllLink').on('click', previewAllTracks);
    $('#previousSong, #nextSong').on('click', navigateSong);
}

function navigateSong(e) {
  e.preventDefault();
  var _this = $(e.target);
  if( _this.hasClass('disabled') ) 
    return;
  var dir = _this.attr('id');
  if(dir == 'previousSong') {
    $('#songList li').eq(curTrack-2).find('a').trigger('click');
  }
  if(dir == 'nextSong') {
    $('#songList li').eq(curTrack).find('a').trigger('click');
  }
}

function playAudio(e) {
    e.preventDefault();
    if( !$(_play).hasClass('playing') ) {
        $(_play).addClass('playing');
        frameID = requestAnimationFrame(loopFrame);
        _audio.play();

        if(curTrack > 1)  $('#previousSong').removeClass('disabled');
        else              $('#previousSong').addClass('disabled');
        if(curTrack < totalTrack) $('#nextSong').removeClass('disabled');
        else                      $('#nextSong').addClass('disabled');
    } else {
        _audio.pause();
        cancelAnimationFrame(frameID);
        $(_play).removeClass('playing');
        resetPlayButton();
    }
}

function generateProgress(n) {
  if(n <= 50) $('.right-side').hide();
  if(n > 50) {
      $('.pie').css('clip', 'rect(auto, auto, auto, auto)');
      $('.right-side').show().css('transform', 'rotate(180deg)');
  }
  var rot = n * 3.6;
  $('.left-side').css('transform', 'rotate(' + rot + 'deg)');
}

function resetPlayButton() {
  if(_audio) _audio.pause();
  cancelAnimationFrame(frameID);
  $(_play).removeClass('playing');

  $('.pie').css('clip', 'rect(0, 100px, 100px, 50px)');
  $('.right-side').hide().css('transform', 'rotate(0deg)');
  $('.left-side').css('transform', 'rotate(0deg)');

  $('#songList').find('li').removeClass('active');
}

function selectSong(e) {
  e.preventDefault();
  $('.song-control').removeClass('no-sound');

  var track = 'assets/album/' + albumData['assets-folder'] + '/sample-track/' + $(e.target).data('track'),
    curList = $(e.target).parent('li');
  curTrack = ($(e.target).attr('href')).replace('#','');

  $('#audioPlayerMP3')[0].src = track + '.mp3';
  $('#audioPlayerOGG')[0].src = track + '.ogg';
  _audio.load();

  resetPlayButton();

  $('#songList li').removeClass('active');
  curList.addClass('active');

  playAudio(e);
}

function stopAudio() {
  if(_audio) _audio.pause();
  $('#audioPlayerMP3')[0].src = '';
  $('#audioPlayerOGG')[0].src = '';
}

function checkNextSong() {
  $(_play).removeClass('playing');
  resetPlayButton();
  if(curTrack < totalTrack) {
    $('#nextSong').trigger('click');
  }
}

function previewAllTracks(e) {
  e.preventDefault();
  $('#songList li').eq(0).find('a').trigger('click');
}