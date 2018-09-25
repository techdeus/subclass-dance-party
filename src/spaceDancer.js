var SpaceDancer = function() {
  Dancer.call(this, top, left, timeBetweenSteps);
}
SpaceDancer.prototype = Object.create(Dancer.prototype);
SpaceDancer.prototype.constructor = SportsDancer;

SpaceDancer.prototype.step = function() {

}