var delays = {
  'first': 400,
  'second':900,
  'third': 1200,
  'fourth': 1700,
  'fifth': 2200,
  'sixth': 2500,
  'seventh': 2700,
  'eigth': 2900,
  'ninth': 3100,
  'tenth': 3300,
  'eleventh': 3500,
  'twelfth': 4000,
}


$('#wrapper *').each(function(key, element){
    var className = element.className.split(' ')[0];
  
    $(this).delay(delays[className] || 700)
    .css({ opacity: 0.0, })
    .animate({
        opacity : 1.0,
   },600);
});

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
