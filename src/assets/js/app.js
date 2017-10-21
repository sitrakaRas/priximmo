import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
import slick from 'slick-carousel';

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

let slider = $('.slider');
let settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  }
slider.slick(settings);

$(window).on('resize', function() {
  if ($(window).width() > 767) {
    if (slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
    }
    return
  }

  if (!slider.hasClass('slick-initialized')) {
    return slider.slick(settings);
  }
});
$(window).trigger('resize');

