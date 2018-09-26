$(document).ready(function() {
  window.bananaDancers = [];
  window.poopDancers = [];
  window.robotDancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $(".danceFloor").height() * Math.random() * 0.475,
      $(".danceFloor").width() * Math.random() * 0.9,
      Math.random() * 1000
    );

    $('.danceFloor').append(dancer.$node);
    
    if ( this.id === 'bananaDancer') {
      window.bananaDancers.push(dancer);
    } else if (this.id ==='poopDancer') {
      window.poopDancers.push(dancer);
    } else {
      window.robotDancers.push(dancer);
    }

  });

  $('.lineUpButton').on('click', function(event) {
    var leftPosition = 30;
    for (var i = 0; i < window.bananaDancers.length; i++) {
      window.bananaDancers[i].lineUp(leftPosition, 50);
      leftPosition += 60;
    }
    var rightPosition = 30;
    for (var i = 0; i < window.poopDancers.length; i++) {
      window.poopDancers[i].lineUp(rightPosition, 500);
      rightPosition += 60;
    }
    var middlePosition = 30;
    for (var i = 0; i < window.robotDancers.length; i++) {
      window.robotDancers[i].lineUp(middlePosition, 300);
      middlePosition += 60;
    }
  });
  
  

});