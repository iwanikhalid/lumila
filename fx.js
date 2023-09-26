videoFilenamesCustom = '';
videoFilenames = '';
var hasBeenClicked = false;
$('#thumbsCustom').hide();

$(document).ready(function () {
	
	// CAN EDIT:: Insert numbers here for permanent listing
	// Listing the filenames in array
	var videoFilenames = ["1", "2"];
	
	// Admin Button
	$('#admin').click(function(){
		hasBeenClicked = true;	
		load_custom();				
	});
	
	if (hasBeenClicked) {		
	} else {
		//alert("prep to load default");
		load_default();
	}
	
	// Dark mode switcher	 
    $('.checkbox').change(function() {
        //if(this.checked) {
			$('body').toggleClass("dark"); //you can list several class names 
			e.preventDefault();
        //}         
    });
	
	// Load custom video list
	function load_custom() {
		alert("Hi parents! Welcome to LUMILA Admin. \n\nHere, you can change the no of videos for this current browsing session We don't store the data permanently.");
		var adminpass = window.prompt("Enter password", "Enter password");
		if(adminpass != 'durian') { 
			$('#thumbsCustom').hide();
			$('#thumbs').show();
			alert("Wrong passowrd entered. Reverting to default no of videos"); 
			//alert(videoFilenames);
		}else{
			$('#thumbsCustom').show();
			$('#thumbs').hide();
			// alert(videoFilenames);
			var customVideoTotal = window.prompt("Enter new video total", "Use numbers only 1-100");
			var customVideoTotal = parseInt(customVideoTotal); 
			//alert(customVideoTotal);
			// DONE: Generate videoFilenamesCustom array based on max no newvideocount
			var min = 1, max = customVideoTotal;
			var videoFilenamesCustom = Array.apply(null, {length: max + 1 - min}).map(function(_, idx) {
				return idx + min;
			});
			//var videoFilenames = videoFilenamesCustom;
			//alert(videoFilenames);
			//console.log(x);
			//alert(videoFilenamesCustom);
			
					videoFilenamesCustom = randomize(videoFilenamesCustom);
					function randomize(arr) {
						for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
						return arr;
					}	
					
					$.each(videoFilenamesCustom, function( i, v ) {
					  // alert(i + ": " + v );
					  var i = Math.floor(Math.random() * videoFilenames.length);
					  // i: position in array
					  // v: value in that position
					  
					  $("#thumbsCustom").append('<div class=thumb genstyle><video controls preload=auto><source src=video/video_' + v + '.mp4#t=30.1 type=video/mp4></video></div>');

					 $("video").on("play", function (e) {
						//alert("playing");
							$('video').not(this).each(function(){
								var $playpause = $(this);
								video = $playpause[0];
								video.pause();
							});
					 });	  
					  
					});

			}
	}
	
	//  Load default video list
	function load_default() {
		// alert("ok");
		videoFilenames = randomize(videoFilenames);
		function randomize(arr) {
			for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
			return arr;
		}	
		
		$.each(videoFilenames, function( i, v ) {
		  // alert(i + ": " + v );
		  var i = Math.floor(Math.random() * videoFilenames.length);
		  // i: position in array
		  // v: value in that position
		  
			$("#thumbs").append('<div class=thumb genstyle><video controls preload=auto><source src=video/video_' + v + '.mp4#t=30.1 type=video/mp4></video></div>');

			 $("video").on("play", function (e) {
				//alert("playing");
					$('video').not(this).each(function(){
						var $playpause = $(this);
						video = $playpause[0];
						video.pause();
					});
			 });	  
		  
		});
	}	
	
}) 

