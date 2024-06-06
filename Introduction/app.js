
$(document).ready(()=>{
  // header section
  $('.toggler').click(()=>{
    $('ul').toggle(700)
    $('.content').fadeTo(700, 0.2)
    $('.toggler').fadeOut(800)
  })
  
  $('a').click(()=>{
    $('ul').hide(700)
    $('.content').fadeTo(700, 1)
    $('.toggler').fadeIn(800)
  })
  // content section
  $('.content-btn').click(()=>{
    $('.top').fadeToggle(800)
    $('.bottom').fadeToggle(800)
  })
  // section-slide 
  $('.slide-btn').click(()=>{
    $('.slide-ul').slideToggle(800)
  })
  // section-animate 
  $('.animate-btn').click(()=>{
    $('.slide-ul').animate({left:'20px'})
  })
})