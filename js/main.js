$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});


/******************************************************************************************************************************
Learn More Page Scroll
*******************************************************************************************************************************/
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 
(function() {
	var clicked_id;
	var audio_var = new Audio();
	
	
	$('.ppbutton').on("click",function(){
	  var datasrc = $(this).attr('data-src');
	  clicked_id= $(this).attr('id');
	  console.log(clicked_id);
	  audio_var.pause();
	  
	  $('.ppbutton').not(this).each(function(){
		  $(this).removeClass('fa-pause');
		   $(this).addClass('fa-play');
	  });
	  
	  if($(this).hasClass('fa-play')){
		 console.log('play_click');
		 audio_var.src=datasrc;
		 $(this).removeClass('fa-play');
		 $(this).addClass('fa-pause');
		 console.log(audio_var);
		 audio_var.play();
	   } else {
		 console.log('pause_click');
		 $(this).removeClass('fa-pause');
		 $(this).addClass('fa-play');
		 console.log(audio_var);
		 audio_var.pause();
		 //audio_var.src='';
		 //audio_var.load();
		 console.log(audio_var);
	   }
	
	  audio_var.onended = function() {
		 $("#"+clicked_id).removeClass('fa-pause');
		 $("#"+clicked_id).addClass('fa-play');
	  };
	  });


});




/******************************************************************************************************************************
Menu
*******************************************************************************************************************************/ 

(function() {

	var bodyEl = document.body,
		//content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		/* close the menu element if the target it´s not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
		*/
	}
	


	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();

})();


