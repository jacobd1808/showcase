$(function() {

	/* ====================================
		Core
	===================================== */ 

	// For Quick Debugging 
	var t = 'testing';

	$('body').on('click', '.disable', function(e) {
		e.preventDefault();
	})

	/* ====================================
		Set Element Height
	===================================== */ 

	function setEleHeight() {
		$('.scriptHeight').each(function() {
			var removeHeightSum = 0;
			var removeEle = $(this).data('remove-ele'); 
			var parentEle = $(this).data('parent-ele'); 

			//console.log($('#'+parentEle).height())

			$('.'+removeEle).each(function() {
				removeHeightSum += $(this).outerHeight(); 
			}); 

			var calcHeight = $('#'+parentEle).height() - removeHeightSum;

			$(this).height(calcHeight);

		})
	} 

	/* ====================================
		Model Popup Functions
	===================================== */ 

	$('body').on('click', '.model-popup', function(){
		var content = $(this).data('content');
		var title = $(this).data('title');
		var id = $(this).data('profile-id');
		$('body').append('<div class="model-bg" id="model"> </div>');
		$('#model').load( "app/views/popups/"+content+".php", function() {
			$('#model').fadeIn(250);
			$('#popup-content').prepend('<h1 class="removeHeader"> '+title+'<span id="closeModel" class="close-model"> <i class="material-icons">close</i> </span> </h1>');
			// Load Content if Profile 
			if(id) { 
				loadProfileData(id);
			}
			var alignElem = $('.vert-center-popup');
			setEleHeight();
			setImageHeight()
			alignToVerticalCenter(alignElem); 
		});
	});

	// Give something a class of 'popup-tester' and valid popup file name (as a data-content)
	function defaultPopup(){
		if ($('.default-popup').length != 0) {
			var content = $('.default-popup').data('content');
			var title = $('.default-popup').data('title');
			$('body').append('<div class="model-bg" id="model"> </div>');
			$('#model').load( "app/views/popups/"+content+".php", function() {
				$('#model').fadeIn(250, function(){ 
					setImageHeight()
				});
				$('#popup-content').prepend('<h1 class="removeHeader">'+title+' <span id="closeModel" class="close-model"> <i class="material-icons">close</i> </span> </h1>');
				var alignElem = $('.vert-center-popup');
				alignToVerticalCenter(alignElem); 
				setImageHeight()
				setEleHeight();
			});
		}
	}

	function loadProfileData(id) { 

		var data = {type:"Fiat", model:"500", color:"white"};


		$('#profile-container').empty();
	    var source   = $("#profile-template").html();
		var template = Handlebars.compile(source);
		$('#profile-container').append(template(data));
		
		/*$.ajax({
			method: 'GET', 
			url : "http://api.nytimes.com/svc/search/v2/articlesearch",
			dataType: 'json',
			success: function(data) {
				console.log(data);
				$('#standings-table').empty();
			    var source   = $("#standings-template").html();
				var template = Handlebars.compile(source);
				$('#standings-table').append(template(data[key]));
			},
			error: function() { 
				console.log('error loading data');
			}
		});
		*/
	}

	defaultPopup();

	$('body').on('click', '#closeModel', function(){
	    $('#model').fadeOut(250, function(){ 
			$('#model').remove();
		})
	});

	/* ====================================
		Common Functions 
	===================================== */ 

	$( '.vert-center' ).each(function() {
		alignToVerticalCenter($(this));
	});

	function alignToVerticalCenter(ele){ 
		var pageHeight = $(window).height();
		var eleHeight = $(ele).height();
		var applyMargin = (pageHeight - eleHeight) / 2; 
		ele.css({'marginTop': applyMargin});
	}


	/* ====================================
		Tooltips 
	===================================== */ 
	/*
	 $('body').on('mouseover mouseout', '.tooltip', function(e) {
	    $('.tooltip.left-tooltip').tooltipster({
	       speed: 100,
	       delay: 50,
	       position: 'left',
	       theme: 'cust-tooltip'
	    });

	    $('.tooltip.right-tooltip').tooltipster({
	       speed: 100,
	       delay: 50,
	       position: 'right',
	       theme: 'cust-tooltip'
	    });

	  	$('.tooltip.bottom-tooltip').tooltipster({
		   speed: 100,
		   delay: 50,
		   position: 'bottom',
		   theme: 'cust-tooltip'
		});

	  	$('.tooltip.top-tooltip').tooltipster({
		   speed: 100,
		   delay: 50,
		   position: 'top',
		   theme: 'cust-tooltip'
		});
	});
	*/
	/* ====================================
		Fancy Box Gallery 
	===================================== */  

	$('body').on('click', '.fancybox', function(e) {
		$(".fancybox").fancybox();
	});

	function setImageHeight() {
		$( '.image-ratio' ).each(function() {
			var imageWidth = $('.image-ratio').width(); 
			$('.image-ratio').height(imageWidth); 
		}); 
	}	

	setImageHeight();

    /*$('#nav-button').sidr({
      name: 'responsive-nav',
      source: '#main-side-bar',
      renaming: false
    });*/

	/* ====================================
		Init
	===================================== */ 

});