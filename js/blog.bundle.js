(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_blog_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _scss_blog_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_blog_styles_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_blog_responsive_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _scss_blog_responsive_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_blog_responsive_scss__WEBPACK_IMPORTED_MODULE_1__);



/* JS Document */

/** ****************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Custom Dropdown
4. Init Page Menu


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
});


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[6,0]]]);