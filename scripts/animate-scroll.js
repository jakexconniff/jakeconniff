let animations = document.getElementsByClassName('animate-scroll');
let elPos = '';

function scroller() {
  let posY = window.pageYOffset;

  for (var i = 0; i < animations.length; i++) {
    let elPos = animations[i].offsetTop - window.innerHeight;

    if (((posY > elPos) && ($(animations[i]).hasClass('hidden'))) || (elPos == 0)) {
      $(animations[i]).removeClass("hidden");
      if ($(animations[i]).hasClass('in')) {
        $(animations[i]).addClass('anim-fade-in');
      }
      else if ($(animations[i]).hasClass('up')) {
        $(animations[i]).addClass('anim-fade-up');
      }
    }
  }
}

scroller();

$(window).on('scroll', _.throttle(function() {
  scroller();
}, 120));
