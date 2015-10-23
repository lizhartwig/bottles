describe('bottles', function () {
  it("will only accept integers between 0 and 99", function () {
    expect(bottles(0)).to.equal(true);
    expect(bottles(99)).to.equal(true);
    expect(bottles(-1)).to.equal(false);
    expect(bottles(100)).to.equal(false);
  });
  it("will not accept strings", function () {
    expect(bottles("are")).to.equal(false);
  });


});
