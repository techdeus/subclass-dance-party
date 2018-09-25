var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  // this.step();
  // this.setPosition(this.top, this.left);
}

makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(makeDancer.step, this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
    
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);

};

//makeDancer.prototype.$node = $('<span class="dancer"></span>');




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