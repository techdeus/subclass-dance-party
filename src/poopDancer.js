var PoopDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="poop"><img src="images/poop/poop.png" height=100px width=100px alt="poop"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
}
PoopDancer.prototype = Object.create(Dancer.prototype);
PoopDancer.prototype.constructor = PoopDancer;

PoopDancer.prototype.step = function() {
  //Dancer.prototype.step.call(this);
  //this.$node.toggle();  
};

PoopDancer.prototype.lineUp = function(leftPosition) {
  //this.$node.css('position','absolute');
  this.$node.css('top', 200);
  this.$node.css('left', leftPosition);
};