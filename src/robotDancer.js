var RobotDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="robot1"><img src="images/robot.png" width="100" height="100"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
}
RobotDancer.prototype = Object.create(Dancer.prototype);
RobotDancer.prototype.constructor = RobotDancer;

RobotDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({opacity: '0.5'}).toggle();
}