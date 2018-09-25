var PoopDancer = function() {
  Dancer.call(this, top, left, timeBetweenSteps);
}
PoopDancer.prototype = Object.create(Dancer.prototype);
PoopDancer.prototype.constructor = PoopDancer;

PoopDancer.prototype.step = function() {

}