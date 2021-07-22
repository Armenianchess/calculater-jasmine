
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 5,
    rate: 3.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('18.19')
});


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 1000,
    years: 5,
    rate: 3.5
  }
  expect(calculateMonthlyPayment(values)).toEqual('18.19')
});

/// etc
