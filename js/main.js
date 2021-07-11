'use strict';

let slideImg = $('.slide_imgBox'); 

function slideShow(){
  if ($(slideImg).hasClass('company')) {
    slideImg.hide(2000);
    slideImg.css('background-image', 'url(img/news.png)');
    slideImg.show(2000);
    slideImg.hide(2000);
    slideImg.addClass('news'); 
  }

  else if ($(slideImg).hasClass('news')) {
    slideImg.removeClass('news'); 
    slideImg.css('background-image', 'url(img/office.png)');
    slideImg.show(2000);
    slideImg.hide(2000);
    slideImg.addClass('office'); 
  }
  
  else{ 
    slideImg.removeClass('office'); 
    slideImg.css('background-image', 'url(img/company.png)');
    slideImg.show(2000);
    slideImg.hide(2000);
    slideImg.addClass('company'); 
  }
}

setInterval(slideShow, 2000); 


