var SportsDancer = function() {
  Dancer.call(this, top, left, timeBetweenSteps);
}
SportsDancer.prototype = Object.create(Dancer.prototype);
SportsDancer.prototype.constructor = SportsDancer;

SportsDancer.prototype.step = function() {

}

