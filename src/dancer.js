var Dancer = function(top, left, timeBetweenSteps) { 
  this.randNum = Math.floor( Math.random() * 2);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  if (!this.$node){
    this.$node = $('<span class="dancer"></span>');
  }
  //this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
}

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  this.$node.css('top', top);
  this.$node.css('left', left);
};

Dancer.prototype.lineUp = function(leftPosition, topSpec) {
  //this.$node.css('position','absolute');
  this.$node.css('top', topSpec);
  this.$node.css('left', leftPosition);
}





// // Creates and returns a new dancer object that can step

// var makeDancer = class {
//   constructor(top, left, timeBetweenSteps) {
//     this.styleSettings = {
//       top: top,
//       left: left
//     };
//     this.timeBetweenSteps = timeBetweenSteps;
//     this.$node = $('<span class="dancer"></span>');
//     this.step();
//     this.setPosition(this.styleSettings.top, this.styleSettings.left);
//   }
  
//     step() {
//       // the basic dancer doesn't do anything interesting at all on each step,
//       // it just schedules the next step
//       setTimeout(step.bind(this), this.timeBetweenSteps);
//     }

//     setPosition(top, left) {
//       // Use css top and left properties to position our <span> tag
//       // where it belongs on the page. See http://api.jquery.com/css/
//       //
//       // var styleSettings = {
//       //   top: top,
//       //   left: left
//       // };
//       this.$node.css(this.styleSettings);
//     }
// }