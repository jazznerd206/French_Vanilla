// WHEN (componentDidMount())
$.when( $.ready, customPromise )
  .then( function() {
    // main code
  } )
  .catch( function( error ) {
    // handle errors
})

// SLIDE
$( "#clickme" ).on('click', function() {
    $( "#book" ).slideToggle( "slow", function() {
      // Animation complete.
    });
});
// FADE
$( "button" ).first().on('click', function() {
    $( "p" ).first().fadeToggle( "slow", "linear" );
  });
  $( "button" ).last().on('click', function() {
    $( "p" ).last().fadeToggle( "fast", function() {
      $( "#log" ).append( "<div>finished</div>" );
    });
});

// CHILD
$( "ul.topnav > li" ).css( "border", "3px double red" );
// SIBLING
$( "#prev ~ div" ).css( "border", "3px groove blue" );

// NO CONFLICT 
$.noConflict();
jQuery( document ).on('ready', function( $ ) {
// Code that uses jQuery's $ can follow here.
});
// Code that uses other library's $ can follow here.

// MAP DATA
$( ":checkbox" )
  .map(function() {
    return this.id;
  })
  .get()
  .join();

// MAP DOM
$.fn.equalizeHeights = function() {
    var maxHeight = this.map(function( i, e ) {
      return $( e ).height();
    }).get();
    return this.height( Math.max.apply( this, maxHeight ) );
  };
   
  $( "input" ).on('click', function() {
    $( "div" ).equalizeHeights();
  });
