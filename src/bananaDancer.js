var BananaDancer = function(top, left, timeBetweenSteps) {
  (this).$node = $('<span class="banana"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
}
BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;

BananaDancer.prototype.step = function() {
  //Dancer.prototype.step.call(this);
  //this.$node.toggle();
  // this.$node.slideDown(slow);
};

BananaDancer.prototype.lineUp = function(leftPosition) {
  //this.$node.css('position','absolute');
  this.$node.css('top', 50);
  this.$node.css('left', leftPosition);
};