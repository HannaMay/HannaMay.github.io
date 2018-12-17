(function($)
{
	$(window).load(function()
	{
		if($(".animsition").length)
		{
			$(".animsition").animsition(
			{
				inClass               :   'fade-in-up-sm',
				outClass              :   'fade-out-up-sm',
				inDuration            :    1100,
				outDuration           :    800,
				linkElement           :   '.animsition-link',
				loading               :    true,
				loadingParentElement  :   'body',
				unSupportCss          : [ 'animation-duration', '-webkit-animation-duration', '-o-animation-duration'],
				overlay               :   false,
				overlayClass          :   'animsition-overlay-slie',
				overlayParentElement  :   'body'
			});
		}
	});
})(jQuery);
