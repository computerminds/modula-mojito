/* Add some classes to help our CSS out a bit. */
(function($) {
	$(function() {
		if ($('#content > .breadcrumb').length) {
			$('#content > .contextual').addClass('with-breadcrumb');
		}
	});
})(jQuery);