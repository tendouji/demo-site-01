/* Contact functions */

var regexTel = /^[\d ()+-]+$/,
    regexEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

function initContact() {
  var _form = $('.contact-page').find('form');

  ( _form.find('input[type="tel"]')[0] ).addEventListener('keypress', function(e) {
      var keycode = (e.keyCode ? e.keyCode : e.which);
      if( !regexTel.test(String.fromCharCode(keycode)) ) { // a non–digit was entered
          e.preventDefault();
      }
  });

  ( _form.find('input[type="submit"]')[0] ).addEventListener('click', function(e) {
      e.preventDefault();
      var allowSent = true;
      _form.find('input, textarea').each(function() {
          var _input = $(this);
          _input.parent('.custom-input').removeClass('invalid');
          if( typeof validateInput(_input[0]) == 'string' ) {
              allowSent = false;
              _input.parent('.custom-input').addClass('invalid');
              showFormError(_input[0], validateInput(_input[0]));
          }
      });
      if(allowSent) _form.submit();
  });

  _form[0].addEventListener('invalid', function(e) {
      e.preventDefault();
  }, true );
}

function validateInput(obj) {
    var id = $(obj).attr('id'),
        val = $(obj).val();
    switch(id) {
        case 'name': 
            if(val == '') {
                return 'Please enter your name';
            }
            break;
        case 'email': 
            if(val == '') {
                return 'Please enter your email';
            }
            if(!regexEmail.test(val)) {
                return 'Please enter a correct email format';
            }
            break;
        case 'message': 
            if(val == '') {
                return 'Please enter your message';
            }
            break;
        case 'tel': 
            if(val == '') {
                return;
            }
            if(!regexTel.test(val)) {
                return 'Please enter a correct tel number';
            }
            break;
    }
}

function showFormError(obj, errorMsg) {
  var id = $(obj).attr('id');
  $('span.error[data-for="' + id + '"]').text(errorMsg);
}

function showOverlayMessage(str, success) {
  var ovMsg = $('.contact-page .overlay-message');
  ovMsg.find('#overlayMessage').text(str).end()
    .fadeIn(200, function() {
      ovMsg.delay(3000).fadeOut(200);
    });
  if(success && typeof success == 'boolean') {
    ($('.contact-page').find('form'))[0].reset();
  }
}