var PoopDancer = function() {
  Dancer.call(this, top, left, timeBetweenSteps);
}
PoopDancer.prototype = Object.create(Dancer.prototype);
PoopDancer.prototype.constructor = SportsDancer;

PoopDancer.prototype.step = function() {

}