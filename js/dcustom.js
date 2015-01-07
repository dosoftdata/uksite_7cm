$( document ).ready(function() {
    $('.green-star').on("click",function(event) {
        $( this ).toggleClass( "green-star" );
        $( this ).toggleClass( "white-star" );
    });
	
	$('.white-star').on("click", function(event) {
        $( this ).toggleClass( "green-star" );
        $( this ).toggleClass( "white-star" );
    });
		
	$('#arrow-nav-related,#arrow-nav,#arrow-nav-1,#arrow-nav-2').hover(function() {
		$(this).toggleClass('arrow-nav-std');
		$(this).toggleClass('arrow-nav-over');
	});
	
	$('.add-to').hover(function() {
		$(this).toggleClass('menu-buttons-std');
		$(this).toggleClass('menu-buttons-over');
		$(this).find('div').toggleClass('green-star-std');
		$(this).find('div').toggleClass('green-star-over');
	});
	
	$('.back-to').hover(function() {
		$(this).toggleClass('menu-buttons-std');
		$(this).toggleClass('menu-buttons-over');
		$(this).find('div').toggleClass('browser-button-std');
		$(this).find('div').toggleClass('browser-button-over');
	});
	
	$('.see-related').hover(function() {
		$(this).toggleClass('menu-buttons-std');
		$(this).toggleClass('menu-buttons-over');
		$(this).find('div').toggleClass('add-button-std');
		$(this).find('div').toggleClass('add-button-over');
	});
	
	$('.widget-box').hover(function() {
		$(this).toggleClass('widget-box-std');
		$(this).toggleClass('widget-box-over');
	});
	
	$('.wish-pdf,.wish-add,.wish-call').hover(function() {
		$(this).toggleClass('wish-menu-buttons-std');
		$(this).toggleClass('wish-menu-buttons-over');
		$(this).find('div').toggleClass('green-star-std');
		$(this).find('div').toggleClass('green-star-over');
	});	
	
	$('.i-button').hover(function() {
		$(this).toggleClass('i-button-std');
		$(this).toggleClass('i-button-over');
	});	
	
	$('.fav-button').hover(function() {
		$(this).toggleClass('fav-button-std');
		$(this).toggleClass('fav-button-over');
	});	
	
	$('.delete-button').hover(function() {
		$(this).toggleClass('delete-button-std');
		$(this).toggleClass('delete-button-over');
	});
	
	
    $('.open-search-box').bind('click', function (e) {
        e.preventDefault();
        $("#popupBottom").modalPopover('show');
    });
	
    $('#close-search-box').click(function (e) {
        e.preventDefault();
        $(".popover").hide();
    });
}); 