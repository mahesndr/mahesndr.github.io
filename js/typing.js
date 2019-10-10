(function ($) {
  // Caption
  $('.article-entry').each(function (i) {
    $(this).find('img').each(function () {
      if ($(this).parent().hasClass('fancybox')) return

      var alt = this.alt

      if (alt) {
        $(this).after('<span class="caption">' + alt + '</span>')
      }

      $(this).wrap('<a href="' + this.src + '" data-fancybox=\"gallery\" data-caption="' + alt + '"></a>')
    })

    $(this).find('.fancybox').each(function () {
      $(this).attr('rel', 'article' + i)
    })
  })

  if ($.fancybox) {
    $('.fancybox').fancybox()
  }

	  MainBox.click(function(event) {
		  if (currentQR) currentQR.removeClass('showQR').addClass('hideQR');
		  setTimeout (function(a) {
			  QRBox.fadeOut(300,function(argument) {
				  MainBox.removeClass('hideQR');
			  });
			  $('#DonateText,#donateBox,#github').removeClass('blur');
		  },600);
    });
  });
})(jQuery)
