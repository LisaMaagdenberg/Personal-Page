function About() {
	$('.contentPortfolio').hide();
	$('.contentContact').hide();
}

$(document).ready(About);

$('#About').on('click', function() {
	$('.contentAbout').show();
	$('.contentPortfolio').hide();
	$('.contentContact').hide();
})

$('#Portfolio').on('click', function() {
	$('.contentAbout').hide();
	$('.contentPortfolio').show();
	$('.contentContact').hide();
})

$('#Contact').on('click', function() {
	$('.contentAbout').hide();
	$('.contentPortfolio').hide();
	$('.contentContact').show();
})
