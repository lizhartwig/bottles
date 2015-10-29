describe('bottles', function() {
  it("displays the lyrics to 99 bottles of the beer on the wall, if the user enters any number above '2'", function() {
    expect(bottles(99)).to.equal("99 bottles of beer on the wall, 99 bottles of beer.");
  });
  it("displays the lyrics to 1 bottle of beer on the wall, if the user enters the number '1'", function() {
    expect(bottles(1)).to.equal("1 bottle of beer on the wall, 1 bottle of beer.");
  });
  it("displays the lyrics to 0 bottles of beer on the wall, if the user enters the number '0'", function() {
    expect(bottles(0)).to.equal("No more bottles of beer on the wall, no more bottles of beer.");
  });
    it("displays 'please enter a valid number', if the user enters anything other than than zero or positive numbers", function() {
    expect(bottles("wing")).to.equal("Please enter a valid number.");
  });

});
//   