var RobotDancer = function(top, left, timeBetweenSteps) {
  (this).$node = $('<span class="robot1"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
}
RobotDancer.prototype = Object.create(Dancer.prototype);
RobotDancer.prototype.constructor = RobotDancer;

RobotDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
  this.$node.slideDown(slow);
}