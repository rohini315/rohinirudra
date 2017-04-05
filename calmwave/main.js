var $document = $(document)

$document.scroll(function() {
  if ($document.scrollTop() >= 130) {
      $('span').addClass('half');
    } else {
      $('span').removeClass('half');
    }
  if ($document.scrollTop() >= 200) {
      $('span').addClass('whole');
      $('span').removeClass('half');
    } else {
      $('span').removeClass('whole');
    }
  });