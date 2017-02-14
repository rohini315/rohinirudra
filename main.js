var delays = {
  'name': 400,
  'intro':900,
  'dash': 1200,
  'job': 1700,
  'about': 2200,
  'links': 2500,
  'dash_two': 2700,
  'port': 2900,
  'github': 3100,
  'linked': 3300,
  'resume': 3500,
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
