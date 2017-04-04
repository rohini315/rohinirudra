var $document = $(document)

$document.scroll(function() {
  if ($document.scrollTop() >= 150) {
      $('span').addClass('half');
    } else {
      $('span').removeClass('half');
    }
  if ($document.scrollTop() >= 350) {
      $('span').addClass('whole');
      $('span').removeClass('half');
    } else {
      $('span').removeClass('whole');
    }
  });