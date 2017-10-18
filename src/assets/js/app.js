import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
import slick from 'slick-carousel';

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$('.slider').slick({
  infinite: false,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: true
    }
  }, {
    breakpoint: 300,
    settings: "unslick" // destroys slick
  }]
});
