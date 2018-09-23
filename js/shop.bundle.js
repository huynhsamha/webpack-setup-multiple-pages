(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_shop_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _scss_shop_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_shop_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_shop_responsive_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony import */ var _scss_shop_responsive_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_shop_responsive_scss__WEBPACK_IMPORTED_MODULE_1__);



/* JS Document */

/** ****************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Custom Dropdown
4. Init Page Menu
5. Init Recently Viewed Slider
6. Init Brands Slider
7. Init Isotope
8. Init Price Slider
9. Init Favorites


******************************/

$(document).ready(() => {
  'use strict';

  /*

	1. Vars and Inits

	*/

  var menuActive = false;
  var header = $('.header');

  setHeader();

  initCustomDropdown();
  initPageMenu();
  initViewedSlider();
  initBrandsSlider();
  initIsotope();
  initPriceSlider();
  initFavs();

  $(window).on('resize', () => {
    setHeader();
  });

  /*

	2. Set Header

	*/

  function setHeader() {
    // To pin main nav to the top of the page when it's reached
    // uncomment the following

    // var controller = new ScrollMagic.Controller(
    // {
    // 	globalSceneOptions:
    // 	{
    // 		triggerHook: 'onLeave'
    // 	}
    // });

    // var pin = new ScrollMagic.Scene(
    // {
    // 	triggerElement: '.main_nav'
    // })
    // .setPin('.main_nav').addTo(controller);

    if (window.innerWidth > 991 && menuActive) {
      closeMenu();
    }
  }

  /*

	3. Init Custom Dropdown

	*/

  function initCustomDropdown() {
    if ($('.custom_dropdown_placeholder').length && $('.custom_list').length) {
      var placeholder = $('.custom_dropdown_placeholder');
      var list = $('.custom_list');
    }

    placeholder.on('click', (ev) => {
      if (list.hasClass('active')) {
        list.removeClass('active');
      } else {
        list.addClass('active');
      }

      $(document).one('click', function closeForm(e) {
        if ($(e.target).hasClass('clc')) {
          $(document).one('click', closeForm);
        } else {
          list.removeClass('active');
        }
      });

    });

    $('.custom_list a').on('click', function (ev) {
      ev.preventDefault();
      var index = $(this).parent().index();

      placeholder.text($(this).text()).css('opacity', '1');

      if (list.hasClass('active')) {
        list.removeClass('active');
      } else {
        list.addClass('active');
      }
    });


    $('select').on('change', function (e) {
      placeholder.text(this.value);

      $(this).animate({ width: `${placeholder.width()}px` });
    });
  }

  /*

	4. Init Page Menu

	*/

  function initPageMenu() {
    if ($('.page_menu').length && $('.page_menu_content').length) {
      var menu = $('.page_menu');
      var menuContent = $('.page_menu_content');
      var menuTrigger = $('.menu_trigger');

      // Open / close page menu
      menuTrigger.on('click', () => {
        if (!menuActive) {
          openMenu();
        } else {
          closeMenu();
        }
      });

      // Handle page menu
      if ($('.page_menu_item').length) {
        var items = $('.page_menu_item');
        items.each(function () {
          var item = $(this);
          if (item.hasClass('has-children')) {
            item.on('click', (evt) => {
              evt.preventDefault();
              evt.stopPropagation();
              var subItem = item.find('> ul');
						    if (subItem.hasClass('active')) {
						    	subItem.toggleClass('active');
                TweenMax.to(subItem, 0.3, { height: 0 });
						    } else {
						    	subItem.toggleClass('active');
						    	TweenMax.set(subItem, { height: 'auto' });
                TweenMax.from(subItem, 0.3, { height: 0 });
						    }
            });
          }
        });
      }
    }
  }

  function openMenu() {
    var menu = $('.page_menu');
    var menuContent = $('.page_menu_content');
    TweenMax.set(menuContent, { height: 'auto' });
    TweenMax.from(menuContent, 0.3, { height: 0 });
    menuActive = true;
  }

  function closeMenu() {
    var menu = $('.page_menu');
    var menuContent = $('.page_menu_content');
    TweenMax.to(menuContent, 0.3, { height: 0 });
    menuActive = false;
  }

  /*

	5. Init Recently Viewed Slider

	*/

  function initViewedSlider() {
    if ($('.viewed_slider').length) {
      var viewedSlider = $('.viewed_slider');

      viewedSlider.owlCarousel(
        {
          loop: true,
          margin: 30,
          autoplay: true,
          autoplayTimeout: 6000,
          nav: false,
          dots: false,
          responsive:
				{
				  0: { items: 1 },
				  575: { items: 2 },
				  768: { items: 3 },
				  991: { items: 4 },
				  1199: { items: 6 }
				}
        }
      );

      if ($('.viewed_prev').length) {
        var prev = $('.viewed_prev');
        prev.on('click', () => {
          viewedSlider.trigger('prev.owl.carousel');
        });
      }

      if ($('.viewed_next').length) {
        var next = $('.viewed_next');
        next.on('click', () => {
          viewedSlider.trigger('next.owl.carousel');
        });
      }
    }
  }

  /*

	6. Init Brands Slider

	*/

  function initBrandsSlider() {
    if ($('.brands_slider').length) {
      var brandsSlider = $('.brands_slider');

      brandsSlider.owlCarousel(
        {
          loop: true,
          autoplay: true,
          autoplayTimeout: 5000,
          nav: false,
          dots: false,
          autoWidth: true,
          items: 8,
          margin: 42
        }
      );

      if ($('.brands_prev').length) {
        var prev = $('.brands_prev');
        prev.on('click', () => {
          brandsSlider.trigger('prev.owl.carousel');
        });
      }

      if ($('.brands_next').length) {
        var next = $('.brands_next');
        next.on('click', () => {
          brandsSlider.trigger('next.owl.carousel');
        });
      }
    }
  }

  /*

	7. Init Isotope

	*/

  function initIsotope() {
    var sortingButtons = $('.shop_sorting_button');

    $('.product_grid').isotope({
      itemSelector: '.product_item',
      getSortData: {
            	price(itemElement) {
            		var priceEle = $(itemElement).find('.product_price').text().replace('$', '');
            		return parseFloat(priceEle);
            	},
            	name: '.product_name div a'
      },
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });

    // Sort based on the value from the sorting_type dropdown
    sortingButtons.each(function () {
        	$(this).on('click', function () {
        		$('.sorting_text').text($(this).text());
        		var option = $(this).attr('data-isotope-option');
        		option = JSON.parse(option);
        $('.product_grid').isotope(option);
        	});
    });

  }

	 /*

	8. Init Price Slider

	*/

  function initPriceSlider() {
    	if ($('#slider-range').length) {
    		$('#slider-range').slider(
        {
          range: true,
          min: 0,
          max: 1000,
          values: [0, 580],
          slide(event, ui) {
            $('#amount').val(`$${ui.values[0]} - $${ui.values[1]}`);
          }
        }
      );

      $('#amount').val(`$${$('#slider-range').slider('values', 0)} - $${$('#slider-range').slider('values', 1)}`);
      $('.ui-slider-handle').on('mouseup', () => {
        $('.product_grid').isotope({
		            filter() {
		            	var priceRange = $('#amount').val();
			        	var priceMin = parseFloat(priceRange.split('-')[0].replace('$', ''));
			        	var priceMax = parseFloat(priceRange.split('-')[1].replace('$', ''));
			        	var itemPrice = $(this).find('.product_price').clone().children()
              .remove()
              .end()
              .text()
              .replace('$', '');

			        	return (itemPrice > priceMin) && (itemPrice < priceMax);
		            },
		            animationOptions: {
		                duration: 750,
		                easing: 'linear',
		                queue: false
		            }
		        });
      });
    	}
  }

  /*

	9. Init Favorites

	*/

  function initFavs() {
    // Handle Favorites
    var items = document.getElementsByClassName('product_fav');
    for (var x = 0; x < items.length; x++) {
      var item = items[x];
      item.addEventListener('click', (fn) => {
        fn.target.classList.toggle('active');
      });
    }
  }
});


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[42,0]]]);