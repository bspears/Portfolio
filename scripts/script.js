$('.move').click(function(){
  $('html, body').animate({
    scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
  }, 800);
  return false;
});



  $('.slide').click(function(){
    var $this = $('.current');
    if ($this.next().hasClass('displayBox')) {
    $this.addClass('offRight');
    $this.next().removeClass('offLeft').addClass('current').addClass('center');
    $this.removeClass('current');
    };
  });

 $('.back').click(function(){
    var $this = $('.current');
    if($this.prev().hasClass('displayBox')){
    $this.addClass('offLeft');
    $this.prev().removeClass('offRight').addClass('current').addClass('center');
    $this.removeClass('current');
    };
  });
