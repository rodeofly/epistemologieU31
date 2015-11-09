$( document ).ready(function() {
    console.log( "ready!" );
    
    $( "#toggle" ).click(function() {
      $( "#header" ).toggle( "slow", function() {
      // Animation complete.
	  });
	});

});


