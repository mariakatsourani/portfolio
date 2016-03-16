$(function() {

	$('#wrapper #nav li').on('click', function() {
		
		//make the current li active
		$('#wrapper #nav li.active').removeClass('active');
		$(this).addClass('active');
		
		//figure out the panel to show
		var panelToShow = $(this).attr('rel');

		//hide current panel
		$('#wrapper .panel.active').fadeOut(300, showNextPanel);
		
		//show new panel	
		function showNextPanel(){
			$(this).removeClass('active');

			$('#content #'+panelToShow).fadeIn(300, function(){

				$(this).addClass('active');

			});
		}
		

	});


});