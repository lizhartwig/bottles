describe('bottles', function () {
  it ("will only accept integers between 0 and 99", function () {
    expect(bottles(0)).to.equal(true);
  });

});
