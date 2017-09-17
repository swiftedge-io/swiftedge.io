// reveal items on scroll
var sr = ScrollReveal({ reset: false });
sr.reveal('.about', { duration: 300 });
sr.reveal('.techs li', { duration: 1000 }, 20);
sr.reveal('.services .from-left', { duration: 500, origin: 'left', distance: '90px' }, 200);
sr.reveal('.services .from-bottom', { duration: 500, origin: 'bottom', distance: '90px' }, 200);
sr.reveal('.services .from-right', { duration: 500, origin: 'right', distance: '90px' }, 200);

// Smooth reveal Header background image once it loaded
var bgimage = new Image();
bgimage.src="/static/hb.png";
$(".background").hide();
$(bgimage).on('load', function(){
    $(".background").css("background-image","url("+$(this).attr("src")+")").fadeIn(800);
 });

// slider config
$('.work-slider').slick();

// sticky navbar
var navbar = document.getElementById('navbar');
var toTop = document.getElementById('to-top');
window.onscroll = function() {
  if (document.body.scrollTop === 0) {
    navbar.className = '';
    toTop.className = 'back-top';
  } else {
    navbar.className = 'solid';
    toTop.className = 'back-top show'
  }
}

// nav items smooth scroll
$('nav, .nav').find('a').click(function(e) {
  e.preventDefault();
  var $this = $(this);
  var $goTo = $($this.attr('href'));

  $("html, body").animate({
    scrollTop: $goTo.offset().top - 100
  }, 1000);
});

$('#to-top').click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
});

// from validation and submit handle
var $form = $('form');
var requiredFields = [
  $form.find('input[name="name"]'),
  $form.find('input[name="email"]'),
  $form.find('textarea')
];

requiredFields.forEach(function($elem) {
  $elem.on('input', function() {
    if (!$elem.val()) {
      $elem.parents('.input-group').first().addClass('error');
    } else {
      $elem.parents('.input-group').first().removeClass('error');
    }
  });
})

$form.on('submit', function(e) {
  e.preventDefault();
  var errors = 0;
  requiredFields.forEach(function($elem) {
    if (!$elem.val()) {
      errors += 1;
      $elem.parents('.input-group').first().addClass('error');
    } else {
      $elem.parents('.input-group').first().removeClass('error');
    }
  });

  if (!errors) {
    $form.find('button').find('i').css({'display': 'inline-block'});

    setTimeout(function() {
      $.ajax({
        url: $form.attr('action'),
        data: $form.serialize(),
        method: 'POST',
        success: function(res) {
          $form.find('input, textarea').val('');
          $form.find('button').find('i').hide();
        },
        error: function(res) {
          Object.keys(res.responseJSON.errors).forEach(function(name) {
            $form
              .find(`[name=${name}]`)
              .parents('.input-group')
              .first()
              .addClass('error');
          });
          $form.find('button').find('i').hide();
        }
      });
    }, 500);
  }
});
