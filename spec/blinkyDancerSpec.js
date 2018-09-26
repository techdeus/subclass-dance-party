describe('robotDancer', function() {
  
  var robotDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    robotDancer = new RobotDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(robotDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should be an instance of the Dancer Superclass', function() {
    expect(robotDancer).to.be.an.instanceof(Dancer);
  });
});



describe('poopDancer', function() {
  
  var poopDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    poopDancer = new PoopDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(poopDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should be an instance of the Dancer Superclass', function() {
    expect(poopDancer).to.be.an.instanceof(Dancer);
  });
});

describe('bananaDancer', function() {
  
  var bananaDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bananaDancer = new BananaDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bananaDancer.$node).to.be.an.instanceof(jQuery);
  });
  
  it('should be an instance of the Dancer Superclass', function() {
    expect(bananaDancer).to.be.an.instanceof(Dancer);
  });
});

describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer =  new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
      // debugger;
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});
  