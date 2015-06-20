$(document).ready(function()
{
	
	var offsets; //initialize it so its available to all functions

	function offset_upadate() {
		//updating the array
		offsets = [
			$('#main').offset().top - 140,
			$('#sMembers').offset().top - 140,
			$('#sBoard').offset().top - 140,
			$('#sCommittee').offset().top - 140,
			$('#sGallery').offset().top - 140,
			$('#sContact').offset().top - 140,
		];
		console.log(offsets);
	}

	offset_upadate();//when page first loads
	$(window).resize(offset_upadate);//anytime they resize the window

	$(window).scroll(function()
	{
		
		var howFarFromTop = $(window).scrollTop();

		console.log(howFarFromTop);

		if (howFarFromTop > 159)
		{
			$('#mainmenu').addClass('pinned');
		}
		else
		{
			$('#mainmenu').removeClass('pinned');
		}

		//manage which link is selected
		if (howFarFromTop <= offsets[1])
		{
			$('#mainmenu nav a').removeClass('theOne');
			$('#mainmenu nav a:eq(0)').addClass('theOne');
		}
		else if (howFarFromTop >= offsets[1] && howFarFromTop < offsets[2])
		{
			$('#mainmenu nav a').removeClass('theOne');
			$('#mainmenu nav a:eq(1)').addClass('theOne');
		}
		else if (howFarFromTop >= offsets[2] && howFarFromTop < offsets[3])
		{
			$('#mainmenu nav a').removeClass('theOne');
			$('#mainmenu nav a:eq(2)').addClass('theOne');
		}
		else if (howFarFromTop >= offsets[3])
		{
			$('#mainmenu nav a').removeClass('theOne');
			$('#mainmenu nav a:eq(3)').addClass('theOne');
		}

	}); /*ends the window scroll*/


	$('#mainmenu nav a').click(function(event){
		event.preventDefault(); /*kill default jump to - we'll take it from here*/

		// manage chosen state
		$('#mainmenu nav a').removeClass('theOne');
		$(this).addClass('theOne');

		// manage the Scroll To


		var theHref = $(this).attr('href');
		console.log(theHref);

		var newLoc = $(theHref).offset().top - 140;

		$(window).scrollTo(newLoc, 1000);


	});

	$('#myCarousel').on('slide.bs.carousel', function () {
	  // do something…
	})


}); /*end doc ready*/