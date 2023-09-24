$(document).ready(function () {
// dark mode switcher	 
    $('.checkbox').change(function() {
        //if(this.checked) {
			$('body').toggleClass("dark"); //you can list several class names 
			e.preventDefault();
        //}         
    });
	
	

	var videoFilenames = ["01", "02", "03", "04", "05", "06", "07"];
	// Listing the filenames in array

	var randomVideo = Math.floor(Math.random() * videoFilenames.length); 
	// Selecting a random number (position in array) based on the number of filenames. It will start from 0

	var videoFilename = videoFilenames[randomVideo];
	// Get the filename belonging to the random position chosen above. 

	//console.log(videoFilenames);
	//console.log(randomVideo);
	//console.log(videoFilename);
	//$( "#thumbs" ).prepend('<div class=thumb genstyle><video controls><source src=video/video_' + videoFilename + '.mp4 type=video/mp4></video></div>');

	// TODO: 
	// DONE: Generate markup based on videoFilenames length eg: if 20, 20 video will be appended
	// DONE: And each video is unique, no dupes
	// DONE: Randomize the order of append/display. Cilok tapi tak faham haha!!

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
	  
	  $( "#thumbs" ).prepend('<div class=thumb genstyle><video controls preload=auto><source src=video/video_' + v + '.mp4#t=0.001 type=video/mp4></video></div>');

	 $("video").on("play", function (e) {
		//alert("playing");
			$('video').not(this).each(function(){
				var $playpause = $(this);
				video = $playpause[0];
				video.pause();
			});
	 });	  
	  
	});

}) 
