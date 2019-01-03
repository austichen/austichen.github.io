$(document).ready(function(){
    $("#nav-dropdown-button").click(function(){
        $('.dropdown-items').toggleClass('show-dropdown')
    });

    $('body').click(function(e){
      if(e.target.class=='dropdown-items' || e.target.id=="nav-dropdown-button") {
        return;
      }
      if($(e.target).closest('.dropdown-items').length) {
        return;
      }
      if($('.dropdown-items').hasClass('show-dropdown')) {
        $('.dropdown-items').removeClass('show-dropdown');
      }
    })

    $(".toggle-bio-text").click(function(){
        $('#hidden-bio-text').toggleClass('hide-text')
        $('#show-more').toggleClass('hide-text')
    });

    $(window).resize(function(){
      if($(window).width()>768) {
        $('.dropdown-items').removeClass('show-dropdown')
      }
    })

    $('.project-anchor').click(function() {
      var location=`#${$(this).attr('location')}`
      $('html,body').animate({scrollTop: $(location).offset().top}, 'slow')
    })
});
