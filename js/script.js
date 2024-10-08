

  $(document).ready(function(){


    $( "#draggable" ).draggable();

    //dropable 
    $( "#droppable" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .addClass( "ui-state-highlight" )
            .find( "p" )
              .html( "Dropped!" );
        }
      });


      // reszeable

      $( "#resizable" ).resizable();

      //selectable

      $( "#selectable" ).selectable();

      //sortable 

      $( "#sortable" ).sortable();

      $( "#accordion" ).accordion();

      var FirstName = [
        "Atiq",
        "Asif",
        "basir",
        "riad",
        "root",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
      $( "#FirstName" ).autocomplete({
        source: FirstName
      });


      $( "#datepicker" ).datepicker();

      //dialogue

  $( "#dialog-message" ).dialog({
    modal: true,
    buttons: {
      Ok: function() {
        $( this ).dialog( "close" );
      }
    }
  });
    
      

//show 
// run the currently selected effect
function runEffect() {
  // get effect type from
  var selectedEffect = $( "#effectTypes" ).val();

  // Most effect types need no options passed by default
  var options = {};
  // some effects have required parameters
  if ( selectedEffect === "scale" ) {
    options = { percent: 50 };
  } else if ( selectedEffect === "size" ) {
    options = { to: { width: 280, height: 185 } };
  }

  // Run the effect
  $( "#effect" ).show( selectedEffect, options, 500, callback );
 };

 //callback function to bring a hidden box back
 function callback() {
  setTimeout(function() {
    $( "#effect:visible" ).removeAttr( "style" ).fadeOut();
  }, 1000 );
 };

  // Set effect from select menu value
 $( "#button" ).on( "click", function() {
  runEffect();
 });

 $( "#effect" ).hide();





  });



  