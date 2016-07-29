let animations = document.getElementsByClassName('animate-scroll');
let elPos = '';

function scroller() {
  let posY = window.pageYOffset;
  for (var i = 0; i < animations.length; i++) {
    let elPos = animations[i].offsetTop - window.innerHeight;
    if (
        (
          (posY > elPos) &&
          ($(animations[i]).hasClass('hidden'))
        ) ||
        (elPos == 0)
      ) {
      console.log("Item: " + i + " on the screen!");
      console.log(animations[i]);
      $(animations[i]).removeClass("hidden");
      $(animations[i]).addClass("anim-fade-in");
    }
  }
}

scroller();

$(window).on('scroll', _.throttle(function() {
  console.log("TEST");
  scroller();
}, 120));
console.log(animations);
