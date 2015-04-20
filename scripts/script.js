$('.persistNav').hide();

$('.move').click(function(){
  $('html, body').animate({
    scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
  }, 800);
  return false;
});

$(document).ready(function(){
  $(document).scroll(function() {
    var top = $(document).scrollTop();
    if (top > 590) {
      $('.persistNav').show('slow');
    } else if (top < 500) {
        $('.persistNav').hide('slow');
    }
  });
});


 //  $('.viewProject').click(function(){
 //    var $this = $('.current');
 //    if ($this.next().hasClass('displayBox')) {
 //    $this.addClass('offRight');
 //    $this.next().removeClass('offLeft').addClass('current').addClass('center');
 //    $this.removeClass('current');
 //    };
 //  });

 // $('.back').click(function(){
 //    var $this = $('.current');
 //    if($this.prev().hasClass('displayBox')){
 //    $this.addClass('offLeft');
 //    $this.prev().removeClass('offRight').addClass('current').addClass('center');
 //    $this.removeClass('current');
 //    };
 //  });

