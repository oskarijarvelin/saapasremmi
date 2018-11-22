$(function() {
    var $masonry = $('.masonry').masonry();

    $('.js-ajax').on('click', function() {
        var data = $('.masonry').html();

        $(data).find('.card').each(function() {
            $masonry.push($(this));
        });
    });
});


function scrollProgress() {
  var currentState = document.body.scrollTop || document.documentElement.scrollTop;
  var pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollStatePercentage = (currentState / pageHeight) * 100;
  console.log(currentState);
  document.querySelector(".page-scroll-indicator > .progress").style.width = scrollStatePercentage + "%";
}

window.onscroll = function () { scrollProgress() };
