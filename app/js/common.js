//  scroll page
jQuery(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });
});

//  mobile menu toggle
jQuery(document).ready(function () {
    $('.navToggle').on('click', function () {
        $('.navlist').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

//  fixed header navbar
jQuery(document).ready(function () {

    var $menu = $("header");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 500 && $menu.hasClass("default")) {
            $menu.fadeOut('fast', function () {
                $(this).removeClass("default")
                    .addClass("fixed transbg")
                    .fadeIn('fast');
            });
        } else if ($(this).scrollTop() <= 500 && $menu.hasClass("fixed")) {
            $menu.fadeOut('fast', function () {
                $(this).removeClass("fixed transbg")
                    .addClass("default")
                    .fadeIn('fast');
            });
        }
    });
});

//  animated button
jQuery(document).ready(function () {
    var anchor = document.querySelectorAll('button');

    [].forEach.call(anchor, function (anchor) {
        var open = false;
        anchor.onclick = function (event) {
            event.preventDefault();
            if (!open) {
                this.classList.add('close');
                open = true;
            } else {
                this.classList.remove('close');
                open = false;
            }
        }
    });
});

//  tabs work
jQuery(document).ready(function () {
    $(".tab_item").not(":first").hide();
    $(".row .tab").click(function () {
        $(".row .tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");
});

//  tabs work show more
jQuery(document).ready(function () {
    $(".box-hidden").slice(0, 4).show();

    $("#loadMore").on('click', function (e) {

        e.preventDefault();

        $(".box-hidden:hidden").slice(0, 2).slideDown();
        if ($(".box-hidden:hidden").length == 0) {
            $("#load").fadeOut('show');
        }

        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });

});

//  scrollspy
const nav = document.querySelector('.navlist');
const navItems = nav.querySelectorAll('a');
const sections = document.querySelectorAll('.scroll-section');

function scrollSpy(e) {
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop) {
      let id = section.getAttribute('id');
      navItems.forEach(item => {
        if (item.getAttribute('href').slice(1) === id) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });
    }
  });
}

window.addEventListener('scroll', scrollSpy);