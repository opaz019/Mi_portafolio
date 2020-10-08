$(function(){
	
	//Smooth Scrolling
	$(".nav-item a.nav-link, .navbar-brand, .btn-work").click(function(event) {
		if (this.hash !== "") {
			event.preventDefault();

			var gato = this.hash;

			$("html, body").animate({
				scrollTop:$(gato).offset().top
			}, 800, function(){
				window.location.hash = gato;
			});
		}
	});

	//Closes navbar menu when clicking on an item, on small screens
	$('.nav-link').click(function () {
        $(".navbar-collapse").collapse('hide');
    });

	//Activate popovers
	$(function () {
		$('[data-toggle="popover"]').popover()
	})

});